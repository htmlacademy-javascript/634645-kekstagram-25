const COMMENT_MAX_LENGTH = 140;

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const checkCommentLength = (string, maxLength) => string.length <= maxLength;

getRandomNumber(0, 10);
checkCommentLength('comment', COMMENT_MAX_LENGTH);
