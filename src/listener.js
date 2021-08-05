/* eslint-disable import/no-cycle */
import popUpAnime from './popUp.js';
import { newSession } from './calls.js';
import showComments from './showComments.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S7zVMxWAOezBiRHSLLWC/comments';

export default class eventsPopUp {
  // Open PopUp window
  static popUpEvent() {
    const btns = document.querySelectorAll('button');
    btns.forEach((btn) => {
      btn.addEventListener('click', (e) => {        
        const container = document.querySelector('.popup');
        container.style = 'height: 100vh; width: 100vw;';
        popUpAnime(e);
      });
    });
  }

  // Close PopUp window
  static closePopUp() {
    const btn = document.getElementById('close_popup');
    btn.addEventListener('click', () => {
      const animation = document.querySelector('.popup_container');
      animation.style = 'animation: close_popup_animation 0.5s';
      setTimeout(()=>{
        btn.parentNode.parentNode.innerHTML = '';
        const container = document.querySelector('.popup');
        container.style = '';   
      },500);   
    });
  }

  // Form listner
  static addComment(index) {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.querySelector('input').value;
      const comment = document.querySelector('textarea').value;
      const data = {
        item_id: index,
        username: input,
        comment,
      };
      newSession.postComment(url, data);
      document.querySelector('input').value = '';
      document.querySelector('textarea').value = '';
      showComments(index);
    });
  }
}
