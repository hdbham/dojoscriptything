
let numberOfStudents = document.getElementsByClassName('active-students').length;

let getMinutes = document.getElementbyClassName('whatitwas')[0].innertext.substring(4,7);

let HydrationTimeGoHere = document.getElementById("idOfWhereItGo");

hydrationTimeGoHere.insertAdjacentHTML("beforeend", <img src="https://i.giphy.com/media/sTEgZ41hfiDgWgvtOT/giphy.webp" class="hidden">

					   
let hydrationTime = () => {
	itGoHere.classList.toggle("hidden");
	
	var audio = new Audio();
	audio.src ='https://free-sound-effects.net/mp3/02/free-sound-effects-GONG.mp3';
	audio.play();
}

if(getMinutes == "00"){
	hydrationTime()
}

if(getMinutes == "02"){
	itGoHere.classList.toggle("hidden");
}

if(numberOfStudents >= 14){
	console.log("oh snap too many students")
}