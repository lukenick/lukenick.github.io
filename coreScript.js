let guessed = false;
let animals = ["cat", "dog", "sparrow", "horse", "chimpanzee", "elephant", "rhino", "llama", "meercat", "goose", "hamster", "bald eagle", "mermaid", "dragon", "lobster", "lion", "tiger", "cobra", "clown fish", "hedgehog", "sheep", "goat", "cow", "pig", "hippo", "sloth", "crocodile", "alligator", "peacock", "peahen", "chameleon", "cheetah", "minotaur", "camel", "kangaroo", "koala", "capybara", "moose", "beaver"];
let cities = ["New York", "Paris", "London", "Rome", "Beijing", "Tokyo", "Sydney", "Cairo", "Los Angeles", "Moscow", "Venice", "Barcelona", "Madrid", "Edinburgh", "Los Vegas", "Miami", "Hong Kong", "Singapore", "Canberra", "Auckland", "Buenos Aires", "Chicago", "Brussels", "Havana", "Helsinki", "Athens", "Nairobi", "Mexico City", "Lima", "Seoul", "Abu Dhabi", "Ankara"];
let colours = ["red", "green", "blue", "yellow", "orange", "brown", "purple", "pink"];
let foods = ["pizza", "burger", "lasagna", "pie", "ice-cream", "waffles", "pancakes", "chips", "fried chicken", "fruit salad", "gelato", "spaghetti", "sushi", "pineapple", "pumpkin", "risotto", "nachos", "toast", "croissants", "bagels", "walnuts", "potato salad", "dumplings", "hash browns", "peanut butter"];
let jobs = ["nurse", "teacher", "pilot", "air traffic controller", "doctor", "priest", "chef", "ninja", "pirate", "singer", "pianist", "dancer", "tik-toker", "soldier", "model", "accountant", "librarian", "baker", "farmer", "electrician", "plumber", "piano tuner", "architect", "mechanic", "astronaut"]
let lists = [animals, cities, colours, foods, jobs];

