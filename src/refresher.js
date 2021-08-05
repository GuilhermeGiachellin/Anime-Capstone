import { newSession } from "./calls.js";

export default function refresher(e){
  const num_likes = document.querySelectorAll('.num_like');
  let temp = e.target.nextSibling.innerHTML;
  temp = parseInt(temp);
  temp += 1;
  num_likes.forEach(num => {
    if(num.innerHTML == e.target.nextSibling.innerHTML){
      num.innerHTML = '';
      num.innerHTML = temp;
      num.appendChild(num);
    }
  })

}