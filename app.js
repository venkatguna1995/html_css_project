

function handleBurger(){
    const nav = document.querySelector('.navbar')
    const nav_links = document.querySelector('.nav-links')
    const burger = document.querySelector('.burger')

    burger.addEventListener('click',()=>{
        nav_links.classList.toggle('nav-active')

        burger.classList.toggle('toggle')
    })

}

handleBurger();