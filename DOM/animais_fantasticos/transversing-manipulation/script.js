

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

         const contato = document.querySelector('.contato')
         //const titulo = contato.querySelector('.titulo')
         //const animais = document.querySelector('.animais-lista')
         const mapa = document.querySelector('.mapa')


         //  contato.insertBefore(animais, titulo)
         //  contato.insertBefore(animais, mapa)


         //contato.removeChild(titulo)

         //contato.replaceChild(animais_lista, titulo)



         const novoh1 = document.createElement('h1')

         novoh1.innerText = 'Novo Titulo'
         novoh1.classList.add('titulo')

         console.log(novoh1)

         mapa.appendChild(novoh1)

         const titulo = document.querySelector('h1')

         const clone_titulo = titulo.cloneNode(true);

         contato.appendChild(clone_titulo)
         
         clone_titulo.classList.add('azul')

         //ativides


         const menu = document.querySelector('.menu')
         console.log(menu)

         const cloneMenu = menu.cloneNode(true);


         const copy = document.querySelector('.copy')
         

         copy.appendChild(cloneMenu)

         // const faq = document.querySelector('.faq')
         // const first_dt = faq.querySelector('dt')
         // const proximoDD = first_dt.nextElementSibling


         // console.log(proximoDD)
         // console.log(first_dt)

         const animais = document.querySelector('.animais')
         const faq = document.querySelector('.faq')

         faq.innerHTML = animais.innerHTML;

         // const content_animais = animais.innerHTML;
         // const content_faq = faq.innerHTML;

         // faq.replaceChild(content_animais, content_faq)


         


         






