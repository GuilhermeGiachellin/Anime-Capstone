import popUpAnime from "./popUp";


export default function popUpEvent() {
    const btn = document.querySelectorAll('button');
    console.log(btn);
    btn.forEach((e) => {
        console.log(e)
        e.addEventListener('click', () => {    
            popUpAnime(e.parentNode.id);
        })
    })


}

