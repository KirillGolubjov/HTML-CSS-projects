const slides = document.querySelectorAll('.slide')
slides.forEach((elem) => {
    elem.onclick = () => {
        slides.querySelector('active')?.classList.remove('active')
    }
})