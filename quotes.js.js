

const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
  "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
  "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. – Buddha",
  "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
  "The best way to predict the future is to create it. – Abraham Lincoln",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "It is never too late to be what you might have been. – George Eliot",
  "You must be the change you wish to see in the world. – Mahatma Gandhi",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
  "The only way to do great work is to love what you do. – Steve Jobs",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
"The way to get started is to quit talking and begin doing. -Walt Disney",
"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
"The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
"You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one. -John Lennon"
];


// Function to display a random quote
function getNewQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById('quote').textContent = quote;
}

// Function to speak the current quote
function speakQuote() {
  const quoteText = document.getElementById('quote').textContent;
  if ('speechSynthesis' in window) {
    const speech = new SpeechSynthesisUtterance(quoteText);
    window.speechSynthesis.speak(speech);
  } else {
    alert("Sorry, your browser does not support speech synthesis.");
  }
}

// Function to copy the current quote to clipboard
function copyQuote() {
  const quoteText = document.getElementById('quote').textContent;
  navigator.clipboard.writeText(quoteText).then(() => {
    alert("Quote copied to clipboard!");
  }).catch(err => {
    alert("Failed to copy: " + err);
  });
}

// Function to share the current quote on Twitter
function tweetQuote() {
  const quoteText = document.getElementById('quote').textContent;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText)}`;
  window.open(twitterUrl, '_blank');
}

// Event listeners
document.getElementById('new-quote-btn').addEventListener('click', getNewQuote);
document.getElementById('speak-btn').addEventListener('click', speakQuote);
document.getElementById('copy-btn').addEventListener('click', copyQuote);
document.getElementById('twitter-btn').addEventListener('click', tweetQuote);

// Load a new quote when the page loads
getNewQuote();
