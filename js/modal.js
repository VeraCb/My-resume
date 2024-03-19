// =========== mobile menu ===========
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      // validate is constant exists(show menu)
      if(navToggle) {
        navToggle.addEventListener('click', () => {
          navMenu.classList.add('show-menu')
        })
      };

      // validate is constant exists(hidden menu)
      if(navClose) {
        navClose.addEventListener('click', () => {
          navMenu.classList.remove('show-menu')
        })
      };
   

      // ========== CHANGE BACKGROUND HEADER =========
      const bgHeader = () =>{
        const header = document.getElementById('header')
        // when the scroll is greater than 50 viewport, add scroll-header class to the header tag

        this.scrollY >= 50 ? header.classList.add('bg-header')
                           : header.classList.remove('bg-header')
      }
      window.addEventListener('scroll', bgHeader)

      // ============ DARK LIGHT THEME =============


// exercise change name
/*
let changeName = 'Vera Bogos'
function updateName() {
  let el = document.getElementById('myName')
  el.textContent = changeName;
}
    updateName(); */