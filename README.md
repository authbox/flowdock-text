# flowdock-text

Flowdock-text is a javascript utility for extracting and linkifying tags and urls in Flowdock. It is build upon Twitter's [twitter-text-js](https://github.com/twitter/twitter-text-js). Some twitter-text's functionality has been removed or altered.

## Usage
### Extraction

Hashtag extraction

```javascript
FlowdockText.extractHashtags("hello #world");
[ 'world' ]
FlowdockText.extractHashtagsWithIndices("hello #world");
[ { hashtag: 'world', indices: [ 6, 12 ] } ]
```

Usertag extraction

```javascript
FlowdockText.extractMentions("hello @Username");
[ '@Username' ]
FlowdockText.extractMentionsWithIndices("hello @Username");
[ { usertag: '@Username', indices: [ 6, 15 ] } ]
```

Url extraction
```javascript
FlowdockText.extractUrls("hello http://www.example.com");
[ 'http://www.example.com' ]
FlowdockText.extractUrlsWithIndices("hello http://www.example.com");
[ { url: 'http://www.example.com', indices: [ 6, 28 ] } ]
```

Parse and process tags from a message
```javascript
FlowdockText.getTagsFromMessage("@anyone seen this: http://www.example.com #cool");
[ 'cool', ':url', ':user:everyone' ]
```

Parse and process tags from a message with optional array of user-objects
```javascript
var users = [
  {nick: "Username", id: 1, disabled: false},
  {nick: "Other", id: 2, disabled: false}
];
FlowdockText.getTagsFromMessage("@anyone seen this: http://www.example.com #cool", users);
[ 'cool', ':url', ':user:everyone', ':unread:1', ':unread:2' ]
```

Parse and process tags from a message with optional array of user-objects and me-object (which excludes :unread:my-id tag from the results)
```javascript
var users = [
  {nick: "Username", id: 1, disabled: false},
  {nick: "Other", id: 2, disabled: false}
];
var me = users[1];
FlowdockText.getTagsFromMessage("@anyone seen this: http://www.example.com #cool", users, me);
[ 'cool', ':url', ':user:everyone', ':unread:1' ]
```

### Linkification
```javascript
FlowdockText.autoLink("hello @Username #greets");
'hello <a title="Search @Username" class="app-tag-link" href="#flowser/all/@Username">@Username</a> <a href="#flowser/all/greets" title="#greets" class="app-tag-link">#greets</a>'
```

## NPM

Install with: `npm install flowdock-text`
```javascript
var FlowdockText = require("flowdock-text");
FlowdockText.extractUrlsWithIndices("cool http://www.example.com");
[ { url: 'http://www.example.com', indices: [ 6, 28 ] } ]
```

## Tests
Tests can be run in browsers or with node.js

To run the tests in your default browser:

    rake test

To run the tests with node.js

    rake test_node

## Copyright and License

Copyright 2011 Twitter, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this work except in compliance with the License.
You may obtain a copy of the License in the LICENSE file, or at:

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
