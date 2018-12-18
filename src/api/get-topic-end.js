const ow = require('ow')
const _ = require('lodash')

/**
 * Récupère la fin du topic
 *
 * @param {number} topicId
 */
async function getTopicEnd (topicId) {
  ow(topicId, ow.number)
  const topic = await this.getTopic(topicId, 1)
  const lastPage = Math.floor((topic.messageCount - 1) / 20) + 1
  const messages = await this.getMessages(topicId, lastPage)
  return { lastPage, lastMessageId: _.last(messages).id }
}

module.exports = getTopicEnd
