let btn = document.querySelector(".btn");
let input = document.querySelector(".input");
let result = document.querySelector(".result");

let palindromeChecker = () => {
  let word = input.value;

  let editedWord = word.replace(/_\W/g, "").toLowerCase();
  let reverseWord = editedWord.split("").reverse().join("");
  if (editedWord != reverseWord) {
    result.textContent = "Not Palindrome";
    return;
  }
  result.textContent = "Palindrome";
  return;
};

btn.addEventListener("click", palindromeChecker);
