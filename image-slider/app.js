let slide = document.querySelector('#slide');
let arrowRight = document.querySelector('#arrow-right');
let arrowLeft = document.querySelector('#arrow-left');
let currentImg = 1;

// add event listener
arrowRight.addEventListener('click', nextSlide);
arrowLeft.addEventListener('click', prevSlide);

function changeSlide() {
	slide.setAttribute('src', `./img/img${currentImg}.jpg`)
}

function checkImgNumber() {
	// check if currentImg is not over 4 because image only has 4
	if (currentImg != 4 && currentImg != 0) 
		return true

	return false;
}

function nextSlide() {
	currentImg++;	
	changeSlide();

	if (checkImgNumber() === false) {
		currentImg = 0;
	}
}

function prevSlide() {
	if (checkImgNumber()) {
		currentImg = 5;
	}

	currentImg--;	
	changeSlide();
}



