const counterItems = document.querySelectorAll('.stats__box-num')
const counterBox = document.querySelector('.stats')

const options = {
	// rootMargin: '-250px'
}


const startCounter = entry => {

	console.log(entry[0].isIntersecting);

	if (entry[0].isIntersecting) {
		counterItems.forEach(counter => {
			const updateCounter = () => {
				const finalNumber = counter.getAttribute('data-number')
				const value = parseInt(counter.textContent)

				const speed = finalNumber / 10
				
                

				if(value < finalNumber) {
					counter.textContent = `${Math.floor(value + speed)}`
					setTimeout(updateCounter, 75)
				} else {
					counter.textContent = finalNumber
				}
			}

			updateCounter()

		})
	}
}


const observer = new IntersectionObserver(startCounter, options)
observer.observe(counterBox)