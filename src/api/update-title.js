const ow = require('ow')

/**
 * Met à jour le titre d'un topic
 *
 * @param {number} topicId
 * @param {string} title
 */
async function updateTitle (topicId, title) {
  ow(topicId, ow.number)
  ow(title, ow.string)
  return this.apiAction('topic-edit-name', {
    id: topicId,
    name: title
  })
}

module.exports = updateTitle
