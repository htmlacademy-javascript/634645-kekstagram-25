import {getRandomArrayElement, getRandomNumber, checkStringLength} from '../utils.js';

const COMMENT_MAX_LENGTH = 140;

const COMMENTERS_NAMES = [
  'Сафия',
  'Сара',
  'Адам',
  'Вероника',
  'Евгения',
  'Георгий',
  'Владимир',
  'Ева',
  'Кирилл',
  'Филипп',
  'Эмин',
  'Ольга',
  'Маргарита',
  'Яна',
  'Дарья',
  'Кира',
  'Елизавета',
  'Александра',
  'Агата',
  'Артемий',
  'Дмитрий',
  'Валерия',
  'Мария',
  'Варвара',
  'Леонид',
];
const DEFAULT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо.',
  'Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!'
];

const AVATAR_NUMBER_MIN = 0;
const AVATAR_NUMBER_MAX = 6;

const SENTENCES_COUNT_MIN = 1;
const SENTENCES_COUNT_MAX = 2;

let commentId = 0;

/* eslint-disable no-console */
console.log(checkStringLength('', COMMENT_MAX_LENGTH));
/* eslint-enable no-console */

const createComment = () => {
  commentId++;
  const sentencesCount = getRandomNumber(SENTENCES_COUNT_MIN, SENTENCES_COUNT_MAX);

  return {
    id: commentId,
    avatar: `img/avatar-${getRandomNumber(AVATAR_NUMBER_MIN, AVATAR_NUMBER_MAX)}.svg`,
    message: Array.from({length: sentencesCount}, () => getRandomArrayElement(DEFAULT_MESSAGES)).join(' '),
    name: getRandomArrayElement(COMMENTERS_NAMES),
  };
};

export {createComment};
