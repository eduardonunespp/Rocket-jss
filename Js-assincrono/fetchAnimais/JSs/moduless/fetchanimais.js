// export default function initFetchAnimals(){

// }
// async function fetchAimals(url){
//     const animalsResponse = await fetch(url)
//     const responsejson = await animalsResponse.json()
//     const numerosGrid = document.querySelector('.numeros-grid')
//     console.log(responsejson)
//     responsejson.forEach(result => {
//         const divAnimal = createAnimal(result)
//         numerosGrid.appendChild(divAnimal)
//     })
    
// }


//     function createAnimal(result){
//         const div = document.createElement('div')
//         div.classList.add('num-animal')
//         div.innerHTML = `<h2>${result.specie}</h2> <span data-numero>${result.total}<span>`
        
//         console.log(div)
//     }

// fetchAimals('./animaisapi.json')

import initAnimaNumeros from './numeros_animations.js';

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector('.numeros-grid');
      console.log(animaisJSON)
      animaisJSON.forEach(animal => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      initAnimaNumeros();
    } catch(erro) {
      console.log(erro);
    }
  }
  
  
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }
  
  fetchAnimais('./animaisapi.json');
}