function newCountry() {
  var randomCountry = countries[Math.floor(Math.random() * countries.length)];
  console.log(randomCountry);
  return randomCountry;
}

function presentCountry() {
  var random = newCountry();
  randomCountryName = document.getElementById("countryId");
  randomCountryName.innerText = random.name;
}

const btn = document.getElementById("new_G");
//start game onclick
btn.onclick = function() {
  stopTimer();
  presentCountry();
  scoreplayer1.innerText = 0;
  scoreplayer2.innerText = 0;
  startTimer();
  makeItBeat();
};

const idk = document.getElementById("idk");

const guess = document.getElementById("insert_capital");
const guessbtn = document.getElementById("rightChoice");

//submit onclick
var getValue = () => {
  guessbtn.onclick = function(evt) {
    evt.preventDefault();
    stopTimer();
    console.log(guess.value);
    isCorrect();
    startTimer();
    console.log(score1);
    console.log(score2);
    scoreplayer1.innerText = score1;
    scoreplayer2.innerText = score2;
  };
};
var scoreplayer1 = document.getElementById("score1");
var scoreplayer2 = document.getElementById("score2");
guess.oninput = getValue;

var score1 = "0";
var score2 = "0";
var outcome = document.getElementById("outcome");
var players = document.getElementById("player");
var solution = document.getElementById("capitalId");

compliments = [
  "WELL DONE",
  "KNOWLEDGE EVERYWHERE",
  "YOU FREAKING GENIUS",
  "YOU NERD",
  "YOU ARE A TERRIBLY SMART INDIVIDUAL",
  "SUCH A SUPERIOR BRAIN"
];

insults = [
  "NAH",
  "NEXT ONE WILL BE BETTER",
  "YOU KNOW NOTHING",
  "POOR PERFORMANCE",
  "ÇA VA PAS",
  "PRETTY BAD",
  "OMG, GO BUY SOME GEOGRAPHY BOOKS",
  "YOU FAIL",
  "SOMEONE HERE SKIPPED PRIMARY SCHOOL",
  "LESS FACEBOOK, MORE GOOGLE MAPS",
  "YOU FOOL",
  "BRAIN SITUATION: ABOUT:BLANK"
];
// const timerStartElements = document.querySelectorAll(".timer-btn");

// for (let i = 0; i < timerStartElements.length; i++) {
//   timerStartElements[i].onclick = startTimer;
// }
var displayTimer = document.getElementById("timer");
var count = 19;
var timer;

function stopTimer() {
  count = 19;
  displayTimer.textContent = count;
  window.clearInterval(timer);
}

function startTimer() {
  timeSound.play();
  timer = setInterval(() => {
    displayTimer.innerText = count--;
    if (count <= 0) {
      timeIsUp();
    }
  }, 1000);

  // timeoutID = window.setTimeout(() => {
  //   // clearTimeout(timer);
  //   clearInterval(timer);
  // }, 10000);
}

// function zeroTimer() {
//   console.log(timer);
//   clearInterval(timer);
//   count = 9;
//   othertimer = setInterval(() => {
//     displayTimer.innerText = count--;
//   }, 1000);

//   timeoutID = window.setTimeout(() => {
//     clearInterval(othertimer);
//   }, 10000);
// }
// no clue event
idk.onclick = function(e) {
  e.preventDefault();
  stopTimer();
  if (players.innerText == "Player 1") {
    players.innerText = "Player 2";
  } else if (players.innerText == "Player 2") {
    players.innerText = "Player 1";
  }
  presentCountry();
  startTimer();
  makeItBeat();
};

