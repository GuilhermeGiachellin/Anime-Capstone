import request from './requests';
import displayAnime from './displayAnime.js';
import displayLikes from './displayLikes.js';

const newSession = new request();

// Get Top 9 Summer Anime From Jikan API
newSession.get('https://api.jikan.moe/v3/season/2021/summer')
.then(data => {
  displayAnime(data);
})
.catch(err => err);

newSession.get('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S7zVMxWAOezBiRHSLLWC/likes')
.then(response => {
  displayLikes(response);
})
.catch(err => console.log(err));