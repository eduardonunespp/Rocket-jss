
    // const img = document.querySelector('img')

    // function clicou(event){
    //     console.log(event)
    // }

    // img.addEventListener('click', clicou)

    
    // const img = document.querySelector('img')

    // function callback(event){
    //     console.log(event.currentTarget)
    //     console.log(event.target)
    //     console.log(event.type)
    //     console.log(event.path)
    // }

    // img.addEventListener('click', callback)

    //  const p_link = document.querySelector('a[href^="http"]')

    //  function prevent(event){
    //      event.preventDefault();
    //      console.log(this)
    //      console.log(this.getAttribute('href'))
    //      console.log(event)

    //  }

    //  p_link.addEventListener('click', prevent)

    //  const primeiro_h1 = document.querySelector('h1')

    //  function type_event(event){
    //     console.log(event.type, event)
    //     console.log()
    //  }

    //  primeiro_h1.addEventListener('click', type_event)
    //  primeiro_h1.addEventListener('mouseenter', type_event)
    //  //primeiro_h1.addEventListener('mousemove', type_event)

    //  window.addEventListener('scroll', type_event)
    //  window.addEventListener('resize', type_event)
    //  window.addEventListener('keydown', type_event)

  
    // function handleKeyBoard(event){
    //     if(event.key === 'f'){
    //         document.body.classList.toggle('fullscreen')
    //     }
    //     if(event.key === 'a'){
    //         document.body.classList.toggle('azul')
    //     }
    //     console.log(event.key)
    // }

    // window.addEventListener('keydown', handleKeyBoard)

    const imgs = document.querySelectorAll('img')

    function clicou(event){
        console.log(event.currentTarget.getAttribute('src'))
    }

    imgs.forEach((item) => {
        item.addEventListener('click', clicou)
    })

    //atividades

    const links = document.querySelectorAll('a[href^="#"]');

    console.log(links)

    function addclass(event){
        event.preventDefault();
        links.forEach((item) => {
            item.classList.remove('ativo')
        })
        
        this.classList.add('ativo')
    }

    links.forEach((item) => {
        item.addEventListener('click', addclass)
    })


    // const universal = document.querySelectorAll('body *')

    // function univ(event){
    //     console.log(event.currentTarget)
    // }


    // universal.forEach((item) => {
    //     item.addEventListener('click', univ)

    // })

    // const universal = document.querySelectorAll('body *')

    // function univ(event){
    //     this.remove()
    // }


    // universal.forEach((item) => {
    //     item.addEventListener('click', univ)

    // })

    const text = document.querySelectorAll('p')

    function aumentarTexto(event){
        if(event.key === 't'){
            document.documentElement.classList.toggle('aumentarTexto')
        }
    }

        window.addEventListener('keydown', aumentarTexto)
   
   
    
    

    




