export default async function showComments(index) {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S7zVMxWAOezBiRHSLLWC/comments?item_id=${index}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json.length);
      for (let i = 0; i < json.length; i += 1) {
        const container = document.querySelector('.comments_container');
        const user = document.createElement('h5');
        const comentario = document.createElement('p');

        user.innerHTML = `${json[i].username}`;
        comentario.innerHTML = `${json[i].comment}`;

        container.appendChild(user);
        container.appendChild(comentario);
      }
    });
}
