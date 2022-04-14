import {isEscapeKey} from './utils.js';
import {pictures} from './pictures.js';
import {createCommentsMarkup} from './data/create-comments-markup.js';

const bodyElement = document.querySelector('body');
const pictureModal = document.querySelector('.big-picture');
const pictureModalCloseElement = pictureModal.querySelector('.big-picture__cancel');
const pictureModalImg = pictureModal.querySelector('.big-picture__img img');
const pictureModalCaption = pictureModal.querySelector('.social__caption');
const pictureModalLikes = pictureModal.querySelector('.likes-count');
const pictureModalCommentsCountWrap = pictureModal.querySelector('.social__comment-count');
const pictureModalCommentsCount = pictureModal.querySelector('.comments-count');
const pictureModalCommentsLoadBtn = pictureModal.querySelector('.comments-loader');
const bigPictureCommentsContainer = pictureModal.querySelector('.social__comments');

const picturesElement = document.querySelector('.pictures');

/* eslint-disable no-use-before-define */
const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePictureModal();
  }
};
/* eslint-enable no-use-before-define */

const closePictureModal = () => {
  bodyElement.classList.remove('modal-open');
  pictureModal.classList.add('hidden');

  document.removeEventListener('keydown', onModalEscKeydown);
};

const openPictureModal = () => {
  bodyElement.classList.add('modal-open');
  pictureModal.classList.remove('hidden');

  document.addEventListener('keydown', onModalEscKeydown);
};

const renderBigPicture = (pictureId) => {
  const pictureData = pictures.find((item) => item.id === Number(pictureId));
  pictureModalImg.src = pictureData.url;
  pictureModalImg.alt = pictureData.description;
  pictureModalCaption.textContent = pictureData.description;
  pictureModalLikes.textContent = pictureData.likes;
  pictureModalCommentsCount.textContent = pictureData.comments.length;
  pictureModalCommentsCountWrap.classList.add('hidden');
  pictureModalCommentsLoadBtn.classList.add('hidden');

  bigPictureCommentsContainer.innerHTML = '';

  if(pictureData.comments) {
    const commentsMarkup = createCommentsMarkup(pictureData.comments);
    bigPictureCommentsContainer.appendChild(commentsMarkup);
  }
};

picturesElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  const pictureId = evt.target.closest('a').dataset.picture;
  renderBigPicture(pictureId);

  openPictureModal();
});

pictureModalCloseElement.addEventListener('click', () => {
  closePictureModal();
});
