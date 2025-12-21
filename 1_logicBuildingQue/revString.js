// hello => olleh
// EX-1 (Common method)
function revString1(str) {
  return str.split("").reverse().join("");
}

console.log(revString1("hello"));

// EX-2
function revString2(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(revString2('clock'));

// EX-3
function revString3(str){
    const arr = str.split('');
    let start = 0;
    const n = arr.length;
    let end = n-1;

    while(start < end){
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr.join('');
}

console.log(revString3('snap'));
