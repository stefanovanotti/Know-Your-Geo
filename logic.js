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

btn.onclick = function() {
  presentCountry();
  scoreplayer1.innerText = 0;
  scoreplayer2.innerText = 0;
};

const idk = document.getElementById("idk");
// idk.onclick = function(e) {
//   e.preventDefault();
//   presentCountry();
//   outcome.innerText = "YOU KNOW THAT YOU KNOW NOTHING";
//   solution.innerText = "The capital of " + theCountry + " is: " + stringToGuess;
//   if (players.innerText == "Player 1") {
//     players.innerText = "Player 2";
//   } else if (players.innerText == "Player 2") {
//     players.innerText = "Player 1";
//   }
// };

const guess = document.getElementById("insert_capital");
const guessbtn = document.getElementById("rightChoice");

var getValue = () => {
  guessbtn.onclick = function(evt) {
    evt.preventDefault();
    console.log(guess.value);
    isCorrect();
    console.log(score1);
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
function isCorrect() {
  var theCountry = document.getElementById("countryId").innerText;
  for (let i = 0; i < countries.length; i++) {
    if (theCountry === countries[i].name) {
      console.log(countries[i].capital);
      var stringToGuess = countries[i].capital;
    }
  }

  if (guess.value == stringToGuess && players.innerText == "Player 1") {
    outcome.innerText = "YOU NERD";
    score1++;
    presentCountry();
  } else if (guess.value == stringToGuess && players.innerText == "Player 2") {
    outcome.innerText = "YOU FREAKING GENIUS";
    score2++;
    presentCountry();
  } else if (guess.value !== stringToGuess && players.innerText == "Player 1") {
    outcome.innerText = "SOMEONE HERE SKIPPED PRIMARY SCHOOL";
    players.innerText = "Player 2";
  } else if (guess.value !== stringToGuess && players.innerText == "Player 2") {
    outcome.innerText = "YOU FAIL";
    solution.innerText =
      "The capital of " + theCountry + " is: " + stringToGuess;
    presentCountry();
    players.innerText = "Player 1";
  }

  idk.onclick = function(e) {
    e.preventDefault();
    presentCountry();
    outcome.innerText = "YOU KNOW THAT YOU KNOW NOTHING";
    if (players.innerText == "Player 1") {
      players.innerText = "Player 2";
    } else if (players.innerText == "Player 2") {
      players.innerText = "Player 1";
    }
  };
}

// var countries2 = [];
// axios
//   .get("https://restcountries.eu/rest/v2/all")
//   .then(res => {
//     res.data.forEach(element => {
//       var test = (({ name, capital }) => ({ name, capital }))(element);
//       countries.push(test);
//     });
//   })
//   .catch(err => console.log(err));

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

console.log(countries);
