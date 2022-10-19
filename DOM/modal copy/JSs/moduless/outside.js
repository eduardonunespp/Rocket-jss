
  export default function outsideClick(element, events, callback){
    const html = document.documentElement
    const outside = 'data-outside'
    if(!element.hasAttribute(outside)){
      events.forEach(((userEvent) => {
        html.addEventListener(userEvent, handOutSideClick)
      }))
      element.setAttribute(outside, '')
    }



    function handOutSideClick(event){
        console.log(element.contains(event.target))
        if(element.contains(event.target) == false){
            callback()
            events.forEach(((userEvent) => {
              html.removeEventListener(userEvent, handOutSideClick)
            }))
         
            element.removeAttribute(outside)
        }

        console.log(element)
    }
}