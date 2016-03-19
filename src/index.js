'use strict';
/* globals numWords, readTime */

const entries = document.querySelectorAll('.entry');

for (let i = 0; i < entries.length; i++) {
  // Gets current Entry from the list of entries
  const entry = entries[i];

  // Finds the info list for the current entry
  const infoList = entry.querySelector(`.entry__info`);

  // Creates a new list item with a class read-time
  const timeElement = document.createElement(`li`);
  timeElement.classList.add(`read-time`);

  // Adds read-time element to infolist
  infoList.appendChild(timeElement);

  // Finds content of current blog entry
  const blogContent = entry.querySelector(`.entry__content`);

  const time = readTime(blogContent.innerText, 200);

  timeElement.innerText = `${time} mins`;
}
