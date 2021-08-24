import JSON5 from 'json5';

export const strToJSON = (str) => {
  let lines = str.split('\n');

  for (let i = 0; i < lines.length; i++) {
    lines[i] = lines[i].slice(1, lines[i].length - 1);
    lines[i] = lines[i].split(':');
  }

  console.log(lines);
};

/**Converts the text input block into an object array using JSON5 library */
export const codeParse = (textBlock) => {
  let convertedCode = '[' + textBlock.split('\n').join(',') + ']';
  // convertedCode = JSON5.parse(convertedCode);
  try {
    convertedCode = JSON5.parse(convertedCode);
    // console.log(convertedCode);
    return convertedCode;
  } catch (error) {
    alert('Check your input code for errors!');
    return null;
  }
};
