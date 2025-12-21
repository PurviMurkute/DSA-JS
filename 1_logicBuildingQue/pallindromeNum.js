function isNumPallindrome(num) {
  const original = num;
  let reveresed = 0;

  while (num > 0) {
    let last = num % 10;
    reveresed = reveresed * 10 + last;
    num = Math.floor(num / 10);
  }

  if (original === reveresed) {
    return `${original} is pallindrome`;
  } else {
    return `${original} is not pallindrome`;
  }
}

console.log(isNumPallindrome(121));
console.log(isNumPallindrome(221));
console.log(isNumPallindrome(222));