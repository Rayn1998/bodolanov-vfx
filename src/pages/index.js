const button = document.querySelector('.home__button')
const works = document.querySelector('.work__title')

const scroll = function() {
    works.scrollIntoView({behavior: 'smooth'})
}

button.addEventListener('click', scroll)
    