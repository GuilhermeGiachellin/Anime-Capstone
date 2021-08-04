import countAnime from "./countAnime.js";
import popUpEvent from './listener';
import popUpAnime from "./popUp.js";

export default function displayAnime(data) {
  const totalAnime = countAnime(data);
  const container = document.querySelector('.container');
  const domAnime = document.createElement('div');
  let numberAnime = document.createElement('h3');
  numberAnime.innerText = totalAnime;
  domAnime.classList.add('domAnime');
  let apiAnime = data.anime;

  for(let i = 0; i < 9 ; i++){
    let item = document.createElement('div');
    let button = document.createElement('button');
    let like = document.createElement('div');
    let interaction = document.createElement('div');
    let title = document.createElement('h5');

    like.classList.add('like');
    interaction.classList.add('interaction');
    interaction.id = i;
    title.classList.add('anime-title');
    item.classList.add('item');

    like.innerHTML = `<i class="fas fa-heart not_liked"></i>`;
    button.innerHTML = `Comment`;
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
  popUpAnime();
  popUpEvent.popUpEvent();
}
