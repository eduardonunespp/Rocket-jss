	const animais = document.querySelector('.animais-lista')

	console.log(animais.clientHeight)

	const height = animais.scrollHeight;
	console.log(height)

	const animaistop = animais.offsetTop;
	console.log(animaistop)

	const offleft = document.querySelector('h2')

	console.log(offleft.offsetLeft)
	console.log(offleft.offsetRight)

	const primeiroh2 = offleft.getBoundingClientRect();
	console.log(primeiroh2)

	console.log(window.innerWidth, window.innerHeight, window.outerWidth, window.outerHeight, window.pageYOffset)

	if(primeiroh2.top < 0){
		console.log('passou do h2')
	}

	if(window.innerWidth < 600){
		console.log('tela menor que 600px')
	}

	const small = window.matchMedia('(max-width: 600px)')

		if(small.matches){
			console.log('Tela menor que 600px')
		}
		else{
			console.log('tela maior que 600px')
		}

		//atividades

		const p_img = document.querySelector('img')
		const dimensoes = p_img.offsetTop;

		console.log(dimensoes)

		function somaImagens(){

		const images = document.querySelectorAll('img')


		let contador = 0

		images.forEach((item) => {
			const soma = item.offsetWidth
			contador += soma;
			
		})

		console.log(contador)
		}

		window.onload = () => {
			somaImagens();
		}

		const links = document.querySelectorAll('a');

		

		links.forEach((link) => {
			console.log(link)
			if(link.offsetWidth >= 48 && link.offsetHeight >= 48){
				console.log(link + ' possui acessibilidade')
			}
			else{
				console.log(link + ' Não possui acessibilidade')
			}
		})

		{

			const menu = document.querySelector('.menu')

			const small = window.matchMedia('(max-width: 720px)')

			if(small.matches){
				menu.classList.add('menu-mobile')
			}

			
		}








