const ow = require('ow')

/**
 * Édite un message
 *
 * @param {number} messageId
 * @param {string} content
 */
async function editMessage (messageId, content) {
  ow(messageId, ow.number)
  ow(content, ow.string)
  return this.apiAction('message-edit', {
    id: messageId,
    content
  })
}

module.exports = editMessage
