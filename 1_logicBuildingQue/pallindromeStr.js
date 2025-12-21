function isPallindrome(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  if (str === reversed) {
    return `${str} is pallindrome`;
  } else {
    return `${str} is not a pallindrome`;
  }
}

console.log(isPallindrome('madam'));
console.log(isPallindrome('snap'));
console.log(isPallindrome('level'));