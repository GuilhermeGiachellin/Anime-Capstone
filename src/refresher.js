import { newSession } from "./calls.js";

export default function refresher(e){
  const num_likes = document.querySelectorAll('.num_like');
  let temp = e.target.nextSibling.innerHTML;
  const title = e.target.parentElement.parentElement.previousSibling.innerHTML;
  temp = parseInt(temp);
  temp += 1;
  num_likes.forEach(num => {
    if(num.innerHTML == e.target.nextSibling.innerHTML && num.parentElement.parentElement.previousSibling.innerHTML === title){
      num.innerHTML = '';
      num.innerHTML = temp;
      num.appendChild(num);
    }
  })

}