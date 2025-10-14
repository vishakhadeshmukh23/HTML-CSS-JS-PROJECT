const passwordBox = document.getElementById("password");
const lengthEl = document.getElementById("length");
const lengthVal = document.getElementById("lengthVal");

function updateLength() {
  lengthVal.innerText = lengthEl.value;
}

function generatePassword() {
  const lowercase = document.getElementById("lowercase").checked;
  const uppercase = document.getElementById("uppercase").checked;
  const numbers = document.getElementById("numbers").checked;
  const symbols = document.getElementById("symbols").checked;
  const exclude = document.getElementById("exclude").checked;
  const spaces = document.getElementById("spaces").checked;
  const length = lengthEl.value;

  let charset = "";
  if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbers) charset += "0123456789";
  if (symbols) charset += "!@#$%^&*()_-+=<>?/{}~";
  if (spaces) charset += "     "; // add spaces

  if (charset === "") {
    alert("Please select at least one option!");
    return;
  }

  let password = "";
  const usedChars = new Set();

  for (let i = 0; i < length; i++) {
    let char = charset[Math.floor(Math.random() * charset.length)];
    if (exclude) {
      while (usedChars.has(char)) {
        char = charset[Math.floor(Math.random() * charset.length)];
      }
      usedChars.add(char);
    }
    password += char;
  }

  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
  alert("Password copied!");
}

generatePassword();
