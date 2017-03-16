# v-togg
Vue UI directive. Toggle classes, attributes, properties.

## Usage
[<b>View interactive examples</b>](https://ryanve.github.io/v-togg/)

### Attributes

- `v-togg`: vue entry point (**must accompany `togg-event`**)
- `togg-event`: event(s) to listen to
- `togg-scope`: applicable scope
- `togg-class`: classes to toggle when event occurs
- `togg-attr`: attribute to toggle when event occurs
- `togg-prop`: property to toggle when event occurs
- `togg-state`: force state `true` or `false` from event target
- `togg-trigger` additional events to trigger when event occurs
- `togg-method`: jQuery method to invoke when event occurs

## Setup

#### [`npm install v-togg`](https://www.npmjs.com/package/v-togg)

```
npm install v-togg --save
```

#### `require` the directive

```js
require('v-togg')
```

#### Create `Vue` instance

```js
new Vue({
  el: '#your-app'
})
```

## Related

[Also available as an Angular directive](https://ryanve.github.io/togg/)
