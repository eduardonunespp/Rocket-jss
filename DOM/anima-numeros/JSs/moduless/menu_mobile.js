    import outsideClick from "./outside.js";


    export default function initMenuMobile(){

        const menuButton = document.querySelector('[data-menu="button"]')
        const menuList = document.querySelector('[data-menu="list"]')
        const eventos =  ['click', 'tounchstart']


        function openMenu(){
            menuList.classList.add('active')
            menuButton.classList.add('active')
            outsideClick(menuList, eventos, () => {
            menuList.classList.remove('active')
            menuButton.classList.remove('active')
        })
    }


    eventos.forEach((events) => {
        menuButton.addEventListener(events, openMenu)
    })


    }

   

   