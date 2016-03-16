'use strict';

/* globals readTime */

QUnit.module(`readTime`);

test(`readTime is a function`, (assert) => {
  assert.ok(readTime, `'readTime' should exist`);
  assert.equal(typeof readTime, `function`,
    `'readTime' should be a named function (not assigned to a variable)`);
});

test(`readTime can calculate time to read given an array of words`, (assert) => {
  const word = `Lorem`;
  const words =
    `Lorem ipsum dolor sit amet, consectetur adipisicing` +
    ` elit, sed do eiusmod tempor incididunt ut labore` +
    ` et dolore magna aliqua. Ut enim ad minim veniam,` +
    ` quis nostrud exercitation ullamco laboris nisi ut aliquip` +
    ` ex ea commodo consequat. Duis aute irure dolor in` +
    ` reprehenderit in voluptate velit esse cillum dolore eu` +
    ` fugiat nulla pariatur. Excepteur sint occaecat cupidatat` +
    ` non proident, sunt in culpa qui officia deserunt mollit` +
    ` anim id est laborum. suma`;

  assert.equal(readTime(word), 1,
    `the 'readTime' function defaults to one word per minute: 1 word input`);
  assert.equal(readTime(words), 70,
    `the 'readTime' function defaults to one word per minute: 70 words input`);
  assert.equal(readTime(words, 5), 14,
    `the WPM for readTime is configurable: 70 words input, 5 WPM`);
  assert.equal(readTime(words, 50), 2,
    `the result is rounded UP to a whole number: 70 words input, 50 WPM`);
});
