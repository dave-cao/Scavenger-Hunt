// Prevent user from pressing enter to submit form
function checkEnter(e) {
  e = e || event;
  const txtArea = /textarea/i.test((e.target || e.srcElement).tagName);
  return txtArea || (e.keyCode || e.which || e.charCode || 0) !== 13;
}

document.querySelector("form").onkeypress = checkEnter;

// First code
function codeOne(form) {
  const inputValue = form.code1.value;

  if (inputValue.toLowerCase() === "hello") {
    alert("Correct!");
  } else {
    alert("Incorrect");
  }
}

// First code
function codeOne(form) {
  const inputValue = form.code1.value;

  if (inputValue.toLowerCase() === "hello") {
    alert("Correct!");
  } else {
    alert("Incorrect");
  }
}

// Second code
function codeTwo(form) {
  const inputValue = form.code2.value;

  if (inputValue.toLowerCase() === "hello") {
    alert("Correct!");
  } else {
    alert("Incorrect");
  }
}

// third code
function codeThree(form) {
  const inputValue = form.code3.value;

  if (inputValue.toLowerCase() === "hello") {
    alert("Correct!");
  } else {
    alert("Incorrect");
  }
}
// Fourth code
function codeFour(form) {
  const inputValue = form.code4.value;

  if (inputValue.toLowerCase() === "hello") {
    alert("Correct!");
  } else {
    alert("Incorrect");
  }
}
// Fifth code
function codeFive(form) {
  const inputValue = form.code5.value;

  if (inputValue.toLowerCase() === "hello") {
    alert("Correct!");
  } else {
    alert("Incorrect");
  }
}
// Sixth code
function codeSix(form) {
  const inputValue = form.code6.value;

  if (inputValue.toLowerCase() === "hello") {
    alert("Correct!");
  } else {
    alert("Incorrect");
  }
}
// Seventh code
function codeSeven(form) {
  const inputValue = form.code7.value;

  if (inputValue.toLowerCase() === "hello") {
    alert("Correct!");
  } else {
    alert("Incorrect");
  }
}
// Eighth code
function codeEight(form) {
  const inputValue = form.code8.value;

  if (inputValue.toLowerCase() === "hello") {
    alert("Correct!");
  } else {
    alert("Incorrect");
  }
}
// Ninth code
function codeNine(form) {
  const inputValue = form.code9.value;

  if (inputValue.toLowerCase() === "hello") {
    alert("Correct!");
  } else {
    alert("Incorrect");
  }
}
// Tenth code
function codeTen(form) {
  const inputValue = form.code10.value;

  if (inputValue.toLowerCase() === "hello") {
    alert("Correct!");
  } else {
    alert("Incorrect");
  }
}
