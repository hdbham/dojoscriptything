
let numberOfStudents = document.getElementsByClassName('active-students').length;

let getMinutes = document.getElementsByClassName('text-center')[0].textContent.substring(3,5);

let hydrationTimeGoHere = document.getElementsByClassName('curve-shape-t')[0];
let hydrationTimeImg = `<div class="hidden" id="hydrationTimeDiv"> <img src="https://i.giphy.com/media/sTEgZ41hfiDgWgvtOT/giphy.webp"></img> </div>`
hydrationTimeGoHere.insertAdjacentHTML("beforeend", hydrationTimeImg)

let hydrationTime = () => {
	hydrationTimeDiv.classList.remove("hidden");
	
	var audio = new Audio();
	audio.src ='https://free-sound-effects.net/mp3/02/free-sound-effects-GONG.mp3';
	audio.play();
}

let loop = true;

while(loop){
							   
	if(getMinutes > "22"){
		hydrationTime()
	}
	
	if(getMinutes == "02"){
		hydrationTimeDiv.classList.toggle("hidden");
	}

}

if(numberOfStudents >= 14){
	console.log("oh snap too many students")
}