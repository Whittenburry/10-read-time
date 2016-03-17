'use strict';

function readTime(stringOfWords, wpm = 1) {
  const math = Math.ceil(numWords(stringOfWords) / wpm);
  return math;
}
