
function caption_pc_func(caption_pc) {
    caption_pc_total = ''
        for (i in caption_pc) {
            caption_pc_total += i + '<br>'
            return caption_pc_total
        }
}






let ssylky = document.querySelectorAll('.menu-element')
ssylky.forEach(element => {
    element.addEventListener('click', function(e) {
        e.preventDefault()
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
});
let pc_cards = document.querySelectorAll('.card-pc')
pc_cards.forEach(element => {
    element.addEventListener('click', function(e) {
        e.preventDefault()

        let image_pc = element.querySelector('.pc-image').src
        let name_pc = element.querySelector('.name-pc').innerHTML
        let caption_pc = element.querySelector('.caption').innerHTML
        let price = element.querySelector('.price').innerHTML
        let name_pc_card = document.querySelector('.name-pc-card')
        let caption_card = document.querySelector('.caption-card')
        let image_card = document.querySelector('.image-card')
        name_pc_card.innerHTML = name_pc
        caption_card.innerHTML = `Характеристики:<br> ${caption_pc}<br><br>Стоимость: <p class="price"> ${price} </p>`
        image_card.src = image_pc
        
        let dark = document.querySelector('#dark')
        dark.style.display = 'flex'
        let body = document.querySelector('body')
        body.style.overflow = 'hidden'
    }
    )
})



let exit = document.querySelector('.exit-card')
exit.addEventListener('click', function() {
    anime({
        targets: '.exit-card',
        keyframes: [{background: '#858585', duration: 150},
                    {background: '#ffffff', duration: 0}],
        easing: 'linear'
    }) 
    setTimeout(function() {
        let dark = document.querySelector('#dark')
        dark.style.display = 'none'
        let body = document.querySelector('body')
        body.style.overflow = 'visible'
    }, 200)
})



