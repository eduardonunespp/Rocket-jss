export default function initFetchBitcoin(){

}

fetch('https://blockchain.info/ticker').then( result => result.json().then( Bitcoin => {
    console.log(Bitcoin.BRL.sell)
    const bit = document.querySelector('.btc')
    const sell = (10000 / Bitcoin.BRL.sell).toFixed(2)
    bit.innerText = sell;
})).catch(erro => {
    console.log(erro)
})