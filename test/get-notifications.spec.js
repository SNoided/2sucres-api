const api = require('./api')
const { assert } = require('chai')

describe('getNotifications', () => {
  it(`should retrieve the notifications`, async () => {
    const notifications = await api.getNotifications()
    assert.isArray(notifications)
  })
})
