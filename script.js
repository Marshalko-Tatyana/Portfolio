const menu = document.querySelector('.menu__body')
const menuBtn = document.querySelector('.menu__icon')

const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})


	menu.querySelectorAll('.menu__link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		})
	})
}


const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}) 

const nextButton = document.querySelector(".next")

const backButton = document.querySelector(".back")

const images = document.querySelectorAll(".image")

let imageIndex = 0;

nextButton.onclick = function(){
    images[imageIndex].classList.remove("show");

    if(imageIndex >= images.length - 1){
        imageIndex = 0;
    }else{
        imageIndex = imageIndex + 1;
    }
    images[imageIndex].classList.add("show");
}

backButton.onclick = function(){
    images[imageIndex].classList.remove("show");

    if(imageIndex <= 0){
        imageIndex = 8;
    }else{
        imageIndex = imageIndex - 1;
    }
    images[imageIndex].classList.add("show");
} 

