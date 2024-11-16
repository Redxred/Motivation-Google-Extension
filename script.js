const quotes = [
  "Those who commit to nothing are distracted by everything",
  "The only way to do great work is to love what you do.",
  "Success is not how high you have climbed, but how you make a positive difference to the world.",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  "Believe you can and you're halfway there.",
  "Act as if what you do makes a difference. It does.",
  "It takes courage to grow up and become who you really are.",
  "Your self-worth is determined by you. You don't have to depend on someone telling you who you are.",
  "Nothing is impossible. The word itself says 'I'm possible!",
  "Keep your face always toward the sunshine, and shadows will fall behind you.",
  "Attitude is a little thing that makes a big difference.",
  "To bring about change, you must not be afraid to take the first step. We will fail when we fail to try.",
  "All our dreams can come true, if we have the courage to pursue them.",
  "Real change, enduring change, happens one step at a time.",
  "All dreams are within reach. All you have to do is keep moving towards them.",
  "It is never too late to be what you might have been.",
  "When you put love out in the world it travels, and it can touch people and reach people in ways that we never even expected.",
  "Give light and people will find the way.",
  "It always seems impossible until it's done.",
  "Don’t count the days, make the days count.",
  "If you risk nothing, then you risk everything.",
  "Definitions belong to the definers, not the defined.",
  "When you have a dream, you've got to grab it and never let go.",
  "Never allow a person to tell you no who doesn’t have the power to say yes.",
  "When it comes to luck, you make your own.",

];

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}

displayRandomQuote();
