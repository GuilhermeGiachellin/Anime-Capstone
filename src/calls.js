import request from './requests';
import displayAnime from './displayAnime.js';
import displayLikes from './displayLikes.js';
import saveLike from './saveLike.js';
import countAnime from './countAnime.js';
import popUpAnime from './popUp';

export const newSession = new request();

// Get Top 9 Summer Anime From Jikan API
newSession.get('https://api.jikan.moe/v3/season/2021/summer')
.then(data => {
  displayAnime(data);
  countAnime(data);

  const btns = document.querySelectorAll('button');
  btns.forEach(btn => {
    btn.addEventListener('click', popUpAnime);
  })
  
})
.catch(err => err);

// Call Involvement API to display Likes
newSession.get('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S7zVMxWAOezBiRHSLLWC/likes')
.then(response => {
  displayLikes(response);

  const i =  document.querySelectorAll('i');
  i.forEach(heart => {
  heart.addEventListener('click', saveLike);

});
})
.catch(err => err);
