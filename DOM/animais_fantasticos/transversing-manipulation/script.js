
   const h1 = document.querySelector('h1')

   console.log(h1.innerText)

   h1.innerText = 'Você gosta de paffocan'

   const animais_lista = document.querySelector('.animais-lista')
    
   console.log(animais_lista.innerHTML)

   console.log(animais_lista.parentElement.parentElement.parentElement)

   console.log(animais_lista.previousElementSibling)

   console.log(animais_lista.nextElementSibling)

   console.log(animais_lista.children[animais_lista.children.length - 1])
    
    console.log(animais_lista.querySelector('li:last-child'))
    
    console.log(animais_lista.childNodes)

    console.log(animais_lista.previousSibling)




