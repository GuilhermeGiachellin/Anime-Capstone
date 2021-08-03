export default function displayLikes(response) {
  const items = document.querySelectorAll('.item');
  response.forEach(res => {
    items.forEach( item => {
      if(item.firstChild.nextSibling.innerHTML === res.item_id){
        const i = item.firstChild.nextSibling.nextSibling.firstChild.nextSibling.firstChild;
        i.classList.remove('not_liked');
        i.classList.add('liked');
        item.firstChild.nextSibling.nextSibling.firstChild.nextSibling.innerHTML += `<div class="num_like">${res.likes}</div>`;
      }
    });
  });
}