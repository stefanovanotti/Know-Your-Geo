countries = [
  { countryName: "Italy", capitalName: "Rome" },
  { countryName: "Germany", capitalName: "Berlin" },
  { countryName: "France", capitalName: "Paris" },
  { countryName: "Spain", capitalName: "Madrid" },
  { countryName: "United Kingdom", capitalName: "London" },
  { countryName: "Belgium", capitalName: "Brussels" },
  { countryName: "Greece", capitalName: "Athens" },
  { countryName: "USA", capitalName: "Washington D.C." },
  { countryName: "Mexico", capitalName: "Mexico City" },
  { countryName: "Brazil", capitalName: "Brazilia" },
  { countryName: "Japan", capitalName: "Tokyo" },
  { countryName: "", capitalName: "" }
];

function newCountry() {
  var randomCountry = countries[Math.floor(Math.random() * countries.length)];
  console.log(randomCountry);
  return randomCountry;
}

function presentCountry() {
  var random = newCountry();
  randomCountryName = document.getElementById("countryId");
  randomCountryName.innerText = random.countryName;
  randomCapitalName = document.getElementById("capitalId");
  randomCapitalName.innerText = random.capitalName;
}

const btn = document.getElementById("new_G");
// btn.onclick = function() {
//   presentCountry();
// };

btn.onclick = function() {
  presentCountry();
};

const guess = document.getElementById("insert_capital");
const guessbtn = document.getElementById("rightChoice");

var getValue = () => {
  guessbtn.onclick = function(evt) {
    evt.preventDefault();
    console.log(guess.value);

    isCorrect();
  };
};

guess.oninput = getValue;

function isCorrect() {
  var stringToGuess = document.getElementById("capitalId").innerText;
  if (guess.value == stringToGuess) {
    console.log("you smartass");
  } else console.log("you stupid");
}
