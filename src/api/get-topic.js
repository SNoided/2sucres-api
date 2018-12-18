const ow = require('ow')
const { normalizeTopic } = require('../utils')

/**
  * Récupère les informations d'un topic
  *
  * @param {number} topicId
  * @param {number} page
  * @returns {topic}
  */
async function getTopic (topicId, page = 1) {
  ow(topicId, ow.number)
  ow(page, ow.number)
  const { topic, messages } = await this.apiAction('message-retrieve', {
    topic: topicId,
    page
  })
  return normalizeTopic(topic, messages)
}

module.exports = getTopic
