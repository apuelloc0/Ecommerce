const x = document.querySelector('#close')
const menu = document.querySelector('.logo-menu')
const nav = document.querySelector('#navbar')

if (menu) {
    menu.addEventListener('click', () => {
        nav.classList.toggle('active')
    })
    
}


if (x) {
    x.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}