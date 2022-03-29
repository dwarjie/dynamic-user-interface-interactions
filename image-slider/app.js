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

// this function will return true if imgNumber is the max number of image 
function overImgNumber() {
	// check if currentImg is not over 4 because image only has 4
	if (currentImg === 4) 
		return true

	return false;
}

// this function will return true if imgNumber is last number of image
function lessImgNumber() {
	// check if currentImg is equal 0
	if (currentImg === 1) {
		return true
	} 

	return false;
}

function nextSlide() {
	if (overImgNumber()) {
		currentImg = 0;
	}

	currentImg++;	
	changeSlide();
}

function prevSlide() {
	if (lessImgNumber())	
		currentImg = 5;

	currentImg--;
	changeSlide();
}