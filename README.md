# slug-title

[![Build Status](https://img.shields.io/travis/maael/slug-title.svg?style=flat-square)](https://travis-ci.org/maael/slug-title)

An alternative to [Azer](https://github.com/azer)'s [slug-to-title](https://github.com/azer/slug-to-title) module, as it and one of its dependencies (to-title) were unpublished from npm, which you can read more about [here](https://medium.com/@azerbike/i-ve-just-liberated-my-modules-9045c06be67c).

This is mostly the same, however published to npm and with `to-title` swapped out for `titlecase`.

## Install
```
npm install --save slugTitle
```

## Usage
```js
var slugTitle = require('slugTitle')
slugTitle('hello-world') // Hello World
```
