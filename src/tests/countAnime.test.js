import { expect, test } from '@jest/globals';
import { countAnime } from '../countAnime.js';
import Request from '../requests.js';

test('Test Count Number function if returning exact number ', () => {
  const req = new Request();
  req.get('https://api.jikan.moe/v3/season/2021/summer')
    .then((res) => {
      expect(countAnime(res)).toEqual(181);
    })
    .catch((err) => err);
});