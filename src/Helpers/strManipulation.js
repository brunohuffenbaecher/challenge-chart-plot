export const capitalizeFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const handleSelectString = (word) => {
  word = word[0];
  word = word.split('_');
  word = word.map((item) => capitalizeFirstLetter(item));
  return word.join(' ');
};
