/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */

import Request from './requests.js';
import displayAnime from './displayAnime.js';
import displayLikes from './displayLikes.js';
import saveLike from './saveLike.js';
import { countAnime } from './countAnime.js';
import eventsPopUp from './listener.js';

export const newSession = new Request();

// Get Top 9 Summer Anime From Jikan API
newSession.get('https://api.jikan.moe/v3/season/2021/summer')
  .then((data) => {
    console.log(data);
    displayAnime(data);
    countAnime(data);
  })
  .catch((err) => err);

// Call Involvement API to display Likes
newSession.get('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S7zVMxWAOezBiRHSLLWC/likes')
  .then((response) => {
    displayLikes(response);
    eventsPopUp.popUpEvent();
    eventsPopUp.refresher();

    const i = document.querySelectorAll('i');
    i.forEach((heart) => {
      heart.addEventListener('click', saveLike);
    });
  })
  .catch((err) => err);
