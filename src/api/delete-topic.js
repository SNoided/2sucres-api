const ow = require('ow')

/**
  * Supprime un topic
  *
  * @param {number} topicId
  */
async function deleteTopic (topicId) {
  ow(topicId, ow.number)
  await this.apiAction('topic-delete', {
    id: topicId
  })
}

module.exports = deleteTopic
