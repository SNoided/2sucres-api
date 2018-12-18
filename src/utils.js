/**
 * Convertit un message de l'API en message normalisé
 * @private
 * @param {object|Array<object>} rawMessage
 * @returns {message|Array<message>}
 */
exports.normalizeMessage = function (rawMessage) {
  if (Array.isArray(rawMessage)) return rawMessage.map(exports.normalizeMessage)
  const message = {}
  message.id = parseInt(rawMessage.id, 10)

  message.deleted = rawMessage.deleted === '1'
  message.edited = rawMessage.edited === '1'
  message.pinned = rawMessage.pinned === '1'
  message.date = new Date(parseInt(rawMessage.tms, 10) * 1000)

  message.reactions = rawMessage.reactions
  message.content = rawMessage.content

  message.user = {
    id: parseInt(rawMessage.user, 10),
    username: rawMessage.user_pseudo_custom,
    level: parseInt(rawMessage.user_level, 10),
    online: rawMessage.user_online === '1',
    avatar: rawMessage.user_profile_picture,
    signature: rawMessage.user_signature,
    badge: {
      title: rawMessage.user_badge_title,
      url: rawMessage.user_badge_url
    }
  }

  message.topic = {
    id: parseInt(rawMessage.topic, 10),
    forumId: parseInt(rawMessage.forum, 10),
    title: rawMessage.topic_name,
    deleted: rawMessage.topic_deleted === '1',
    locked: rawMessage.topic_locked === '1',
    pinned: rawMessage.topic_pinned === '1'
  }

  return message
}

/**
 * Un alias pour normalizeMessage
 * @private
 * @returns {topic|Array<topic>}
 */
exports.normalizeMessages = exports.normalizeMessage

/**
 * Convertit un topic de l'API officielle en topic normalisé
 *
 * @private
 * @param {object|Array<object>} rawTopic
 * @param {Array<object>} rawMessages
 * @returns {topic|Array<topic>}
 */
exports.normalizeTopic = function (rawTopic, rawMessages = undefined) {
  if (Array.isArray(rawTopic)) return rawTopic.map(exports.normalizeTopic)
  const topic = {}
  topic.id = parseInt(rawTopic.id, 10)
  topic.forumId = parseInt(rawTopic.forum, 10)
  topic.title = rawTopic.name
  topic.slug = rawTopic.slug

  topic.deleted = rawTopic.deleted === '1'
  topic.locked = rawTopic.locked === '1'
  topic.pinned = rawTopic.pinned === '1'

  topic.hasPoll = rawTopic.has_poll === '1'
  topic.hasReactions = rawTopic.has_poll === '1'

  topic.lastMessageDate = new Date(parseInt(rawTopic.last_message_tms, 10) * 1000)

  topic.messageCount = parseInt(rawTopic.nb_message, 10)
  topic.connectedCount = parseInt(rawTopic.connected_count, 10)
  topic.followCount = parseInt(rawTopic.nb_follow, 10)

  topic.type = parseInt(rawTopic.type, 10)

  topic.user = {
    id: parseInt(rawTopic.user, 10),
    username: rawTopic.user_pseudo_custom,
    level: parseInt(rawTopic.user_level, 10),
    online: rawTopic.user_online === '1'
  }

  if (rawMessages !== undefined) {
    topic.messages = exports.normalizeMessages(rawMessages)
  }

  return topic
}

/**
 * Un alias pour normalizeTopic
 *
 * @private
 * @returns {topic|Array<topic>}
 */
exports.normalizeTopics = exports.normalizeTopic

/**
 * Convertit une notification de l'API en notification normalisée
 *
 * @private
 * @param {object|Array<object>}
 * @returns {notification|Array<notification>}
 */
exports.normalizeNotification = function (rawNotification) {
  if (Array.isArray(rawNotification)) return rawNotification.map(exports.normalizeNotification)
  const notification = {}
  notification.id = parseInt(rawNotification.id, 10)

  notification.relatedUser = rawNotification.related_user
  notification.title = rawNotification.name
  notification.content = rawNotification.content
  notification.url = rawNotification.url
  notification.date = new Date(parseInt(rawNotification.tms, 10) * 1000)

  notification.user = {
    id: parseInt(rawNotification.user, 10),
    avatar: rawNotification.related_user_profile_picture
  }

  return notification
}

/**
 * Un alias pour normalizeNotification
 *
 * @private
 * @returns {notification|Array<notification>}
 */
exports.normalizeNotifications = exports.normalizeNotification
