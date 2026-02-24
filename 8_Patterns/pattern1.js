function printPattern1(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}

printPattern1(3);
printPattern1(5);

function printPattern2(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

printPattern2(3);
printPattern2(5);

function printPattern3(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

printPattern3(3);
printPattern3(5);

function printPattern4(n) {
  for (let i = n - 1; i >= 0; i--) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

printPattern4(3);