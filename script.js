var typed = new Typed('.auto-input',{
    strings: ['Bharath AB',"a Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    loop: true
})


var navbar = document.querySelector('.NavBar')
var logo = document.querySelector('.logo')


addEventListener('scroll',()=>{
    if(window.scrollY > 300){
        navbar.style.background = '#485460'
        logo.style.opacity = '1'
    }else{
        navbar.style.background = 'transparent'
        logo.style.opacity = '0'
    }
})





const navSlide = ()=>{
    const trippleLine = document.querySelector('.tripple-line')
    const nav = document.querySelector('.ul-list')

    trippleLine.addEventListener('click',()=>{
        console.log('init');
        nav.classList.toggle("nav-active")
    })
}

navSlide()