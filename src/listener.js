import popUpAnime from "./popUp.js";
import request from "./requests.js";

const newSubmit = new request();
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S7zVMxWAOezBiRHSLLWC/likes/comments'

export default class eventsPopUp {
  // Open PopUp window 
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
  // Close PopUp window
  static closePopUp() {
    const btn = document.getElementById('close_popup'); 
    btn.addEventListener('click', () => {
        btn.parentNode.parentNode.innerHTML = '';
    })    
  }
  //Form listner
  static addComment(index) {
      const form = document.querySelector('form');      
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.querySelectorAll('input');
        const comment = document.querySelector('textarea')
        let data = [];
        data.push(input[0].value, comment.value)        
        newSubmit.post(url, data, index);
      })      
  }
}
