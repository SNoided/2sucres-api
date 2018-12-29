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

## Functions

<dl>
<dt><a href="#clearNotifications">clearNotifications()</a></dt>
<dd><p>Supprime les notifications</p>
</dd>
<dt><a href="#deleteTopic">deleteTopic(topicId)</a></dt>
<dd><p>Supprime un topic</p>
</dd>
<dt><a href="#editMessage">editMessage(messageId, content)</a></dt>
<dd><p>Édite un message</p>
</dd>
<dt><a href="#getMessage">getMessage(messageId)</a> ⇒ <code>message</code></dt>
<dd><p>Récupère les informations d&#39;un message par son id</p>
</dd>
<dt><a href="#getMessages">getMessages(topicId, page)</a> ⇒ <code>Array.&lt;message&gt;</code></dt>
<dd><p>Retourne la liste des messages d&#39;une page d&#39;un topic</p>
</dd>
<dt><a href="#getNotifications">getNotifications(clear)</a></dt>
<dd><p>Récupère la liste des notifications</p>
</dd>
<dt><a href="#getTopicEnd">getTopicEnd(topicId)</a></dt>
<dd><p>Récupère la fin du topic</p>
</dd>
<dt><a href="#getTopic">getTopic(topicId, page)</a> ⇒ <code>topic</code></dt>
<dd><p>Récupère les informations d&#39;un topic</p>
</dd>
<dt><a href="#getTopics">getTopics(page, forumId)</a> ⇒ <code>Array.&lt;topic&gt;</code></dt>
<dd><p>Récupère la liste des topics</p>
</dd>
<dt><a href="#lockTopic">lockTopic(topicId)</a></dt>
<dd><p>Lock un topic</p>
</dd>
<dt><a href="#postMessage">postMessage(topicId, content)</a></dt>
<dd><p>Poste un message</p>
</dd>
<dt><a href="#postTopic">postTopic(title, content, options)</a></dt>
<dd><p>Poste un topic</p>
</dd>
<dt><a href="#unlockTopic">unlockTopic(topicId)</a></dt>
<dd><p>Délock un topic</p>
</dd>
<dt><a href="#updateTitle">updateTitle(topicId, title)</a></dt>
<dd><p>Met à jour le titre d&#39;un topic</p>
</dd>
</dl>

<a name="clearNotifications"></a>

## clearNotifications()
Supprime les notifications

**Kind**: global function  
<a name="deleteTopic"></a>

## deleteTopic(topicId)
Supprime un topic

**Kind**: global function  

| Param | Type |
| --- | --- |
| topicId | <code>number</code> | 

<a name="editMessage"></a>

## editMessage(messageId, content)
Édite un message

**Kind**: global function  

| Param | Type |
| --- | --- |
| messageId | <code>number</code> | 
| content | <code>string</code> | 

<a name="getMessage"></a>

## getMessage(messageId) ⇒ <code>message</code>
Récupère les informations d'un message par son id

**Kind**: global function  

| Param | Type |
| --- | --- |
| messageId | <code>number</code> | 

<a name="getMessages"></a>

## getMessages(topicId, page) ⇒ <code>Array.&lt;message&gt;</code>
Retourne la liste des messages d'une page d'un topic

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| topicId | <code>number</code> |  | 
| page | <code>number</code> | <code>1</code> | 

<a name="getNotifications"></a>

## getNotifications(clear)
Récupère la liste des notifications

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| clear | <code>boolean</code> | <code>false</code> | si vrai, supprime les notifications après les avoir récupérées |

<a name="getTopicEnd"></a>

## getTopicEnd(topicId)
Récupère la fin du topic

**Kind**: global function  

| Param | Type |
| --- | --- |
| topicId | <code>number</code> | 

<a name="getTopic"></a>

## getTopic(topicId, page) ⇒ <code>topic</code>
Récupère les informations d'un topic

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| topicId | <code>number</code> |  | 
| page | <code>number</code> | <code>1</code> | 

<a name="getTopics"></a>

## getTopics(page, forumId) ⇒ <code>Array.&lt;topic&gt;</code>
Récupère la liste des topics

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| page | <code>number</code> | <code>1</code> | 
| forumId | <code>number</code> | <code>1</code> | 

<a name="lockTopic"></a>

## lockTopic(topicId)
Lock un topic

**Kind**: global function  

| Param | Type |
| --- | --- |
| topicId | <code>number</code> | 

<a name="postMessage"></a>

## postMessage(topicId, content)
Poste un message

**Kind**: global function  

| Param | Type |
| --- | --- |
| topicId | <code>number</code> | 
| content | <code>string</code> | 

<a name="postTopic"></a>

## postTopic(title, content, options)
Poste un topic

**Kind**: global function  

| Param | Type |
| --- | --- |
| title | <code>string</code> | 
| content | <code>string</code> | 
| options | <code>object</code> | 

<a name="unlockTopic"></a>

## unlockTopic(topicId)
Délock un topic

**Kind**: global function  

| Param | Type |
| --- | --- |
| topicId | <code>number</code> | 

<a name="updateTitle"></a>

## updateTitle(topicId, title)
Met à jour le titre d'un topic

**Kind**: global function  

| Param | Type |
| --- | --- |
| topicId | <code>number</code> | 
| title | <code>string</code> | 

