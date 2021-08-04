import './style.css';
import Request from './requests.js';

const newSession = new Request();

// Get Top 9 Summer Anime From Jikan API
newSession.get('https://api.jikan.moe/v3/season/2021/summer')
  .then((data) => {
    const container = document.querySelector('.container');
    const domAnime = document.createElement('div');
    domAnime.classList.add('domAnime');
    const apiAnime = data.anime;

    for (let i = 0; i < 9; i += 1) {
      const item = document.createElement('div');
      const button = document.createElement('button');
      const like = document.createElement('div');
      const interaction = document.createElement('div');
      const title = document.createElement('h5');

      like.classList.add('like');
      interaction.classList.add('interaction');
      title.classList.add('anime-title');
      item.classList.add('item');

      like.innerHTML = '<i class="fas fa-heart"></i>';
      button.innerHTML = 'Comment';
      title.innerHTML = `${apiAnime[i].title}`;
      item.innerHTML += `<img src='${apiAnime[i].image_url}'/>`;

      interaction.appendChild(button);
      interaction.appendChild(like);
      item.appendChild(title);
      item.appendChild(interaction);
      domAnime.appendChild(item);
      container.appendChild(domAnime);
    }
  })
  .catch((err) => err);