function isCorrect() {
  var theCountry = document.getElementById("countryId").innerText;
  for (let i = 0; i < countries.length; i++) {
    if (theCountry === countries[i].name) {
      console.log(countries[i].capital);
      var stringToGuess = countries[i].capital.toLowerCase();
    }
  }

  if (
    guess.value.toLowerCase() == stringToGuess &&
    players.innerText == "Player 1"
  ) {
    outcome.innerText = makeACompliment();
    score1++;
    presentCountry();
    checkWinner();
  } else if (
    guess.value.toLowerCase() == stringToGuess &&
    players.innerText == "Player 2"
  ) {
    outcome.innerText = makeACompliment();
    score2++;
    presentCountry();
    checkWinner();
  } else if (
    guess.value.toLowerCase() !== stringToGuess &&
    players.innerText == "Player 1"
  ) {
    outcome.innerText = makeAnInsult();
    laugh.play();
    players.innerText = "Player 2";
    makeItBeat();
  } else if (
    guess.value.toLowerCase() !== stringToGuess &&
    players.innerText == "Player 2"
  ) {
    outcome.innerText = makeAnInsult();
    laugh2.play();
    solution.innerText =
      "The capital of " + theCountry + " is: " + stringToGuess.toUpperCase();
    presentCountry();
    players.innerText = "Player 1";
    makeItBeat();
  }

  function makeACompliment() {
    var randomCompliment =
      compliments[Math.floor(Math.random() * compliments.length)];
    console.log(randomCompliment);
    return randomCompliment;
  }

  function makeAnInsult() {
    var randomInsult = insults[Math.floor(Math.random() * insults.length)];
    console.log(randomInsult);
    return randomInsult;
  }
}

function makeItBeat() {
  // players.remove();
  // players = document.createElement("h3");
  // players.classList.add("heartBeat");
  // players.textContent = "randomtest";
  // const parent = document.getElementById("parentplayer");
  // parent.appendChild(players);

  if (players.classList.contains("heartBeat")) {
    players.classList.remove("heartBeat");
    players.classList.add("heartBeat2");
  } else if (players.classList.contains("heartBeat2")) {
    players.classList.remove("heartBeat2");
    players.classList.add("heartBeat");
  }
}

