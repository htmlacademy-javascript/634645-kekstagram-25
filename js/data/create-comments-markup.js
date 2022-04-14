const commentTemplate = document.querySelector('#comment')
  .content
  .querySelector('.social__comment');
const commentFragment = document.createDocumentFragment();

const createCommentsMarkup = (comments) => {
  comments.forEach(({avatar, message, name}) => {
    const commentElement = commentTemplate.cloneNode(true);
    const commentPicture = commentElement.querySelector('.social__picture');
    const commentText = commentElement.querySelector('.social__text');

    commentPicture.src = avatar;
    commentPicture.alt = name;
    commentText.textContent = message;
    commentFragment.appendChild(commentElement);
  });

  return commentFragment;
};

export {createCommentsMarkup};
