function getRandom(min, max) {

  return Math.floor(Math.random() * (max-min + 1)) + min;
}

function getRandomChar() {

  var rndInt = getRandom(65, 90);
  var rndChar = String.fromCharCode(rndInt);


  return(rndChar);
}

function getRandomId() {
  var rndId = "";

  for (var i = 0; i < 3; i++) {

  rndId += getRandomChar() + getRandom(0, 9);
  }
console.log(rndId);
}



function getRandomPlayer() {

  var twoPerc = getRandom(0, 100);
  var threePerc = 100 - twoPerc -50;
  var player = {

  "id" : getRandomId(),
  "points" : getRandom(0, 30),
  "bounce" : getRandom(0, 15),
  "mistake" :getRandom(0, 5),
  "twoPerc" : twoPerc,
  "threePerc" : threePerc
};

return player;
}

function isPresent(player, players) {

  var finded = false;

  for (var i = 0; i < players.length; i++) {

    if (player.id == players[i].id) {
      finded = true;
    }
  }
  return  finded;
}

function getRandomPlayers() {
  var players = [];

  for (var i = 0; i < 10; i++) {
     var player = getRandomPlayer();
    if (!isPresent(player, players)) {

        players.push(getRandomPlayer());
    } else {
      i--
    }

  }
  return players;
}

function updateUI(players) {

  for (var i = 0; i < players.length; i++) {

    var player = players[i];

    var option =document.createElement("option");
    option.value = player.id;

    var datalist = $('datalist.players-list');
    datalist.append(option);
  }
  return datalist;
}



function init() {
console.log("ok");
getRandomChar();
getRandomId();
getRandomPlayers();
updateUI(players);
}


$(document).ready(init);
