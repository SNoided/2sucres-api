const ow = require('ow')
const { normalizeMessage } = require('../utils')

/**
 * Récupère les informations d'un message par son id
 *
 * @param {number} messageId
 * @returns {message}
 */
async function getMessage (messageId) {
  ow(messageId, ow.number)
  const { message } = await this.apiAction('message-retrieve-by-id', {
    msg_id: messageId
  })
  return normalizeMessage(message)
}

module.exports = getMessage
