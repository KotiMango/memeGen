'use strict';

var gImgs = [
  {
    id: 1,
    url: './imgs/1.jpg',
    keywords: ['politic'],
  },
  {
    id: 2,
    url: './imgs/2.jpg',
    keywords: ['epicwin', 'cats'],
  },
  {
    id: 3,
    url: './imgs/3.jpg',
    keywords: ['epicwin', 'cats'],
  },
  {
    id: 4,
    url: './imgs/4.jpg',
    keywords: ['epicwin', 'kid'],
  },
  {
    id: 5,
    url: './imgs/5.jpg',
    keywords: ['epicwin', 'baby', 'funny', 'kid'],
  },
  {
    id: 6,
    url: './imgs/6.jpg',
    keywords: ['movie', 'tv', 'brain'],
  },
  {
    id: 7,
    url: './imgs/7.jpg',
    keywords: ['epicwin', 'baby', 'funny', 'kid'],
  },
  {
    id: 8,
    url: './imgs/8.jpg',
    keywords: ['movie', 'brain'],
  },
  {
    id: 9,
    url: './imgs/9.jpg',
    keywords: ['epicwin', 'kid'],
  },
  {
    id: 10,
    url: './imgs/10.jpg',
    keywords: ['politic', 'obama', 'funny'],
  },
  {
    id: 11,
    url: './imgs/11.jpg',
    keywords: ['sport'],
  },
  {
    id: 12,
    url: './imgs/12.jpg',
    keywords: ['honesty', 'justice'],
  },
  {
    id: 13,
    url: './imgs/13.jpg',
    keywords: ['movie', 'brain'],
  },
  {
    id: 14,
    url: './imgs/14.jpg',
    keywords: ['movie', 'brain'],
  },
  {
    id: 15,
    url: './imgs/15.jpg',
    keywords: ['movie', 'brain'],
  },
  {
    id: 16,
    url: './imgs/16.jpg',
    keywords: ['movie', 'brain'],
  },
  {
    id: 17,
    url: './imgs/17.jpg',
    keywords: ['politic', 'putin', 'funny'],
  },
  {
    id: 18,
    url: './imgs/18.jpg',
    keywords: ['movie', 'sad'],
  },
];

var gMeme = {
  selectedImgId: 0,
  selectedLineIdx: 0,
  selectedStickerIdx: 0,
  lines: [
    {
      txt: 'I never eat Falafel',
      font: 'impact',
      size: 40,
      align: 'center',
      OutlineColor: 'black',
      fillColor: 'white',
      positionX: 250,
      positionY: 50,
    },
    {
      txt: 'I consume it virtually',
      font: 'impact',
      size: 40,
      align: 'center',
      OutlineColor: 'black',
      fillColor: 'white',
      positionX: 250,
      positionY: 430,
    },
  ],
  appliedStickers: [],
};

const getImgs = () => gImgs;
const getKeyWords = () => gImgs.map((img) => img.keywords);
