// ///Status\\\\\

var bleft = false;
var bright = false;
var bup = false;
var bdown = false;
var bflicht = false;
var balicht = false;

var imgAbblendlicht = 1;
var imgFernlicht = 1;
// /////////////Funktionen Licht\\\\\\\\\\\\\\\
// ///Funktion Abblendlicht\\\\\
var switchAbblendlicht = function() {
	if (imgAbblendlicht === 1) {
		document.getElementById("imgAbblendlicht").setAttribute("src",
				"images/abblendlicht_aktiv.png");
		imgAbblendlicht--;
		balicht = true;
	} else {
		document.getElementById("imgAbblendlicht").setAttribute("src",
				"images/abblendlicht_inaktiv.png");
		imgAbblendlicht++;
		balicht = false;
	}

	moveAjax();
};

// ///Funktion Fernlicht\\\\\
var switchFernlicht = function() {
	if (imgFernlicht === 1) {
		document.getElementById("imgFernlicht").setAttribute("src",
				"images/fernlicht_aktiv.png");
		imgFernlicht--;
		bflicht = true;
	} else {
		document.getElementById("imgFernlicht").setAttribute("src",
				"images/fernlicht_inaktiv.png");
		imgFernlicht++;
		bflicht = false;
	}
	moveAjax();
};

// /////////////Funktionen Pfeiltasten\\\\\\\\\\\\\\\
// ///Funktion Pfeiloben\\\\\
var switchPfeiloben = function(eingabe) {
	if (eingabe === "ein") {
		document.getElementById("imgPfeiloben").setAttribute("src",
				"images/oben_aktiv.png");
		bup = true;
	} else {
		document.getElementById("imgPfeiloben").setAttribute("src",
				"images/oben_inaktiv.png");
		bup = false;
	}
	moveAjax();
};

// ///Funktion Pfeillinks\\\\\
var switchPfeillinks = function(eingabe) {
	if (eingabe === "ein") {
		document.getElementById("imgPfeillinks").setAttribute("src",
				"images/links_aktiv.png");
		bleft = true;
	} else {
		document.getElementById("imgPfeillinks").setAttribute("src",
				"images/links_inaktiv.png");
		bleft = false;
	}
	moveAjax();
};

// ///Funktion Pfeilunten\\\\\
var switchPfeilunten = function(eingabe) {
	if (eingabe === "ein") {
		document.getElementById("imgPfeilunten").setAttribute("src",
				"images/unten_aktiv.png");
		bdown = true;
	} else {
		document.getElementById("imgPfeilunten").setAttribute("src",
				"images/unten_inaktiv.png");
		bdown = false;
	}
	moveAjax();
};

// ///Funktion Pfeilrechts\\\\\
var switchPfeilrechts = function(eingabe) {
	if (eingabe === "ein") {
		document.getElementById("imgPfeilrechts").setAttribute("src",
				"images/rechts_aktiv.png");
		bright = true;
	} else {
		document.getElementById("imgPfeilrechts").setAttribute("src",
				"images/rechts_inaktiv.png");
		bright = false;
	}
	moveAjax();
};

// /////////////Event Lisener Mausklick\\\\\\\\\\\\\\\

// ///Event Licht\\\\\
document.getElementById("buttonAbblendlicht").addEventListener("click",
		switchAbblendlicht, false);

document.getElementById("buttonFernlicht").addEventListener("click",
		switchFernlicht, false);

// ///Event Oben\\\\\
document.getElementById("buttonPfeiloben").addEventListener("mousedown",
		function() {
			switchPfeiloben("ein");
		}, false);
document.getElementById("buttonPfeiloben").addEventListener("mouseup",
		function() {
			switchPfeiloben("aus");
		}, false);

// ///Event Links\\\\\
document.getElementById("buttonPfeillinks").addEventListener("mousedown",
		function() {
			switchPfeillinks("ein");
		}, false);
document.getElementById("buttonPfeillinks").addEventListener("mouseup",
		function() {
			switchPfeillinks("aus");
		}, false);

// ///Event Unten\\\\\
document.getElementById("buttonPfeilunten").addEventListener("mousedown",
		function() {
			switchPfeilunten("ein");
		}, false);
document.getElementById("buttonPfeilunten").addEventListener("mouseup",
		function() {
			switchPfeilunten("aus");
		}, false);

// ///Event Rechts\\\\\
document.getElementById("buttonPfeilrechts").addEventListener("mousedown",
		function() {
			switchPfeilrechts("ein");
		}, false);
document.getElementById("buttonPfeilrechts").addEventListener("mouseup",
		function() {
			switchPfeilrechts("aus");
		}, false);

// /////////////Event Lisener Tasten\\\\\\\\\\\\\\\
// ///Event Taste drücken\\\\\
window.addEventListener('keydown', function(e) {
	switch (e.keyCode) {
	case 70: // f
		switchFernlicht();
		break;
	case 65: // a
		switchAbblendlicht();
		break;
	// ////Pfeile\\\\\
	case 37: // <-
		switchPfeillinks("ein");
		break;
	case 38: // oben
		switchPfeiloben("ein");
		break;
	case 39: // ->
		switchPfeilrechts("ein");
		break;
	case 40: // unten
		switchPfeilunten("ein");
		break;
	}
}, false);

// ///Event Taste loslassen\\\\\
window.addEventListener('keyup', function(e) {
	switch (e.keyCode) {
	// ////Pfeile\\\\\
	case 37: // <-
		switchPfeillinks("aus");
		break;
	case 38: // oben
		switchPfeiloben("aus");
		break;
	case 39: // ->
		switchPfeilrechts("aus");
		break;
	case 40: // unten
		switchPfeilunten("aus");
		break;
	}
}, false);

var moveAjax = function() {
	var request = new XMLHttpRequest();
	request.open("GET", "sentData?left=" + bleft + "&right=" + bright + "&up="
			+ bup + "&down=" + bdown + "&flicht=" + bflicht + "&alicht="
			+ balicht);
	request.send();
};
