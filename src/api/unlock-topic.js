const ow = require('ow')

/**
  * Délock un topic
  *
  * @param {number} topicId
  */
async function unlockTopic (topicId) {
  ow(topicId, ow.number)
  await this.apiAction('topic-unlock', {
    id: topicId
  })
}

module.exports = unlockTopic
