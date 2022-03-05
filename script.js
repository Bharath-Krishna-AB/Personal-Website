var typed = new Typed('.auto-input',{
    strings: ['Bharath AB',"a Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    loop: true
})


var navbar = document.querySelector('.NavBar')
var logo = document.querySelector('.logo')
var homebtn = document.getElementById('home-btn')
var aboutbtn = document.getElementById('about-btn')
var gallerybtn = document.getElementById('gallery-btn')
var contactbtn = document.getElementById('contact-btn')

homebtn.style.color = 'var(--primary-color)'


addEventListener('scroll',()=>{
    if(window.scrollY > 300){
        navbar.style.background = 'var(--secondary-color)'
    }else{
        navbar.style.background = 'transparent'
    }

    if(window.scrollY >=0){
        homebtn.style.color = 'var(--primary-color)'
        aboutbtn.style.color = ''
    }
    if (window.scrollY >=500){
        console.log('entered');
        homebtn.style.color = ''
        aboutbtn.style.color = 'var(--primary-color)'
    }
})





const navBarEditing = ()=>{
    const trippleLine = document.querySelector('.tripple-line')
    const nav = document.querySelector('.ul-list')
    const closeBtn = document.querySelector('.close-btn')

    trippleLine.addEventListener('click',()=>{
        console.log('init');
        trippleLine.classList.remove('buttonTransition')
        nav.classList.toggle("nav-active")
        closeBtn.style.display = 'inline'
        trippleLine.style.display = 'none'
        closeBtn.classList.add('buttonTransition')
    })

    closeBtn.addEventListener('click',()=>{
        closeBtn.classList.remove('buttonTransition')
        nav.classList.toggle("nav-active")
        trippleLine.style.display = 'inline'
        closeBtn.style.display = 'none'
        trippleLine.classList.add('buttonTransition')
    })
}

navBarEditing()




function navItemSlideBack (){
    const nav = document.querySelector('.ul-list')
    const closeBtn = document.querySelector('.close-btn')
    const trippleLine = document.querySelector('.tripple-line')

    nav.classList.toggle("nav-active")
    trippleLine.style.display = 'inline'
    closeBtn.style.display = 'none'
}