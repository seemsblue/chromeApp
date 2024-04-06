const quotes = [
  {
    quote: " 내셔 남작은 자신의 뒤에 있는 챔피언에게 훨씬 더 큰 피해를 줍니다.",
    author: "[도움말]",
  },
  {
    quote:
      ' 트런들이 손에 넣은 얼음 정수의 몽둥이에는 "뼈분쇄자"라는 이름이 붙었습니다.',
    author: "[알고 계셨나요?]",
  },
  {
    quote: "미래를 예측하는 가장 좋은 방법은 미래를 발명하는 것이다",
    author: "Alan Curtis Kay",
  },
  {
    quote: "저는 저 탑을 질투해야겠군요. 저 탑은 저보다 더 유명합니다.",
    author: "Gustave Eiffel",
  },
  {
    quote:
      "로도스에는 태양을 상징하는 30미터 높이의 거상이 세워졌는데, 건축가가 너무 많은 양의 청동을 써서 아마도 광산을 고갈시켰을 것 같다.",
    author: "Philo of Byzantium",
  },
  {
    quote: "방어는 부유함보다 우월하지.",
    author: "Adam Smith",
  },
  {
    quote:
      "역사는 과거에 일어난 일들에 대해서 사람들이 동의하기로 한 버전입니다.",
    author: "Napoléon I",
  },
  {
    quote:
      "납세자란, 공무원 시험을 보지 않고도 연방 정부를 위해 일하는 사람들이다.",
    author: "Ronald Wilson Reagan",
  },
  {
    quote: "반짝이는 모든 것이 다 금은 아니라네, 자네도 종종 들었듯이 말이야.",
    author: "William Shakespeare",
  },
  {
    quote:
      "우리가 탐험하기를 멈추는 날은 우리가 호기심과 꿈이 없는 침체된 세상에 살기로 약속하는 날입니다.",
    author: "Neil deGrasse Tyson",
  },
  {
    quote:
      "사람들이 완벽한 바보도 쉽게 다룰 수 있도록 무언가를 디자인할 때에, 흔히 저지르는 실수는 완벽한 바보들의 엉뚱한 기발함을 과소평가하는 것이다.",
    author: "Douglas Adams",
  },
  {
    quote: "전쟁은 지옥이다.",
    author: "William Tecumseh Sherman",
  },
  {
    quote:
      "당신이 신문을 읽지 않는다면, 정보가 없는 사람입니다. 만약 당신이 신문을 읽는다면, 잘못된 정보를 받고 있습니다.",
    author: "Mark Twain",
  },
  {
    quote: "이기는 것이 전부가 아니라면, 점수는 왜 기록하는가?",
    author: 'Vincent Thomas "Vince" Lombardi',
  },
  {
    quote: "온 세상은 무대이고, 모든 남녀는 배우라네.",
    author: "William Shakespeare",
  },
  {
    quote: "전 점성술을 믿지 않아요. 제가 궁수자리인데, 우린 의심이 많거든요.",
    author: "Sir Arthur C. Clarke",
  },
  {
    quote: "별을 보고 항로를 정해라, 지나가는 모든 배의 등불 말고.",
    author: "Omar Nelson Bradley",
  },
  {
    quote:
      "어떤 생각에 동의하지 않지만, 그 생각을 해볼 수 있는 것이 교육받은 사람의 특징이다.",
    author: "Aristotle",
  },
  {
    quote: "방황하는 모든 이들이 길을 잃는 것은 아니다.",
    author: "J.R.R. Tolkien",
  },
  {
    quote:
      "만일 당신의 행동이 다른 사람들로 하여금 더 꿈꾸고, 배우고, 행동하고, 성장하게 한다면, 당신은 분명 지도제작자일 거야.",
    author: "John Quincy Adams",
  },
  {
    quote: "사실이 이론에 맞지 않으면, 사실을 바꿔라.",
    author: "Albert Einstein",
  },
  {
    quote:
      "전략이 아무리 아름답다고 해도 가끔은 결과에도 신경써야 하지 않나요?",
    author: "Rt Hon. Sir Winston Churchill",
  },
  {
    quote: "인간은 실수할 수 있지만, 정말로 일을 망치려면 컴퓨터가 필요하다.",
    author: "Paul Ehrlich",
  },
  {
    quote:
      "컴퓨터의 좋은 점은 사용자가 시키는 대로 한다는 점이지. 물론 나쁜 점도 마찬가지로 사용자가 시키는 대로 한다는 점이라네.",
    author: "Ted Nelson",
  },
  {
    quote: "미래를 창조하기에 꿈만큼 좋은 것은 없다.",
    author: "Victor Hugo",
  },
  {
    quote:
      "우리가 밤에 고개를 들어 별을 볼 때, 우리가 보는 반짝임은 먼 곳에서 일어나는 핵융합 덕분입니다.",
    author: "Carl Edward Sagan",
  },
  {
    quote:
      "그 어떤 간청도 그대가 선량함과 연민을 베풀어 이 생물을 좋아할 수 없는가?",
    author: "Mary Shelley",
  },
  {
    quote: "시계를 보지는 말되, 따라는 해봐. 시계처럼 할 일을 계속하란 얘기야.",
    author: "Sam Levenson",
  },
];
const quoteBox = document.querySelector("#quote");
let isHide = false;
function hide() {
  console.log(quoteBox.clientHeight);
  if (isHide) {
    quoteBox.style.bottom = "0px";
    setTimeout(() => {
      isHide = false;
    }, 2300);
  } else {
    quoteBox.style.bottom = `-${quoteBox.clientHeight - 11}px`;
    setTimeout(() => {
      isHide = true;
      setQuote();
    }, 2300);
  }
}

const quote = document.querySelector("#quote span:first-child");

function randQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function setQuote() {
  const todaysQuote = randQuote();
  quote.innerHTML = `${todaysQuote.quote}${
    todaysQuote.author != "" ? "<br />" + todaysQuote.author : ""
  }`;
  if (isHide) {
    quoteBox.style.bottom = `-${quoteBox.clientHeight - 11}px`;
  }
}

setQuote();

quoteBox.addEventListener("click", hide);
