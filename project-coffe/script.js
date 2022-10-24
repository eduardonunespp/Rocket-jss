

const search = document.querySelector('.fa-magnifying-glass')
const pesquisa = document.querySelector('.pesquisa')
const cart = document.querySelector('.fa-cart-shopping')
const market = document.querySelector('.market')
const login = document.querySelector('.fa-right-to-bracket')
const backModal = document.querySelector('.backModal')
const btnCloseModal = document.querySelector('.fa-xmark')

console.log(search)

function pesquisaPlay(){
    pesquisa.classList.toggle('active')
    if(pesquisa.classList.contains('active')){
        market.classList.remove('active_market')
    }
}

function marketPlay(){
    market.classList.toggle('active_market')
    if(market.classList.contains('active_market')){
        pesquisa.classList.remove('active')
    }
}

function loginPlay(){
    backModal.classList.toggle('active_modal')
}

function closeModal(){
    backModal.classList.remove('active_modal')
}


search.addEventListener('click', pesquisaPlay)
cart.addEventListener('click', marketPlay)
login.addEventListener('click', loginPlay)
btnCloseModal.addEventListener('click', closeModal)