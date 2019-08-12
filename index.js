document.addEventListener('DOMContentLoaded', ()=> {
    let slider = document.getElementById('slider')
   
    const banners = ['assets/banner-slider.jpg', 'assets/banner-slider2.jpg', 'assets/banner-slider3.jpg']
    const dots = ['assets/circular.svg', 'assets/circular2.svg']

    const dot1 = document.getElementById('dot1'), dot2 = document.getElementById('dot2'), dot3 = document.getElementById('dot3')

    let counter = 0
    setInterval(() => {
        counter++

        if(counter > 2) {
            counter = 0
        }

        slider.children[0].src = banners[counter]
        TweenMax.from(slider.children[0], 1, {opacity: 0})
        
    }, 2000);
    
    setInterval(()=> {
        

        if(counter == 1) {

            dot1.style.backgroundImage = `url(${dots[0]})`
            dot2.style.backgroundImage = `url(${dots[1]})`
            dot3.style.backgroundImage = `url(${dots[0]})`
        }else if(counter == 2) {
            dot1.style.backgroundImage = `url(${dots[0]})`
            dot2.style.backgroundImage = `url(${dots[0]})`
            dot3.style.backgroundImage = `url(${dots[1]})`
        }else {
            dot1.style.backgroundImage = `url(${dots[1]})`
            dot2.style.backgroundImage = `url(${dots[0]})`
            dot3.style.backgroundImage = `url(${dots[0]})`
        }
        

    }, 2000)
    
    const infoConoce = document.getElementById('info-conoce'), infoSistema = document.getElementById('info-sistema'), infoBanner = document.getElementById('info-banner'), logo = document.getElementById('logo')

    TweenMax.to(logo, .5, {y: '200px'})

    TweenMax.from(infoBanner.children[0], 2, {opacity: 0, y: '-50px'})
    TweenMax.from(infoBanner.children[1], 2, {opacity: 0, y: '-50px'})
    TweenMax.from(infoBanner.children[2], 2, {opacity: 0, scale: 0, delay: 1})

    window.addEventListener('scroll', e => {

        if(infoSistema.parentElement.getBoundingClientRect().top < window.pageYOffset) {
            
            infoSistema.children[0].style.opacity = 1
            infoSistema.children[0].style.transform = 'translateX(0)'

            infoSistema.children[1].style.opacity = 1
            infoSistema.children[1].style.transform = 'translateX(0)'

            infoSistema.children[2].style.opacity = 1
            infoSistema.children[2].style.transform = 'scale(1)'

        }else {
            infoSistema.children[0].removeAttribute('style')
            infoSistema.children[1].removeAttribute('style')
            infoSistema.children[2].removeAttribute('style')
        }

        if(infoConoce.parentElement.getBoundingClientRect().top + 400 < window.pageYOffset) {
            infoConoce.children[0].style.opacity = 1
            infoConoce.children[0].style.transform = 'translateX(0)'

            infoConoce.children[1].style.opacity = 1
            infoConoce.children[1].style.transform = 'translateX(0)'

            infoConoce.children[2].style.opacity = 1
            infoConoce.children[2].style.transform = 'scale(1)'
        }else {
            infoConoce.children[0].removeAttribute('style')
            infoConoce.children[1].removeAttribute('style')
            infoConoce.children[2].removeAttribute('style')
        }
        
    })
})