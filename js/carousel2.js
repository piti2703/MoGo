const sliderBox = document.querySelector('.feedback__boxes--two')
const leftBtn = document.querySelector('.fa-angle-left--two')
const rightBtn = document.querySelector('.fa-angle-right--two')
const carouselBoxes = document.querySelectorAll('.feedback__box--two')
const carouselWidth = 33.333333
const carouselSpeed = 3000

let index = 0

const handleCarousel = () => {
	index++
	changeImage()
}

let startCarousel = setInterval(handleCarousel, carouselSpeed)

const changeImage = () => {
	if (index > carouselBoxes.length - 1) {
		index = 0
	} else if (index < 0) {
		index = carouselBoxes.length - 1
	}

	sliderBox.style.transform = `translateX(${-index * carouselWidth}%)`
}

const handleRightArrow = () => {
	index++
	resetInterval()
}

const handleLeftArrow = () => {
	index--
    resetInterval()
}

const resetInterval = () => {
    changeImage()
    clearInterval(startCarousel)
	startCarousel = setInterval(handleCarousel, carouselSpeed)
}

rightBtn.addEventListener('click', handleRightArrow)

leftBtn.addEventListener('click', handleLeftArrow)
