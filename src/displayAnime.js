export default function displayAnime(data) {
  let container = document.querySelector('.container');
  let domAnime = document.createElement('div');
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
    container.appendChild(domAnime);
  }
}
