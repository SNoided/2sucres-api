const ow = require('ow')

/**
  * Poste un message
  *
  * @param {number} topicId
  */
async function postMessage (topicId, content) {
  ow(topicId, ow.number)
  ow(content, ow.string)
  return this.apiAction('message-create', { topic: topicId, content })
}

module.exports = postMessage
