import { commentCounter } from './countAnime';

export default async function showComments(index) {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S7zVMxWAOezBiRHSLLWC/comments?item_id=${index}`)
    .then((response) => response.json())
    .then((json) => {
      const container = document.querySelector('.comments_container');
      const ul = document.createElement('ul');
      container.appendChild(ul);
      const allComment = commentCounter(json);

      for (let i = 0; i < allComment; i += 1) {
        const li = document.createElement('li');
        const div = document.createElement('div');
        const user = document.createElement('h5');
        const date = document.createElement('h5');
        const comentario = document.createElement('p');

        user.innerHTML = `${json[i].username}`;
        date.innerHTML = `${json[i].creation_date}`;
        console.log(json[i].creation_date);
        comentario.innerHTML = `${json[i].comment}`;

        li.classList.add('comment_li');
        div.classList.add('username_container');
        ul.classList.add('comment_ul');
        user.classList.add('username');

        div.appendChild(user);
        div.appendChild(date);
        li.appendChild(div);
        li.appendChild(comentario);
        ul.appendChild(li);
      }
    });
}
