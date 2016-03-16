'use strict';

QUnit.module(`Application (Do this LAST)`);

const body = document.querySelector(`body`);

test(`Show read time for articles to user`, (assert) => {
  const firstReadTime = document.querySelector(`#lua-cooper .entry__info li.read-time`);
  const secondReadTime = document.querySelector(`#rocket-code .entry__info li.read-time`);

  assert.notStrictEqual(firstReadTime, null,
    `There should be an "li" element with a class of "read-time"
     in the "entry__info" lists: First`);
  assert.equal(firstReadTime.innerText.trim(), `5 mins`,
    `The read time for the article should be shown based on a WPM of 200 words per min`);

  assert.notStrictEqual(secondReadTime, null,
    `There should be an "li" element with a class of "read-time"
     in the "entry__info" lists: Second`);
  assert.equal(secondReadTime.innerText.trim(), `8 mins`,
    `The read time for the article should be shown based on a WPM of 200 words per min`);
});

test(`Show navigation to the user`, (assert) => {
  const nav = document.querySelector(`nav`);
  const navItems = document.querySelectorAll(`nav a`);

  assert.notStrictEqual(nav, null,
    `There should be a "nav" element`);

  assert.equal(navItems.length, document.querySelectorAll(`.entry`).length,
    `There should be nav links for each article`);
  assert.equal(navItems[0].getAttribute(`href`), `#lua-cooper`,
    `The 'href' for each navItem should be set using 'setAttribute'
     to the id of the article it links to`);
  assert.equal(navItems[1].getAttribute(`href`), `#rocket-code`,
    `The 'href' for each navItem should be set using 'setAttribute'
     to the id of the article it links to`);
  assert.equal(navItems[0].innerText, `Meet Lua Cooper: London Campus Director`,
    `The text of the nav link should match the title of the article`);
  assert.equal(navItems[1].innerText, `From Rocket Science to Rocking Code: Leslie’s story`,
    `The text of the nav link should match the title of the article`);
});
