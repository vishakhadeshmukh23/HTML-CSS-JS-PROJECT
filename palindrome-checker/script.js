function checkPalindrome() {
  let text = document.getElementById("inputText").value.trim().toLowerCase();
  let cleaned = "";

  for (let ch of text) {
    if ((ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9')) {
      cleaned += ch;
    }
  }
  let reversed = cleaned.split('').reverse().join('');
  let result = document.getElementById("result");

  if (!text) {                                                             //text === "" ya text.length === 0  hum usme ye bhi likh skte hai.s
    result.innerHTML = "⚠️ Please enter some text.";
  } else if (cleaned === reversed) {
    result.innerHTML = `✅ Yes, '${text}' is a palindrome!`;
  } else {
    result.innerHTML = `❌ No, '${text}' is not a palindrome.`;
  }
}



function checkPalindrome(){
  let 
}