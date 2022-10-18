
export default function initDropdownMenu() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');
    dropdownMenus.forEach(menu => {
      ['touchstart', 'click'].forEach(userEvent => {
        menu.addEventListener(userEvent, handleClick);
      });
    });
  
    function handleClick(event) {
      event.preventDefault();
      this.classList.toggle('active');
      outsideClick(this, () => {
            this.classList.remove('active')
      });
     
    };
  }

  function outsideClick(element, callback){
      const html = document.documentElement
      const outside = 'data-outside'

      if(!element.hasAttribute(outside)){
      html.addEventListener('click', handOutSideClick)
        element.setAttribute(outside, '')
      }



      function handOutSideClick(event){
          console.log(element.contains(event.target))
          if(element.contains(event.target) == false){
              callback()
              html.removeEventListener('click', handOutSideClick)
              element.removeAttribute(outside)
          }

          console.log(element)
      }
  }







