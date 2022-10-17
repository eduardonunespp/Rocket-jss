export default function initTooltip(){
    
}

const tooltips = document.querySelectorAll('[data-tooltip]')

function onMouseOver(event){
    console.log(event)
    const toolTipBox = criarTooltipBox(this)
    toolTipBox.style.top = event.pageY + 'px'
    toolTipBox.style.left = event.pageX + 'px'

    // function onMouseLeave(){
    //     toolTipBox.remove()
    // }


    onMouseLeave.toolTipBox = toolTipBox;
    this.addEventListener('mouseleave', onMouseLeave)
}

const onMouseLeave = {
    toolTipBox: "",
    handleEvent() {
        this.toolTipBox.remove()
    }
}



tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver)
})

function criarTooltipBox(element){
    const toolTipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    toolTipBox.classList.add('tooltip')
    toolTipBox.innerText = text;
    document.body.appendChild(toolTipBox)
    console.log(toolTipBox)
    return toolTipBox;
}