const ow = require('ow')

/**
 * Poste un topic
 *
 * @param {string} title
 * @param {string} content
 * @param {object} options
 */
async function postTopic (title, content, options = {}) {
  const { forumId, type } = options
  ow(title, ow.string)
  ow(content, ow.string)
  return this.apiAction('topic-create', {
    forum: forumId !== undefined ? forumId : 1,
    name: title,
    type: type !== undefined ? type : 0,
    content,
    poll: '{}',
    min_rank: 0
  })
}

module.exports = postTopic
