		const menu = document.querySelector('.menu')

		console.log(menu.classList)
		console.log(menu.className)
		menu.classList.add('azul' , 'red')
		menu.classList.remove('red')
		console.log(menu.classList)
		console.log(menu.classList.contains('menu'))

		if(menu.classList.contains('azul')){
			menu.classList.add('contem-azul')
		}

		// const mm = menu.className = 22

		// mm = mm + menu.classList.add('teste')


		const animais = document.querySelector('.animais')
		console.log(animais.attributes)

		const img = document.querySelector('img')
		console.log(img.getAttribute('src'))
		console.log(img.setAttribute('alt','é uma raposa'))
		console.log(img.getAttribute('alt'))

		const has = img.hasAttribute('alt')
		console.log(has)

		const carro = {
			name: 'Volvo',
			km: (aa) => {
				return aa
			}
		}
        
		console.log(carro.km(2))

		const menua = document.querySelectorAll('a')

		menua.forEach((item) => {
			item.classList.add('ativo')
			
		})


		menua.forEach((item) => {
			item.classList.remove('ativo')
			
			
		})

		menua[0].classList.add('ativo')

		const images = document.querySelectorAll('img')
		
		images.forEach((item) => {
			console.log(item.hasAttribute('alt'))
		})

		const modif = document.querySelector('a[href^="http"]');
		modif.setAttribute('href','https/youtube.com')

		console.log(modif)







