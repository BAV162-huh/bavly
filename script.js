const quotes = [
  "There is nothing impossible to they who will try.",
  "Start where you are. Use what you have. Do what you can.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Every new day is another chance to change your life.",
  "You are stronger than you think, smarter than you believe.",
  "Success doesn't come from comfort zones. It comes from challenges."
];

function generateQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[random];
}
