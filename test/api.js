const { cookies, csrfToken } = require('./config')
module.exports = require('..')(cookies, csrfToken)
