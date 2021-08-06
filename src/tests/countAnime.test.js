/**
 * @jest-environment jsdom
 */

import { expect, test } from '@jest/globals';
import { commentCounter, countAnime } from '../scripts/countAnime.js';

test('Test the comments counter', () => {
  const commentTest = [
    {
      item_id: '1',
      username: 'test1',
      comment: 'testcomment',
    },
    {
      item_id: '2',
      username: 'test2',
      comment: 'test2',
    },
    {
      item_id: '3',
      username: 'test3',
      comment: 'test3',
    },
  ];
  const count = commentCounter(commentTest);
  expect(count).toBe(3);
});

test('Test Count Number function if returning exact number ', () => {
  const obj = {
    anime: [
      {
        item_id: 'item1',
        usename: 'Alex',
        comment: 'Hey',
      },
      {
        item_id: 'item2',
        usename: 'Guil',
        comment: 'Holla',
      },
      {
        item_id: 'item3',
        usename: 'Anvi',
        comment: 'Yo',
      },
    ],
  };
  const count = countAnime(obj);
  expect(count).toBe(3);
});
