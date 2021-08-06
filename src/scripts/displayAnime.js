/* eslint-disable import/no-cycle */
import { countAnime } from './countAnime.js';

export default async function displayAnime(data) {
  const totalAnime = await countAnime(data);
  const container = document.querySelector('.container');
  const domAnime = document.createElement('div');
  const menu = document.querySelector('.show_num');
  menu.innerText += ` (${totalAnime})`;
  domAnime.classList.add('domAnime');
  const apiAnime = await data.anime;

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
    title.innerHTML = `<a href="${apiAnime[i].url}" class="animLink">${apiAnime[i].title}</a>`;
    item.innerHTML += `<img src='${apiAnime[i].image_url}'/>`;

    interaction.appendChild(button);
    interaction.appendChild(like);
    item.appendChild(title);
    item.appendChild(interaction);
    domAnime.appendChild(item);
    container.appendChild(domAnime);
  }
}
