let txtContent = document.querySelector('.content');
window.onload = () => {
	let navItems = document.querySelectorAll(".nav-item");	
	// add event listener to each nav item
	navItems.forEach((item) => {
		item.addEventListener('click', (e) => { showContent(e, item) });
	});
}

// *NOTE* THIS FUNCTIONS ARE FROM THE DROP-DOWN-MENU PROJECT

// this function checks if element has 'active' class
const checkShowClass = (element) => {
	if (Object.values(element.classList).includes('active'))
		return true; 

	return false;
}

// this function will check if a navigaton is actve 
const checkContentShowed = () => {
	let contentElements = document.querySelectorAll('.nav-item');
	contentElements.forEach((element) => {
		if (checkShowClass(element))
			element.classList.remove('active');	
	})
}

// this function will change the content of the h1
const changeContent = (content) => {
	txtContent.innerHTML = content;
}

const showContent = (e, item) => {
	e.preventDefault();
	checkContentShowed();
	if (!checkShowClass(item)) {
		changeContent(item.dataset.content);
		return item.classList.add('active');
	}

	// add show class
	dropContent.classList.remove('active');
}
