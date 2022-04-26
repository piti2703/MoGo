const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.header__top-btn')
const navItem = document.querySelector('.nav-mobile__list-item')
const navList = document.querySelector('.nav-mobile')


const accordionBtns = document.querySelectorAll('.work__accordion-box-btn')

const showMenu = () => {
    navMobile.classList.toggle('nav-mobile--active')
    navBtn.classList.toggle('header__top-btn--active')
}

const closeMenu = () => {
    navMobile.classList.remove('nav-mobile--active')
    navBtn.classList.remove('header__top-btn--active')
}


function openAccordionItems() {
    const img = this.querySelector('.img')
	if(this.nextElementSibling.classList.contains('work__accordion-box-info--active')) {
		this.nextElementSibling.classList.remove('work__accordion-box-info--active')
        img.classList.remove('img-ext')
        img.classList.add('img-roll')

	} else {

		closeAccordionItem()
        changeArrow()
		this.nextElementSibling.classList.toggle('work__accordion-box-info--active')
        img.classList.add('img-ext')
	}
}

const closeAccordionItem = () => {
	const allActiveItems = document.querySelectorAll('.work__accordion-box-info')
	allActiveItems.forEach(item => item.classList.remove('work__accordion-box-info--active'))
}

const changeArrow = () => {
    const allImg = document.querySelectorAll('.img')
    allImg.forEach(img => img.classList.add('img-roll'))
    allImg.forEach(img => img.classList.remove('img-ext'))
}

navBtn.addEventListener('click', showMenu)
navList.addEventListener('click', closeMenu)


accordionBtns.forEach((btn) => {
    btn.addEventListener('click', openAccordionItems)
})