countries = [
  { name: "Albania", capital: "Tirana" },
  { name: "Algeria", capital: "Algiers" },
  { name: "Argentina", capital: "Buenos Aires" },
  { name: "Australia", capital: "Canberra" },
  { name: "Austria", capital: "Vienna" },
  { name: "Azerbaijan", capital: "Baku" },
  { name: "Bahamas", capital: "Nassau" },
  { name: "Bangladesh", capital: "Dhaka" },
  { name: "Belarus", capital: "Minsk" },
  { name: "Belgium", capital: "Brussels" },
  { name: "Bosnia and Herzegovina", capital: "Sarajevo" },
  { name: "Brazil", capital: "Brasília" },
  { name: "Bulgaria", capital: "Sofia" },
  { name: "Burkina Faso", capital: "Ouagadougou" },
  { name: "Canada", capital: "Ottawa" },
  { name: "Cayman Islands", capital: "George Town" },
  { name: "Chile", capital: "Santiago" },
  { name: "China", capital: "Beijing" },
  { name: "Colombia", capital: "Bogotá" },
  { name: "Congo (Democratic Republic of the)", capital: "Kinshasa" },
  { name: "Croatia", capital: "Zagreb" },
  { name: "Cuba", capital: "Havana" },
  { name: "Cyprus", capital: "Nicosia" },
  { name: "Czech Republic", capital: "Prague" },
  { name: "Denmark", capital: "Copenhagen" },
  { name: "Dominican Republic", capital: "Santo Domingo" },
  { name: "Egypt", capital: "Cairo" },
  { name: "Estonia", capital: "Tallinn" },
  { name: "Ethiopia", capital: "Addis Ababa" },
  { name: "Finland", capital: "Helsinki" },
  { name: "France", capital: "Paris" },
  { name: "Germany", capital: "Berlin" },
  { name: "Greece", capital: "Athens" },
  { name: "Greenland", capital: "Nuuk" },
  { name: "Hungary", capital: "Budapest" },
  { name: "Iceland", capital: "Reykjavík" },
  { name: "India", capital: "New Delhi" },
  { name: "Indonesia", capital: "Jakarta" },
  { name: "Iran", capital: "Tehran" },
  { name: "Iraq", capital: "Baghdad" },
  { name: "Ireland", capital: "Dublin" },
  { name: "Israel", capital: "Jerusalem" },
  { name: "Italy", capital: "Rome" },
  { name: "Jamaica", capital: "Kingston" },
  { name: "Japan", capital: "Tokyo" },
  { name: "Kazakhstan", capital: "Astana" },
  { name: "Kenya", capital: "Nairobi" },
  { name: "Latvia", capital: "Riga" },
  { name: "Lebanon", capital: "Beirut" },
  { name: "Libya", capital: "Tripoli" },
  { name: "Lithuania", capital: "Vilnius" },
  { name: "Luxembourg", capital: "Luxembourg" },
  { name: "Malta", capital: "Valletta" },
  { name: "Mexico", capital: "Mexico City" },
  { name: "Nepal", capital: "Kathmandu" },
  { name: "Netherlands", capital: "Amsterdam" },
  { name: "Nigeria", capital: "Abuja" },
  { name: "Norway", capital: "Oslo" },
  { name: "Pakistan", capital: "Islamabad" },
  { name: "Panama", capital: "Panama City" },
  { name: "Peru", capital: "Lima" },
  { name: "Philippines", capital: "Manila" },
  { name: "Poland", capital: "Warsaw" },
  { name: "Portugal", capital: "Lisbon" },
  { name: "Puerto Rico", capital: "San Juan" },
  { name: "Qatar", capital: "Doha" },
  { name: "Romania", capital: "Bucharest" },
  { name: "Russian Federation", capital: "Moscow" },
  { name: "Rwanda", capital: "Kigali" },
  { name: "Singapore", capital: "Singapore" },
  { name: "Slovenia", capital: "Ljubljana" },
  { name: "South Africa", capital: "Pretoria" },
  { name: "Korea (Republic of)", capital: "Seoul" },
  { name: "Spain", capital: "Madrid" },
  { name: "Sweden", capital: "Stockholm" },
  { name: "Switzerland", capital: "Bern" },
  { name: "Syrian Arab Republic", capital: "Damascus" },
  { name: "Taiwan", capital: "Taipei" },
  { name: "Tunisia", capital: "Tunis" },
  { name: "Turkey", capital: "Ankara" },
  { name: "Ukraine", capital: "Kiev" },
  { name: "United Arab Emirates", capital: "Abu Dhabi" },
  {
    name: "United Kingdom of Great Britain and Northern Ireland",
    capital: "London"
  },
  { name: "United States of America", capital: "Washington" },
  { name: "Uruguay", capital: "Montevideo" },
  { name: "Viet Nam", capital: "Hanoi" },
  { name: "Zimbabwe", capital: "Harare" }
];

function timeIsUp() {
  stopTimer();
  outcome.innerText = "Time's up!";
  if (players.innerText == "Player 1") {
    players.innerText = "Player 2";
  } else if (players.innerText == "Player 2") {
    players.innerText = "Player 1";
  }
  presentCountry();
  startTimer();
  // }
}

// setInterval(() => {
//   timeIsUp();
// }, 2000);
const container = document.getElementById("gameContainer");

function checkWinner() {
  if (score1 == 1) {
    players.removeChild(players.firstChild);
    console.log("Player 1, You Know your Geo!");
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    var div2 = document.createElement("div"); //create a new div
    div2.innerHTML =
      "<h1 class = heartBeat , id = winner1 >Player 1, You Know your Geo!</h1>";

    container.appendChild(div2);
    timeIsUp();
    stopTimer();
    timeSound.pause();
  } else if (score2 == 1) {
    players.removeChild(players.firstChild);
    console.log("Player 2, You Know your Geo!");
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    var div2 = document.createElement("div"); //create a new div
    div2.innerHTML =
      "<h1 class = heartBeat , id = winner1 >Player 2, You Know your Geo!</h1>";

    container.appendChild(div2);
    timeIsUp();
    stopTimer();
    timeSound.pause();
  }
}

var laugh = new Audio("./sounds/457.mp3");
var laugh2 = new Audio("./sounds/21879.mp3");
var timeSound = new Audio("./sounds/3265.mp3");
