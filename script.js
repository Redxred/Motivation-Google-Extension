const quotes = [
  "Those who commit to nothing are distracted by everything",
  "The only way to do great work is to love what you do.",
  "Success is not how high you have climbed, but how you make a positive difference to the world.",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  "Believe you can and you're halfway there.",
  "Act as if what you do makes a difference. It does."
  "It takes courage to grow up and become who you really are." — E.E. Cummings
  "Your self-worth is determined by you. You don't have to depend on someone telling you who you are." — Beyoncé
  "Nothing is impossible. The word itself says 'I'm possible!'" — Audrey Hepburn
  "Keep your face always toward the sunshine, and shadows will fall behind you." — Walt Whitman
  "Attitude is a little thing that makes a big difference." — Winston Churchill
  "To bring about change, you must not be afraid to take the first step. We will fail when we fail to try." — Rosa Parks
  "All our dreams can come true, if we have the courage to pursue them." — Walt Disney
  "Real change, enduring change, happens one step at a time." — Ruth Bader Ginsburg
  "All dreams are within reach. All you have to do is keep moving towards them." — Viola Davis
  "It is never too late to be what you might have been." — George Eliot
  "When you put love out in the world it travels, and it can touch people and reach people in ways that we never even expected." — Laverne Cox
  "Give light and people will find the way." — Ella Baker
  "It always seems impossible until it's done." — Nelson Mandela
  "Don’t count the days, make the days count." — Muhammad Ali
  "If you risk nothing, then you risk everything." — Geena Davis
  "Definitions belong to the definers, not the defined." — Toni Morrison
  "When you have a dream, you've got to grab it and never let go." — Carol Burnett
  "Never allow a person to tell you no who doesn’t have the power to say yes." — Eleanor Roosevelt
  "When it comes to luck, you make your own." — Bruce Springsteen

];

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}

displayRandomQuote();
