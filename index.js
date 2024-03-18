function encodeText() {
    const inputText = document.getElementById('inputText').value;
    const encodedText = encode(inputText);
    document.getElementById('output').innerText = 'Encoded: ' + encodedText;
 }
  
 function decodeText() {
    const encodedText = document.getElementById('inputText').value;
    const decodedText = decode(encodedText);
    document.getElementById('output').innerText = 'Decoded: ' + decodedText;
  }

const enigma = {
  'a': '_|',
  'b': '|_|',
  'c': '|_',
  'd': '::|',
  'e': '::',
  'f': '|::',
  'g': '```|',
  'h': '|```|',
  'i': '|```',
  'j': '_/\\|', // Escape |
  'k': '__||',
  'l': '_|_||',
  'm': '_|_|',
  'n': '_::||',
  'o': '_::|',
  'p': '_|::|',
  'q': '_```||',
  'r': '_|```||',
  's': '_|```|',
  't': '|/\\_|', // Escape |
  'u': '|_|_|',
  'v': '||_|_|',
  'w': '||__|',
  'x': '|::|_|',
  'y': '|::_|',
  'z': '||::_|'
};

const flippedEnigma = {
  '_|': 'a',
  '|_|': 'b',
  '|_': 'c',
  '::|': 'd',
  '::': 'e',
  '|::': 'f',
  '```|': 'g',
  '|```|': 'h',
  '|```': 'i',
  '_/\\|': 'j', // Escape |
  '__||': 'k',
  '_|_||': 'l',
  '_|_|': 'm',
  '_::||': 'n',
  '_::|': 'o',
  '_|::|': 'p',
  '_```||': 'q',
  '_|```||': 'r',
  '_|```|': 's',
  '|/\\_|': 't', // Escape |
  '|_|_|': 'u',
  '||_|_|': 'v',
  '||__|': 'w',
  '|::|_|': 'x',
  '|::_|': 'y',
  '||::_|': 'z'
};

function encode(word) {
  let encodedWord = '*';
  for (let i = 0; i < word.length; i++) {
    let char = word[i].toLowerCase();
    if (char === ' ') {
      encodedWord += '*'; 
    } else {
      encodedWord += enigma[char] || 'Char not found';
      encodedWord += '*'; 
    }
  }
  
  if (encodedWord.endsWith('*')) {
    encodedWord = encodedWord.slice(0, -1);
  }
  return encodedWord + '*';
}
function decode(code) {
  const translation = [];
  const encodedArray = code.split('*');

  for (let i = 0; i < encodedArray.length; i++) {
    if (encodedArray[i] !== '') {
      translation.push(flippedEnigma[encodedArray[i]]);
    } else {
      translation.push(' '); 
    }
  }
  
  return translation.join(''); 
}