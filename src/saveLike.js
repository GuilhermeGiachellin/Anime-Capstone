import { newSession } from './calls.js';

export default function saveLike(e) {
  const animeTitle = e.target.parentElement.parentElement.previousSibling.innerHTML;
  const data = {
    item_id: animeTitle,
  };

  newSession.post('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S7zVMxWAOezBiRHSLLWC/likes', data)
    .then((saved) => saved)
    .catch((err) => err);
}