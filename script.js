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
        navbar.style.background = 'var(--secondary-color)'
    }else{
        navbar.style.background = 'transparent'
    }
})





const navBarEditing = ()=>{
    const trippleLine = document.querySelector('.tripple-line')
    const nav = document.querySelector('.ul-list')
    const closeBtn = document.querySelector('.close-btn')

    trippleLine.addEventListener('click',()=>{
        console.log('init');
        nav.classList.toggle("nav-active")
        closeBtn.style.display = 'inline'
        trippleLine.style.display = 'none'
    })

    closeBtn.addEventListener('click',()=>{
        nav.classList.toggle("nav-active")
        trippleLine.style.display = 'inline'
        closeBtn.style.display = 'none'
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