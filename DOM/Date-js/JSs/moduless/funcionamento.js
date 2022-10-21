export default function initFuncionamento(){

    const funcionamento = document.querySelector('[data-semana]')
    const horario = document.querySelector('[data-horario]')
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number)
    const horarioSemana = horario.dataset.horario.split(',').map(Number)

    console.log(diasSemana, horarioSemana)


    const dataAgora = new Date()
    const diaAgora = dataAgora.getDay();
    const horarioAgora = dataAgora.getHours();

    console.log(horarioAgora)

    const semanaAberto = diasSemana.indexOf(diaAgora) !== - 1;
    const horarioAberto = (horarioAgora > horarioSemana[0] && horarioAgora < horarioSemana[1])

    if(semanaAberto && horarioAberto){
        funcionamento.classList.add('aberto')
    }

}

// const agora = new Date()

// const futuro = new Date('Nov 26 2022')

// console.log(futuro)

// console.log(agora.getMonth())


// console.log(agora.getTime())
// console.log(futuro.getTime())

// function time(tempo){
//     return tempo / (24 * 60 * 60 * 1000)
// }

// const diasAgora = time(agora.getTime())
// const diasFuturo = time(futuro.getTime())

// console.log(diasFuturo - diasAgora)


