# jiggle

Jiggle arrays to slightly rearrange their values

## Installation

```sh
npm install jiggle --save
```

## Usage

```js
var jiggle = require("jiggle")

// The jiggle() function takes an array as input and returns an array
jiggle([0,1,2,3,4,5,6,7,8,9])
// [ 1, 2, 0, 4, 3, 5, 6, 7, 9, 8 ]

// It can also jiggle strings
jiggle("jabberwocky")
// jbbeawockyr

// It always returns a new object without altering the original
var orig = ["a","b","c","d","e","f"]
var dupe = jiggle(orig)
// orig: ['a','b','c','d','e','f']
// dupe: ['a','b','d','e','c','f']

// And if you like jiggling you can keep on doing it
jiggle(jiggle(jiggle("supercalifragilisticexpialidocious")))
// supcaerligralitiiscpefaldioxciosiu
```

## Tests

```sh
npm install
npm test
```
