
export default function initModal(){

const abrir = document.querySelector('[data-modal="abrir"]')
const fechar = document.querySelector('[data-modal="fechar"]')
const container = document.querySelector('[data-modal="container"')


function toggleModal(event){
    event.preventDefault()
    container.classList.toggle('ativo')
}

// function closeModal(event){
//     event.preventDefault()
//     container.classList.remove('ativo')
// }

function closeoutModal(event){
    event.preventDefault();
    if(event.target === this){
    toggleModal(event)
    }
}

abrir.addEventListener('click', toggleModal)
fechar.addEventListener('click', toggleModal)
container.addEventListener('click', closeoutModal)
}