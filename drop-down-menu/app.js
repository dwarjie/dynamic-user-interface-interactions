// reference of the elements
let btnMenu = document.querySelector('#btnMenu');
let btnCategory = document.querySelector('#btnCategory');
let menuContent = document.querySelector('.menu-content');
let categoryContent = document.querySelector('.category-content');

// add event listener
btnMenu.addEventListener('click', () => {showContent(menuContent)});
btnCategory.addEventListener('click', () => {showContent(categoryContent)});

// this function checks if element has 'show' class
const checkShowClass = (element) => {
	if (Object.values(element.classList).includes('show'))
		return true; 

	return false;
}

// this function will check if a drop down is currently showing
const checkContentShowed = () => {
	let contentElements = document.querySelectorAll('.drop-down-content');
	contentElements.forEach((element) => {
		if (checkShowClass(element))
			element.classList.remove('show');	
	})
}

const showContent = (dropContent) => {
	if (!checkShowClass(dropContent)) {
		checkContentShowed();
		return dropContent.classList.add('show');
	}

	// add show class
	dropContent.classList.remove('show');
}