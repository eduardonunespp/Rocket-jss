
function initTabNav(){
        const tabMenu = document.querySelectorAll('.js-tabmenu li')
        const tabContent = document.querySelectorAll('.js-tabcontent section')
        tabContent[0].classList.add('ativo')


    if(tabMenu.length && tabContent.length){
        function activeclass(index){

            tabContent.forEach((item) => {
                item.classList.remove('ativo')
            })
            
            tabContent[index].classList.add('ativo')
        }


        tabMenu.forEach((item, index) => {
            item.addEventListener('click', () => {
                activeclass(index)
            })
        })
    }



}

initTabNav()

const accordionList = document.querySelectorAll('.js-accordion dt')

function activeAccordion(){
    this.classList.add('ativo')
    this.nextElementSibling.classList.toggle('ativo')
}

accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion)
})