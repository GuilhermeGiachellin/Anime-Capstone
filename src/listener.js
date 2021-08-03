import popUpAnime from "./popUp.js";

export default function popUpEvent() {
    const btns = document.querySelectorAll('button');
    btns.forEach(btn => {
        btn.addEventListener('click', popUpAnime(btn.parentNode.id));
    });


}

