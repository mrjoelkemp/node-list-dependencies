Lists all module dependencies for a JS file or JS files within a directory

`npm install -g list-dependencies`

Not meant to be a required module. Really just a shell wrapper around [detective-amd](https://github.com/mrjoelkemp/node-detective-amd).

*CommonJS support soon for node-detective.*

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
