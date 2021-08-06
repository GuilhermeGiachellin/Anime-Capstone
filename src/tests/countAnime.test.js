import { expect, test } from '@jest/globals';
import { countAnime /* commentCounter */ } from '../scripts/countAnime.js';
import Request from '../scripts/requests.js';

test('Test Count Number function if returning exact number ', () => {
  const req = new Request();
  req.get('https://api.jikan.moe/v3/season/2021/summer')
    .then((res) => {
      expect(countAnime(res)).toEqual(181);
    })
    .catch((err) => err);
});

// test('Test Count Number of comments and test if it is being printed correctly', () => {
//   const req = new Request();
//   for (let i = 0; i < req.length; i += 1) {
//     let index = 0;
//     req.get(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S7zVMxWAOezBiRHSLLWC/comments?item_id=${index}`)
//       .then((res) => {
//         expect(commentCounter(res)).toEqual(res.length);
//       });
//     index += 1;
//   }
// });