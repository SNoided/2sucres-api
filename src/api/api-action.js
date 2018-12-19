const ow = require('ow')

module.exports = async function apiAction (action, parameters = {}) {
  ow(action, ow.string)
  ow(parameters, ow.object)
  return this.request('https://2sucres.org/web-api/51/?do=' + action, {
    method: 'POST',
    form: Object.assign({
      do: action,
      'AJAX-CSRF': this.csrfToken
    }, parameters)
  })
}
