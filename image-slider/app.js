let slide = document.querySelector('#slide');
let imageFrame = document.querySelector('.image-frame');
let arrowRight = document.querySelector('#arrow-right');
let arrowLeft = document.querySelector('#arrow-left');
let navCircles = document.querySelectorAll('#circle-nav')
let currentImg = 1;
let circleActiveClass = 'circle-active';

window.onload = addCircleActive();

// add event listener
arrowRight.addEventListener('click', nextSlide);
arrowLeft.addEventListener('click', prevSlide);
navCircles.forEach((circle) => {
	circle.addEventListener('click', () => {
		goToImg(circle);
	});
});

// this function will remove all the active class before adding to a specific circle
function removeCircleActive() {
	navCircles.forEach((circle) => {
		circle.classList.remove(circleActiveClass);
	})
}

// this function will add a class to the circle navigation base on the image shown
function addCircleActive() {
	navCircles[currentImg - 1].classList.add(circleActiveClass)
}

function changeSlide() {
	setTimeout(fadeIn, 1200)
	setTimeout(changeImg,1000)
	fadeOut();
}

function changeImg() {
	slide.setAttribute('src', `./img/img${currentImg}.jpg`)
}
function fadeIn() {
	let opacity = 0;
	let intervalId = setInterval(function() {
		if (opacity < 1) {
			opacity = opacity + 0.2;
			imageFrame.style.opacity = opacity;
		} else {
			clearInterval(intervalId);
		}
	}, 200);
}

function fadeOut() {
	let opacity = 1;
	let intervalId = setInterval(function() {
		if (opacity > 0) {
			opacity = opacity - 0.2;
			imageFrame.style.opacity = opacity;
		} else {
			clearInterval(intervalId);
		}
	}, 200);
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

// this function is for each circle, where if they are clicked
// it will get the dataset of the element and choose the image
function goToImg(circle) {
	currentImg = parseInt(circle.dataset.img);
	changeSlide();
	removeCircleActive();
	addCircleActive();
}

function nextSlide() {
	if (overImgNumber()) {
		currentImg = 0;
	}

	currentImg++;	
	changeSlide();
	removeCircleActive();
	addCircleActive();
}

function prevSlide() {
	if (lessImgNumber())	
		currentImg = 5;

	currentImg--;
	changeSlide();
	removeCircleActive();
	addCircleActive();
}