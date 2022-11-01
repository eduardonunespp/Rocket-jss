
async function puxarDados() {
    // try{
    // const responseDados = await fetch('./dadoss.json')
    // const jsonDados = await responseDados.json()
    // console.log(jsonDados.aula)
    // document.body.innerText = jsonDados.aula
    // }catch(erro){
    //     console.log(erro)
    // }

    const promisseDados = fetch('./dados.json')

    const responseDados = await promisseDados
    const jsonDados = await responseDados.json()
    
    console.log(jsonDados)
    
}

async function puxarDados2(){
    const dados = await fetch('./clientes.json')
    const jsondados = await dados.json();
    console.log(jsondados.nome)
}

// async function semPromisse(){
//     await new Promise(resove => {
//         setTimeout(() => {
//             console.log('Depois de 1 segundo')
//             resove()
//         }, 2000)
//     })
// }

    // puxarDados()
    // semPromisse()

    const promisse = new Promise((resolve, reject) => {
        value = true;
        if(value){
            resolve('Resolvido')
        }else{
            reject(Error('Aconteceu um erro'))
        }
    })


    promisse.then(result => {
        console.log(result)
     }).catch(result => {
         console.log(result)
     })

    async function promessa(){
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Passou-se 2 segundo')
            
            }, 2000)
        })
    }

    promessa()

    async function puxarDados100(){
        const dados = await fetch("./dados.json")
        const dadosJson = await dados.json()

        console.log(dadosJson.nome)

    }



    puxarDados100()
    

    



    