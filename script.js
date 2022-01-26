var typed = new Typed('.auto-input',{
    strings: ['Bharath AB',"a Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    loop: true
})


var navbar = document.querySelector('.NavBar')


addEventListener('scroll',()=>{
    if(window.scrollY > 300){
        navbar.style.background = '#485460'
    }else{
        navbar.style.background = 'transparent'
    }
})