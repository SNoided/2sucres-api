const api = require('./api')
const { assert } = require('chai')

describe('getTopics', () => {
  it(`should retrieve the topics`, async () => {
    const topics = await api.getTopics()
    assert.isArray(topics)
  })
})
