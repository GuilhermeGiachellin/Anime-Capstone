/* eslint-disable import/no-cycle */
import popUpAnime from './popUp.js';

export default class eventsPopUp {
  static popUpEvent() {
    const btn = document.querySelectorAll('button');
    console.log(btn);
    btn.forEach((e) => {
      console.log(e);
      e.addEventListener('click', () => {
        popUpAnime(e.parentNode.id);
      });
    });
  }

  static closePopUp() {
    const btn = document.getElementById('close_popup');

    btn.addEventListener('click', () => {
      btn.parentNode.parentNode.innerHTML = '';
    });
  }
}
