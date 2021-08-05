
/* eslint-disable import/no-cycle */
import countAnime from './countAnime.js';
import popUpEvent from './listener.js';
import popUpAnime from './popUp.js';

export default function displayAnime(data) {
  const totalAnime = countAnime(data);
  const container = document.querySelector('.container');
  const domAnime = document.createElement('div');
  const numberAnime = document.createElement('h3');
  numberAnime.innerText = totalAnime;
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
    interaction.id = i;
    title.classList.add('anime-title');
    item.classList.add('item');

    like.innerHTML = '<i class="fas fa-heart not_liked"></i>';
    button.innerHTML = 'Comment';
    title.innerHTML = `${apiAnime[i].title}`;
    item.innerHTML += `<img src='${apiAnime[i].image_url}'/>`;

    interaction.appendChild(button);
    interaction.appendChild(like);
    item.appendChild(title);
    item.appendChild(interaction);
    domAnime.appendChild(item);
    container.appendChild(numberAnime);
    container.appendChild(domAnime);
  }
  popUpEvent.popUpEvent();
}
