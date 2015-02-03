# teoria-simplify-note

This module "simplifies" a note, to an enharmonic note with fewer accidentals. E.g.:
```js
var teoria = require('teoria');
var simplify = require('teoria-simplify-note');

console.log(simplify(teoria.note('Fb'))); // -> TeoriaNote('E');
console.log(simplify(teoria.note('B#'))); // -> TeoriaNote('C');
console.log(simplify(teoria.note('Abb'))) // -> TeoriaNote('G');
```

## methods
```js
var simplify = require('teoria-simplify-note');
```

### var simplenote = simplify([TeoriaNote](https://github.com/saebekassebil/teoria))
`simplenote` is now the enharmonic of `TeoriaNote` with the fewest accidentals.
