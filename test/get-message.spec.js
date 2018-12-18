const api = require('./api')
const { assert } = require('chai')

describe('getMessage', () => {
  it(`should retrieve the message`, async () => {
    const message = await api.getMessage(1521166)
    assert.isObject(message)
  })
})
