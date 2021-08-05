export default function refresher(e) {
  const numLikes = document.querySelectorAll('.num_like');
  let temp = e.target.nextSibling.innerHTML;
  const title = e.target.parentElement.parentElement.previousSibling.innerHTML;
  temp = Number(temp);
  temp += 1;
  numLikes.forEach((num) => {
    const numTitle = num.parentElement.parentElement.previousSibling.innerHTML;
    if (num.innerHTML === e.target.nextSibling.innerHTML && numTitle === title) {
      num.innerHTML = temp;
    }
  });
}