function loadChoices(){
	/*
	Reads the game state data from the URL then saves it into relevant variables and updates the page with the data.
	*/
	data = window.location.search;
	version = data[1];
	listA = parseInt(data.slice(2, 4));
	itemA = parseInt(data.slice(4, 6));
	listB = parseInt(data.slice(6, 8));
	itemB = parseInt(data.slice(8, 10));
	streak = parseInt(data.slice(10, 13));
	check = data.slice(13, 14);
	answer = data.slice(14, 15);
	seed = data.slice(15, 16)
	players = data.slice(16).split("&");
	otherPlayer = players[0];
	thisPlayer = players[1];
	document.getElementById("streak-widget").innerHTML = thisPlayer + " and " + otherPlayer + " are on a " + streak + " correct answer streak.";
	document.getElementById("title-text").innerHTML = "What would " + otherPlayer + " pick: ";
	
	document.getElementById("thing-one").innerHTML = lists[(listA)][itemA];
	document.getElementById("thing-two").innerHTML = lists[(listB)][itemB];
	
	displayOptions(lists[(listA)][itemA], lists[(listB)][itemB], seed);
	
	
}
loadChoices();
function madeChoice(decision){
	/*
	@param {string} decision - Either L or R, representing whether the player guessed Left or right
	Looks at the game state and tells the player whether they guessed right or wrong, and then shows them the next question
	*/
	correctAnswer = answer;
	//correctAnswer = (answer - listA - itemB)%2;
	if (decision == "L" && correctAnswer == 0) {
		streak = streak + 1;
		document.getElementById("title-text").innerHTML = "CORRECT! <br> Now what would you pick from: "
		document.getElementById("streak-widget").innerHTML = thisPlayer + " and " + otherPlayer + " are on a " + streak + " correct answer streak.";
		generateQuestion();
	} else if (decision == "R" && correctAnswer == 1) {
		streak = streak + 1;
		document.getElementById("title-text").innerHTML = "CORRECT! <br> Now what would you pick from: "
		document.getElementById("streak-widget").innerHTML = thisPlayer + " and " + otherPlayer + " are on a " + streak + " correct answer streak.";
		generateQuestion();
	} else {
		streak = 0;
		document.getElementById("title-text").innerHTML = "Oh no! Your streak is back to 0. Now what would you pick from: "
		document.getElementById("streak-widget").innerHTML = thisPlayer + " and " + otherPlayer + " are on a " + streak + " correct answer streak.";
		generateQuestion();
	}
}
function generateQuestion(){
	/*
	Generates a new quesion for the player, then updates page elements to reflect it. That includes generating two new URLs to possibly send to other player.
	*/
	version = 1;
	
	newseed = Math.ceil(Math.random() * 6)
	//1 = Live in location
	if (newseed == 1) {
		newlistA = 1; // Number of cities list
		newlistB = 1;
		newitemA = Math.floor(Math.random()*lists[newlistA].length);
		newitemB = Math.floor(Math.random()*lists[newlistB].length);
		
	}
	//2 = Holiday to location
	if (newseed == 2) {
		newlistA = 1; // Number of cities list
		newlistB = 1;
		newitemA = Math.floor(Math.random()*lists[newlistA].length);
		newitemB = Math.floor(Math.random()*lists[newlistB].length);
		
	}
	//3 = Have pet
	if (newseed == 3) {
		newlistA = 0; // Number of animals list
		newlistB = 0;
		newitemA = Math.floor(Math.random()*lists[newlistA].length);
		newitemB = Math.floor(Math.random()*lists[newlistB].length);
		
	}
	//4 = Turn into animals
	if (newseed == 4) {
		newlistA = 0; // Number of animals list
		newlistB = 0;
		newitemA = Math.floor(Math.random()*lists[newlistA].length);
		newitemB = Math.floor(Math.random()*lists[newlistB].length);
		
	}
	//5 = Eat food today
	if (newseed == 5) {
		newlistA = 3; // Number of foods list
		newlistB = 3;
		newitemA = Math.floor(Math.random()*lists[newlistA].length);
		newitemB = Math.floor(Math.random()*lists[newlistB].length);
		
	}
	//6 = Lifetime supply of food
	if (newseed == 6) {
		newlistA = 3; // Number of foods list
		newlistB = 3;
		newitemA = Math.floor(Math.random()*lists[newlistA].length);
		newitemB = Math.floor(Math.random()*lists[newlistB].length);
	}
	//7 = Dye your hair
	if (newseed == 7) {
		newlistA = 2; // Number of colours list
		newlistB = 2;
		newitemA = Math.floor(Math.random()*lists[newlistA].length);
		newitemB = Math.floor(Math.random()*lists[newlistB].length);
	}
	//8 = Own a ___ car
	if (newseed == 8) {
		newlistA = 2; // Number of colours list
		newlistB = 2;
		newitemA = Math.floor(Math.random()*lists[newlistA].length);
		newitemB = Math.floor(Math.random()*lists[newlistB].length);
	}
	//9 = Become a ___
	if (newseed == 9) {
		newlistA = 4; // Number of jobs list
		newlistB = 4;
		newitemA = Math.floor(Math.random()*lists[newlistA].length);
		newitemB = Math.floor(Math.random()*lists[newlistB].length);
	}
	//0 = Have to fight a ___
	if (newseed == 0) {
		newlistA = 4; // Number of jobs list
		newlistB = 4;
		newitemA = Math.floor(Math.random()*lists[newlistA].length);
		newitemB = Math.floor(Math.random()*lists[newlistB].length);
	}
	
	
	
	
	
	
	// This is the old version, where it was just two random things from two random lists
	//newlistA = Math.floor(Math.random()*lists.length)
	//newitemA = Math.floor(Math.random()*lists[newlistA].length)
	//newlistB = Math.floor(Math.random()*lists.length)
	//newitemB = Math.floor(Math.random()*lists[newlistB].length)
	
	newstreak = streak;
	newcheck = "X";
	newanswer = "";
	newplayers = thisPlayer + "&" + otherPlayer;
	console.log(newplayers)
	
	// Change the label
	//document.getElementById("thing-one").innerHTML = lists[(newlistA)][newitemA]
	//document.getElementById("thing-two").innerHTML = lists[(newlistB)][newitemB]
	displayOptions(lists[(newlistA)][newitemA], lists[(newlistB)][newitemB], newseed);
	
	// Make sure all numbers are strings of the appropriate lengths
	if (newlistA < 10) {
		newlistA = "0" + newlistA.toString();
	}

	if (newitemA < 10) {
		newitemA = "0" + newitemA.toString();
	}

	if (newlistB < 10) {
		newlistB = "0" + newlistB.toString();
	}

	if (newitemB < 10) {
		newitemB = "0" + newitemB.toString();
	}

	if (newstreak <10) {
		newstreak = "00" + newstreak.toString();
	}
	else if (newstreak < 100) {
		newstreak = "0	" + newstreak.toString();
	}
	
	// Make it give the url to share when clicked
	//leftAnswer = (answer + newlistA + newitemB)%2
	//rightAnswer = (answer + newlistA + newitemB + 1)%2
	leftAnswer = 0;
	rightAnswer = 1;
	if (window.location.hostname == ""){
		leftURL = window.location.protocol + "//" + window.location.hostname + window.location.pathname.slice(1) + "?" + version + newlistA + newitemA + newlistB + newitemB + newstreak + newcheck + leftAnswer + newseed + newplayers;
		rightURL = window.location.protocol + "//" + window.location.hostname + window.location.pathname.slice(1) + "?" + version + newlistA + newitemA + newlistB + newitemB + newstreak + newcheck + rightAnswer + newseed + newplayers;
	} else {
		leftURL = window.location.protocol + "//" + window.location.hostname + "/" + window.location.pathname.slice(1) + "?" + version + newlistA + newitemA + newlistB + newitemB + newstreak + newcheck + leftAnswer + newseed + newplayers;
		rightURL = window.location.protocol + "//" + window.location.hostname + "/" + window.location.pathname.slice(1) + "?" + version + newlistA + newitemA + newlistB + newitemB + newstreak + newcheck + rightAnswer + newseed + newplayers;
	}
	
	
	
}
function clickedLeft() {
	/*
	Responds appropriately if they click on the left box
	*/
	if (guessed) {
		navigator.clipboard.writeText(leftURL);
		document.getElementById("title-text").innerHTML = "Now share the link in your clipboard with " + otherPlayer + " to keep going."
	} else {
		guessed = true;
		madeChoice('L');
	}
}
function clickedRight() {
	/*
	Responds appropriately if they click on the right box
	*/
	if (guessed) {
		navigator.clipboard.writeText(rightURL);
		document.getElementById("title-text").innerHTML = "Now share the link in your clipboard with " + otherPlayer + " to keep going."
	} else {
		guessed = true;
		madeChoice('R');
	}
}

