const ow = require('ow')
const { normalizeTopics } = require('../utils')

/**
  * Récupère la liste des topics
  *
  * @param {number} page
  * @param {number} forumId
  * @returns {Array<topic>}
  */
async function getTopics (page = 1, forumId = 1) {
  ow(page, ow.number)
  ow(forumId, ow.number)
  const { topics } = await this.apiAction('topic-retrieve', {
    forum: forumId,
    page,
    sort: 0
  })
  return normalizeTopics(topics)
}

module.exports = getTopics
