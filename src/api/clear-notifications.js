/**
 * Supprime les notifications
 */
async function clearNotifications () {
  return this.apiAction('notif-flush')
}

module.exports = clearNotifications
