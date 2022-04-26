const sliderBox1 = document.querySelector('.feedback__boxes--one')
const leftBtn1 = document.querySelector('.fa-angle-left--one')
const rightBtn1 = document.querySelector('.fa-angle-right--one')
const carouselBoxes1 = document.querySelectorAll('.feedback__box--one')
const carouselWidth1 = 33.333333
const carouselSpeed1 = 3000

let index1 = 0

const handleCarousel1 = () => {
	index1++
	changeImage1()
}

let startCarousel1 = setInterval(handleCarousel1, carouselSpeed1)

const changeImage1 = () => {
	if (index1 > carouselBoxes1.length - 1) {
		index1 = 0
	} else if (index < 0) {
		index1 = carouselBoxes1.length - 1
	}

	sliderBox1.style.transform = `translateX(${-index1 * carouselWidth1}%)`
}

const handleRightArrow1 = () => {
	index1++
	resetInterval1()
}

const handleLeftArrow1 = () => {
	index1--
    resetInterval1()
}

const resetInterval1 = () => {
    changeImage1()
    clearInterval(startCarousel)
	startCarousel1 = setInterval(handleCarousel1, carouselSpeed1)
}

rightBtn1.addEventListener('click', handleRightArrow1)

leftBtn1.addEventListener('click', handleLeftArrow1)
