/* eslint-disable import/no-cycle */

import eventsPopUp from './listener.js';
import showComments from './showComments.js';
import { newSession } from './calls.js';

export default function popUpAnime(e) {
  const index = e.target.parentNode.id;
  newSession.get('https://api.jikan.moe/v3/season/2021/summer')
    .then((data) => {
      const apiAnime = data.anime;
      const body = document.querySelector('.popup');
      const background = document.createElement('div');
      const container = document.createElement('div');
      background.classList.add('background');
      container.classList.add('popup_container');
      container.innerHTML = `
    <i class="fas fa-times" id="close_popup"></i>
    <img src="${apiAnime[index].image_url}">
    <h4>${apiAnime[index].title}</h4>
    <div class="info_container">
    <ul>
    <li>Score: ${apiAnime[index].score}</li>
    <li>Source: ${apiAnime[index].source}</li>
    </ul>
    <ul>
    <li>Producers: ${apiAnime[index].producers[0].name}</li>
    <li>Genres: ${apiAnime[index].genres[0].name}, ${apiAnime[index].genres[1].name}</li>
    </ul>    
    </div>
    <h4 class="comment_title">Comments (0): </h4>
    <div class="comments_container"></div>
    <h4 class="comment_title">Add a comment:</h4>
    <form>    
    <input type="text" placeholder="Name" id="name" required>
    <textarea name="comment" placeholder="Write your comment here" required maxlength="500"></textarea>    
        <input type="submit" value="Comment" id="submit_btn" class="submit_btn"></input>    
    </form>`;

      body.appendChild(background);
      body.appendChild(container);
     
      showComments(index);
      eventsPopUp.addComment(index);      
      eventsPopUp.closePopUp();
    });
}