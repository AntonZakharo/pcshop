ssylky = document.querySelectorAll('.menu-element')
ssylky.forEach(element => {
    element.addEventListener('click', function(e) {
        e.preventDefault()
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
});
pc_cards = document.querySelectorAll('.card-pc')
pc_cards.forEach(element => {
    element.addEventListener('click', function(e) {
        e.preventDefault()
        dark = document.querySelector('#dark')
        dark.style.display = 'block'
    }
    )
})