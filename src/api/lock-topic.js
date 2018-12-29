const ow = require('ow')

/**
  * Lock un topic
  *
  * @param {number} topicId
  */
async function lockTopic (topicId) {
  ow(topicId, ow.number)
  await this.apiAction('topic-lock', {
    id: topicId
  })
}

module.exports = lockTopic
