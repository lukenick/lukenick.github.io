var listA = "03",		// Food list
	itemA = "00",		// Pizza
	listB = "03",
	itemB = "04";		// Ice-cream
	
var thisPlayer = "Bob";
var otherPlayer = "Bella";

var stage = 1; // Used to track which stage of the setup. Stage 1= Needs to enter player names. Stage 2= Needs to make first choice. Stage 3= Link ready to send
function enteredPlayerNames(){
	thisPlayer = document.getElementById("thisPlayerInput").value;
	otherPlayer = document.getElementById("otherPlayerInput").value;
	
	if (thisPlayer!="" && otherPlayer!=""){
		stage = 2;
		document.getElementById("thing-one").style.display= "inline";
		document.getElementById("thing-two").style.display= "inline";
		document.getElementById("thisPlayerInput").style.display= "none";
		document.getElementById("thisPlayerLabel").style.display= "none";
		document.getElementById("otherPlayerInput").style.display= "none";
		document.getElementById("otherPlayerLabel").style.display= "none";
		document.getElementById("doneButton").style.display= "none";
		document.getElementById("instructionsText").innerHTML = "<p> Second step: Make your first decision. <br> Would you rather... </p>";
		document.getElementById("final-instructions").innerHTML = "<p> It's a tough choice, but someone's got to make it </p>";
	} else {
		document.getElementById("final-instructions").innerHTML = "<p> Names can't be blank. Use a nickname if you want though. </p>";
	}
}

function clickedLeft() {
	if (stage == 2) {
		stage = 3;
		calculateURLS();
		navigator.clipboard.writeText(leftURL);
		document.getElementById("first-instructions").innerHTML = "<p> You should now have a link in your clipboard. Send that to " + otherPlayer + " in a message to start your game. If the link isn't there, just copy it from here: " +leftURL;
		document.getElementById("final-instructions").innerHTML = "<p> Oof, that was a tough choice. But you did it!";
	}
}
function clickedRight() {
	if (stage == 2) {
		stage = 3;
		calculateURLS();
		navigator.clipboard.writeText(rightURL);
		document.getElementById("first-instructions").innerHTML = "You should now have a link in your clipboard. Send that to " + otherPlayer + " in a message to start your game. If the link isn't there, just copy it from here: " +leftURL;
		document.getElementById("final-instructions").innerHTML = "Oof, that was a tough choice. But you did it!";
	}
}
function calculateURLS() {
	var version = "1",
		streak = "000",
		check = "0",
		seed = "5",
		players = thisPlayer + "&" + otherPlayer;
		leftAnswer = "0";
		rightAnswer = "1";
	if (window.location.hostname == ""){
		leftURL = window.location.protocol + "//" + window.location.hostname + window.location.pathname.slice(0, -13) + "would-they-rather.html?" + version + listA + itemA + listB + itemB + streak + check + leftAnswer + seed + players;
		rightURL = window.location.protocol + "//" + window.location.hostname + window.location.pathname.slice(0, -13) + "would-they-rather.html?" + version + listA + itemA + listB + itemB + streak + check + rightAnswer + seed + players;
	} else {
		leftURL = window.location.protocol + "//" + window.location.hostname + "/" + window.location.pathname.slice(0, -13) + "would-they-rather.html?" + version + listA + itemA + listB + itemB + streak + check + leftAnswer + seed + players;
		rightURL = window.location.protocol + "//" + window.location.hostname + "/" + window.location.pathname.slice(0, -13) + "would-they-rather.html?" + version + listA + itemA + listB + itemB + streak + check + rightAnswer + seed + players;
	}
}