        /*const animais = document.getElementById('animais')
        console.log(animais)

        //const grid = document.getElementsByClassName('grid-section');

        //console.log(grid)

        let ul = document.getElementsByTagName('ul');
        console.log(ul)


        const primeirali = document.querySelector('li')

        console.log(primeirali)


        const primeiraul = document.querySelector('ul');

        console.log(primeiraul)

        const linksinternos = document.querySelectorAll('[href^="#"]');
        console.log(linksinternos)

        const gridall = document.querySelectorAll('.grid-section')
        console.log(gridall)

        const animaisImg = document.querySelectorAll('.animais img')
        console.log(animaisImg[0])


        const grid = document.getElementsByClassName('grid-section');
        const grid2 = document.querySelectorAll('.grid-section');

        primeirali.classList.add('grid-section');

        console.log(grid[0])
        console.log(grid2[0])
            
        grid2.forEach((item)  => {
            console.log(item)
        })

        const arrayGrid = Array.from(grid);

        arrayGrid.forEach((item) => {
            console.log(item)
        })
*/
        //Atividades

        // Retorne no console todas as imagens do site

        {
        const imgs = document.querySelectorAll('img')
        console.log(imgs)
        }

        // Retorne no console apenas as imagens que começaram com a palavra imagem

        {
        const imgs = document.querySelectorAll('img[src^="img/imagem"]');
        console.log(imgs)


        

        }


        {
        const links = document.querySelectorAll('a[href^="#"]')
        console.log(links)
        }

        {
            const p_h2 = document.querySelector('.animais-descricao h2')
            console.log(p_h2)
        }

        {
            const parag = document.querySelectorAll('p')
            console.log(parag[parag.length - 1])
        }

        // {
        //     const parag = document.querySelectorAll('p');
            
        //     parag.forEach((p) => {
        //         p.classList.add('estilo')
        //         console.log(p)
        //     })
        
        
        // }

        // const htmlcollection = document.getElementsByClassName('grid-section')
        // console.log(htmlcollection)

        // const arr = Array.from(htmlcollection)

        // console.log(arr)

        // {
        //     // const images = document.querySelectorAll('img')

        //     // images.forEach((item, index, array) => {
        //     //     console.log(item, index, array)
        //     // })

        //     const images = document.getElementsByClassName('titulo')


        //     const titulo = Array.from(images)
        //     titulo.forEach((item, index, array) => {
        //             console.log(item, index, array)
        //      })
        // }


        //atividades

        // mostre no console cada paragrafo do site 

        // {
        //     const parag = document.querySelectorAll('p');
            
        //     parag.forEach((item) => {
        //         return console.log(item.innerText)
        //     })
        // }

        

        





