/* eslint-disable import/no-cycle */
import popUpAnime from './popUp.js';
import { newSession } from './calls.js';
import refresher from './refresher.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S7zVMxWAOezBiRHSLLWC/comments';

export default class eventsPopUp {
  // Open PopUp window
  static popUpEvent() {
    const btns = document.querySelectorAll('button');
    btns.forEach((btn) => {
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

  static refresher() {
    const likes = document.querySelectorAll('i');
    likes.forEach((like) => {
      like.addEventListener('click', refresher);
    });
  }

  // Form listner
  static addComment(index) {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let input = document.querySelector('input').value;
      let comment = document.querySelector('textarea').value;
      const data = {
        item_id: index,
        username: input,
        comment,
      };
      newSession.postComment(url, data);
      input = '';
      comment = '';
    });
  }
}
