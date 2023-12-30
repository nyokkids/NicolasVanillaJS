const quotes = [
  {
    quote: "I never dreamed about success, I worked for it",
    author: "Estee Lauder",
  },
  {
    quote: "Do not try to be original, just try to be good.",
    author: "Paul Rand",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
    author: "Martin Luther King Jr.",
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas Edison",
  },
  {
    quote:
      "The fastest way to change yourself is to hang out with people who are already the way you want to be",
    author: "REid Hoffman",
  },
  {
    quote:
      "Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations",
    author: "Tim O Reilly",
  },
  {
    quote:
      "Some people dream of success, while other people get up every morning and make it happen",
    author: "Wayne Huizenga",
  },
  {
    quote:
      "The only thing worse than starting something and falling.. is not starting something",
    author: "SEth Godin",
  },
  {
    quote:
      "If you really want to do something, you will find a way. If you do not, you will find an excuse.",
    author: "Jim Rohn",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
//#quote는 index.html의 id임

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//Math.random은 0에서 1 사이의 숫자 아무거나 가져옴. 근데 우리는 정수를 불러와야 하니까 내림을 해주는 floor로 감싸서 정수를 만들어주는거임.
//아무 소수에다가 quote의 양을 뜻하는 length를 곱해주고 그걸 내림해주면 번호가 quote의 양을 초과할 일 없이 번호를 불러옴
//Math.round는 반올림, Math.ceil은 올림, Math.floor는 내림. 우리의 경우에는 올림을 해버리면 번호가 양을 초과할 수 있어서 내림을 해주는 것
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
