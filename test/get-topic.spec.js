const api = require('./api')
const { assert } = require('chai')

describe('getTopic', () => {
  it(`should retrieve the topic`, async () => {
    const topic = await api.getTopic(89288)
    assert.isObject(topic)
  })
})
