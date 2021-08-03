import _ from 'lodash';
import './style.css';
import request from './requests';
import popUpEvent from './listener';

const newSession = new request();


// Get Top 9 Summer Anime From Jikan API
newSession.get('https://api.jikan.moe/v3/season/2021/summer')
.then(data => {
  let container = document.querySelector('.container');
  let domAnime = document.createElement('div');
  domAnime.classList.add('domAnime');
  let apiAnime = data.anime;
  let index = 0;  

  for(let i = 0; i < 9 ; i++){
    let item = document.createElement('div');
    let button = document.createElement('button');
    let like = document.createElement('div');
    let interaction = document.createElement('div');
    let title = document.createElement('h5');    

    like.classList.add('like');
    interaction.classList.add('interaction');
    interaction.id = index;
    title.classList.add('anime-title');
    item.classList.add('item');
    button.id = `btn`;

    like.innerHTML = `<i class="fas fa-heart"></i>`;
    button.innerHTML = `Comment`;
    title.innerHTML = `${apiAnime[i].title}`;
    item.innerHTML += `<img src='${apiAnime[i].image_url}'/>`;

    interaction.appendChild(button);
    interaction.appendChild(like);
    item.appendChild(title);
    item.appendChild(interaction);
    domAnime.appendChild(item);
    container.appendChild(domAnime);
    index += 1;
  }
  popUpEvent()

})
.catch(err => err);
