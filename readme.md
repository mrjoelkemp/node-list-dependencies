#### list-dependencies [![npm](http://img.shields.io/npm/v/list-dependencies.svg)](https://npmjs.org/package/list-dependencies) [![npm](http://img.shields.io/npm/dm/list-dependencies.svg)](https://npmjs.org/package/list-dependencies)

> Lists all module dependencies for a JS file or JS files within a directory

`npm install -g list-dependencies`

Not meant to be a required module. Really just a shell wrapper around [precinct](https://github.com/mrjoelkemp/node-precinct).

* Works for AMD, CommonJS, and ES6 modules.

### Usage

`list-deps filename` or `list-deps directory`

Will print out the file(s) and its dependencies like so:

```
---
 Component/Container.js
---
jquery
nbd/util/construct
../Component
../Controller
../trait/eventMappable

---
 Component/Form.js
---
nbd/Promise
nbd/util/extend
nbd/util/pipe
../Component
../util/xhr
../util/error
```
