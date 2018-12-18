const ow = require('ow')
const { ApiError } = require('../errors')

module.exports = async function apiAction (action, parameters = {}) {
  ow(action, ow.string)
  ow(parameters, ow.object)
  const result = await this.request('https://2sucres.org/web-api/51/?do=' + action, {
    method: 'POST',
    form: Object.assign({
      do: action,
      'AJAX-CSRF': this.csrfToken
    }, parameters)
  })
  if (result.error) {
    throw new ApiError(result.error)
  }
  return result
}
