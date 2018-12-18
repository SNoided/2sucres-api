const { normalizeNotifications } = require('../utils')

/**
 * Récupère la liste des notifications
 *
 * @param {boolean} clear si vrai, supprime les notifications après les avoir récupérées
 */
async function getNotifications (clear = false) {
  const { notifications } = await this.apiAction('notif-retrieve')
  if (clear === true && notifications !== undefined) {
    await this.clearNotifications()
  }
  return normalizeNotifications(notifications)
}

module.exports = getNotifications
