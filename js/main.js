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
const PHOTO_DESCRIPTIONS = [
  'Будь таким человеком, с которым мечтаешь встретиться.',
  'Будьте героями своих собственных историй!',
  'Будьте счастливы в этот момент, потому что этот момент — и есть ваша жизнь.',
  'Было бы все в этой жизни так же просто, как растолстеть.',
  'В жизни я лучше, чем в инстаграме! 😉',
  'В любой ситуации всегда улыбайтесь.',
  'В море может и водится миллион рыб, но я единственная русалка.',
  'В последнее время меня начинают преследовать умные мысли. Но я пока успеваю от них убежать…',
  'В простоте есть удивительная красота.',
  'В своей жизни ты должна играть только главную роль.',
  'Вам нужно просто быть немножко сумасшедшим, ведь маленькое сумасшествие очень похоже на небеса.',
  'Ваша скорость не имеет значения, пока вы продолжаете двигаться вперед.',
  'На всякий случай, а то вдруг вы забыли, как я выгляжу…',
  'Возможно, я не совершенна, но я определенно лимитированный экземпляр.',
  'Сегодня у меня есть хороший шанс сказать вам: «Какой чудесный день!»',
  'Время драгоценно, поэтому всегда тратьте его мудро.',
  'Все мы рождаемся немного сумасшедшими, некоторые просто решают не меняться.',
  'Бог должен быть невероятно креативным. Что я имею в виду? Просто посмотри на меня!',
  'Все самое лучшее будет завтра! Но ты должна научиться ценить именно то, что имеешь уже сегодня.',
  'Все только начинает становиться действительно хорошим.',
  'Все что имеет значение — это просто быть собой.',
  'Все, кем я хочу быть, это те, кем я была.',
  'Все, что мне нужно, чтобы быть счастливой, — это шесть месяцев отпуска… Дважды в год.',
  'Всегда будьте лучшим вариантом для себя.',
  'Всегда держите голову высоко, не взирая на трудности и невзгоды.',
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
const LIKES_COUNT_MIN = 15;
const LIKES_COUNT_MAX = 200;

const COMMENTS_COUNT_MIN = 0;
const COMMENTS_COUNT_MAX = 4;

const AVATAR_NUMBER_MIN = 0;
const AVATAR_NUMBER_MAX = 6;

const SENTENCES_COUNT_MIN = 1;
const SENTENCES_COUNT_MAX = 2;

const PUBLICATIONS_COUNT = 25;

let commentId = 0;

const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const checkStringLength  = (string, length) => string.length <= length;
checkStringLength('', COMMENT_MAX_LENGTH);

const createComments = () => {
  commentId++;
  const sentencesCount = getRandomNumber(SENTENCES_COUNT_MIN, SENTENCES_COUNT_MAX);

  return {
    id: commentId,
    avatar: `img/avatar-${getRandomNumber(AVATAR_NUMBER_MIN, AVATAR_NUMBER_MAX)}.svg`,
    message: Array.from({length: sentencesCount}, () => getRandomArrayElement(DEFAULT_MESSAGES)).join(' '),
    name: getRandomArrayElement(COMMENTERS_NAMES),
  };
};

const createPublication = (i) => {
  const commentsCount = getRandomNumber(COMMENTS_COUNT_MIN, COMMENTS_COUNT_MAX);

  return {
    id: i + 1,
    url: `photos/${i + 1}.jpg`,
    description: PHOTO_DESCRIPTIONS[i],
    likes: getRandomNumber(LIKES_COUNT_MIN, LIKES_COUNT_MAX),
    comments: Array.from({length: commentsCount}, createComments),
  };
};

const publications = Array.from({length: PUBLICATIONS_COUNT}, (_, i) => createPublication(i));

/* eslint-disable no-console */
console.log(publications);
/* eslint-enable no-console */
