// Given an input a sentence, reverse the order of the words using a stack. For example, if the input is "Hello World", the output should be "World Hello".

function reverseWords(s) {
  const arr = s.split(" ");
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
  }

  let reversed = "";

  while (stack.length) {
    const current = stack.pop();

    if (current) {
      reversed += " "+ current;
    }
  }

  return reversed.trim();
}

console.log(reverseWords("     Hello    World    "));      //World Hello
console.log(reverseWords("the sky is blue"));      //blue is sky the

// Big O TC - O(2n) => O(n)  
// SC - O(n)