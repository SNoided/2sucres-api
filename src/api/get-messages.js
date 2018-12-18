const ow = require('ow')

/**
 * Retourne la liste des messages d'une page d'un topic
 *
 * @param {number} topicId
 * @param {number} page
 * @returns {Array<message>}
 */
async function getMessages (topicId, page = 1) {
  ow(topicId, ow.number)
  const { messages } = await this.getTopic(topicId, page)
  return messages
}

module.exports = getMessages
