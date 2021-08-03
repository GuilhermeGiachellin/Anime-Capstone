import request from './requests';

const popUp = new request();

export default function popUpAnime(index){

popUp.get('https://api.jikan.moe/v3/season/2021/summer')
.then(data => {
    let apiAnime = data.anime;
    let body = document.querySelector('.popup');
    let container = document.createElement('div');
    container.classList.add('popup_container')    
    container.innerHTML = `
    <i class="fas fa-times"></i>
    <img src="${apiAnime[index].image_url}">
    <h4>${apiAnime[index].title}</h4>
    <div class="info_container">
    <ul>
    <li>Score: ${apiAnime[index].score}</li>
    <li>Source: ${apiAnime[index].source}</li>
    </ul>
    <ul>
    <li>Producers: ${apiAnime[index].producers[0].name}</li>
    <li>Genres: ${apiAnime[index].genres[0].name}, ${apiAnime[index].genres[1].name}</li>
    </ul>    
    </div>
    <form>
    <h5>Add a comment</h5>
    <input type="text" placeholder="Name" id="name" required>
    <textarea name="comment" placeholder="Write your comment here" required maxlength="500"></textarea>    
        <input type="submit" value="Comment" id="submit_btn" class="submit_btn"></input>    
    </form>`        
                          
    body.appendChild(container)
})
}