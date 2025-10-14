const quotes = [
  {
    quote: "Never give up because you never know if the next try is going to be the one that works.",
    author: "Mary Kay Ash"
  },
  {
    quote: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers"
  },
  {
    quote: "It’s not whether you get knocked down, it’s whether you get up.",
    author: "Vince Lombardi"
  },
  {
    quote: "Success is not in what you have, but who you are.",
    author: "Bo Bennett"
  },
  {
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    author: "William James"
  },
  {
    quote: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    quote: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe"
  },
  {
    quote: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown"
  },
  {
    quote: "Great things never come from comfort zones.",
    author: "Roy T. Bennett"
  },
  {
    quote: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    quote: "Opportunities don't happen, you create them.",
    author: "Chris Grosser"
  },
  {
    quote: "Success doesn’t just find you. You have to go out and get it.",
    author: "Unknown"
  },
  {
    quote: "Don’t stop when you’re tired. Stop when you’re done.",
    author: "Marilyn Monroe"
  },
  {
    quote: "Hard work beats talent when talent doesn’t work hard.",
    author: "Tim Notke"
  },
  {
    quote: "Believe you can and you’re halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Doubt kills more dreams than failure ever will.",
    author: "Suzy Kassem"
  },
  {
    quote: "If you want to achieve greatness, stop asking for permission.",
    author: "Unknown"
  },
  {
    quote: "The harder you work for something, the greater you’ll feel when you achieve it.",
    author: "Unknown"
  }
];


const quoteName = document.querySelector(".quote");
const authorName = document.querySelector(".name");
const newQuoteBtn = document.querySelector("button");
const soundBtn = document.querySelector(".sound")
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");


function randomQuote(){
    const random = Math.floor(Math.random() * quotes.length);
  quoteName.innerText = quotes[random].quote;
  authorName.innerText = quotes[random].author;
}

newQuoteBtn.addEventListener("click", randomQuote);


soundBtn.addEventListener("click", () =>{
  let utterance = new SpeechSynthesisUtterance(`${quoteName.innerText} by ${authorName.innerText}`);
  speechSynthesis.speak(utterance);

});

copyBtn.addEventListener("click", () =>{
  navigator.clipboard.writeText(`${quoteName.innerText} - ${authorName.innerText}`);
  alert("Quote copied!")
});


twitterBtn.addEventListener("click", () => {
  let tweetText = `${quoteName.innerText} - ${authorName.innerText}`;
  let twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
  window.open(twitterUrl, "_blank");
});
