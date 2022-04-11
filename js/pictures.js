import {createPictures} from './data/create-pictures.js';

const PICTURES_COUNT = 25;
const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const pictureFragment = document.createDocumentFragment();
const pictures = createPictures(PICTURES_COUNT);

pictures.forEach(({comments, description, likes, url}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  const pictureImg = pictureElement.querySelector('.picture__img');

  pictureElement.href = url;
  pictureImg.src = url;
  pictureImg.alt = description;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureFragment.appendChild(pictureElement);
});

picturesContainer.appendChild(pictureFragment);
