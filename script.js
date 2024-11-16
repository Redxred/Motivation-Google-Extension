const quotes = [
  "Those who commit to nothing are distracted by everything",
  "The only way to do great work is to love what you do.",
  "Success is not how high you have climbed, but how you make a positive difference to the world.",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  "Believe you can and you're halfway there.",
  "Act as if what you do makes a difference. It does."
];

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}

displayRandomQuote();