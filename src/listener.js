import popUpAnime from "./popUp.js";
import { newSession } from "./calls.js";

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S7zVMxWAOezBiRHSLLWC/comments'

export default class eventsPopUp {
  // Open PopUp window
  static popUpEvent() {
  const btns = document.querySelectorAll('button');
  btns.forEach( btn => {
    btn.addEventListener('click', popUpAnime);
  });
}
  // Close PopUp window
  static closePopUp() {
    const btn = document.getElementById('close_popup');
    btn.addEventListener('click', () => {
        btn.parentNode.parentNode.innerHTML = '';
    });
  }

  // Form listner
  static addComment(index) {
      const form = document.querySelector('form');      
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.querySelector('input').value;
        const comment = document.querySelector('textarea').value;
        console.log(input);
        const data = {
          item_id: index,
          username: input,
          comment: comment
        };
        console.log(data);
        newSession.postComment(url, data);
      })      
  }
}
