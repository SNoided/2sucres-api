# 2sucres-api

## Installation

```bash
yarn add 2sucres-api
```

## Utilisation

```javascript
const apiFactory = require('2sucres-api')
const api = apiFactory(cookies, csrfToken)

const TOPIC_ID = 1
const MESSAGE_ID = 1

/**
 * Récupère le nombre de messages d'un topic
 * et l'indique dans le message original du topic
 */
async function run () {
  const topic = await api.getTopic(TOPIC_ID)
  const messageCount = topic.messageCount
  await message.editMessage(MESSAGE_ID, `Le topic contient ${messageCount} message(s)`)
}

run().catch(err => {
  // global error handling
  throw err
})
```

## API

{{>main}}