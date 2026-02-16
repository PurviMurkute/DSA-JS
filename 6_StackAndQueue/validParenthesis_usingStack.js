// (({[]}{}))   ==> true
// (({[}{}))   ==> false

function isValid(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (isEmpty(stack)) {
        return false;
      }

      const top = stack.pop();

      if (
        (top === "(" && char !== ")") ||
        (top === "{" && char !== "}") ||
        (top === "[" && char !== "]")
      ) {
        return false;
      }
    }
  }
  return isEmpty(stack);
}

function isEmpty(stack) {
  return stack.length === 0;
}

console.log(isValid("(({[]}{}))"));
console.log(isValid("(({[}{}))"));
console.log(isValid("(}]"));

// Big O TC - O(n)
// SC - O(n)