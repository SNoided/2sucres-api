const pathModule = require('path')
const ow = require('ow')
const _ = require('lodash')
const { ApiError } = require('./errors')

function retrieveMethod (name) {
  ow(name, ow.string)
  const path = './' + pathModule.join('api', _.kebabCase(name))
  return require(path)
}

const methods = require('./methods')

const apiPrototype = {
  ...Object.assign(...methods.map(methodName => Object({ [methodName]: retrieveMethod(methodName) })))
}

const TIMEOUT_ERRORS = [
  'Merci d\'attendre avant d\'effectuer cette action',
  'Merci d\'attendre avant de renvoyer un message',
  'Merci d\'attendre avant de recréer un topic',
  'Vous venez de créer ce message, merci de patienter'
]

async function sleep (time) {
  return new Promise(resolve => setTimeout(resolve, time))
}

function apiFactory (cookies, csrfToken) {
  const rq = require('request-promise-native').defaults({
    headers: {
      cookie: cookies
    },
    json: true
  })
  const request = async function (...params) {
    while (true) {
      try {
        const result = await rq(...params)
        if (result.error) {
          throw new ApiError(result.error)
        }
        return result
      } catch (err) {
        if (err instanceof ApiError) {
          if (TIMEOUT_ERRORS.includes(err.message)) {
            await sleep(1000)
            continue
          }
        }
        throw err
      }
    }
  }
  return Object.assign(Object.create(apiPrototype, {}), {
    cookies,
    csrfToken,
    request
  })
}

module.exports = apiFactory