function displayOptions(item1, item2, thisSeed) {
	/*
	@param {string} item1 - The left item
	@param {string} item2 - The right item
	@param {int} thisSeed - The current seed
	Based on the current seed, generates the prompts for the left and right items. Currently straightforward, will be more complex in later versions
	*/
	if (thisSeed ==1) {
		document.getElementById("thing-one").innerHTML = "Live in " + item1;
		document.getElementById("thing-two").innerHTML = "Live in " + item2;
	} else if (thisSeed ==2) {
		document.getElementById("thing-one").innerHTML = "Holiday in " + item1;
		document.getElementById("thing-two").innerHTML = "Holiday in " + item2;
	} else if (thisSeed ==3) {
		document.getElementById("thing-one").innerHTML = "Have a pet " + item1;
		document.getElementById("thing-two").innerHTML = "Have a pet " + item2;
	} else if (thisSeed ==4) {
		document.getElementById("thing-one").innerHTML = "Turn into a " + item1;
		document.getElementById("thing-two").innerHTML = "Turn into a " + item2;
	} else if (thisSeed ==5) {
		document.getElementById("thing-one").innerHTML = "Eat  " + item1 + " tonight";
		document.getElementById("thing-two").innerHTML = "Eat  " + item2 + " tonight";
	} else if (thisSeed ==6) {
		document.getElementById("thing-one").innerHTML = "Have infinite " + item1;
		document.getElementById("thing-two").innerHTML = "Have infinite " + item2;
	} else if (thisSeed ==7) {
		document.getElementById("thing-one").innerHTML = "Dye your hair " + item1;
		document.getElementById("thing-two").innerHTML = "Dye your hair " + item2;
	} else if (thisSeed ==8) {
		document.getElementById("thing-one").innerHTML = "Own a " + item1 + " car";
		document.getElementById("thing-two").innerHTML = "Own a " + item2 + " car";
	} else if (thisSeed ==9) {
		document.getElementById("thing-one").innerHTML = "Become a " + item1;
		document.getElementById("thing-two").innerHTML = "Become a " + item2;
	} else if (thisSeed ==0) {
		document.getElementById("thing-one").innerHTML = "Have to fight a " + item1;
		document.getElementById("thing-two").innerHTML = "Have to fight a  " + item2;
	} else {
		document.getElementById("thing-one").innerHTML = item1;
		document.getElementById("thing-two").innerHTML = item2;
	}
}