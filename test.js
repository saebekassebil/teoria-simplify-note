var test = require('tape');
var teoria = require('teoria');
var simplify = require('./');

test('Simplifying notes', function(t) {
  t.plan(5);

  t.equal(simplify(teoria.note('Fb')).toString(true), 'e');
  t.equal(simplify(teoria.note('B#')).toString(true), 'c');
  t.equal(simplify(teoria.note('Abb')).toString(true), 'g');
  t.equal(simplify(teoria.note('C')).toString(true), 'c');
  t.equal(simplify(teoria.note('B')).toString(true), 'b');
});
