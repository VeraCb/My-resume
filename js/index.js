// ========SERVICES MODAL==========
const modal = document.querySelectorAll('.services-modal'),
      modalButton = document.querySelectorAll('.services-button'),
      modalClose = document.querySelectorAll('.services-modal-close')

let activeModal = (modalClick) => {
  modal[modalClick].classList.add('active-modal') 
}

modalButton.forEach((modalButton, i) => {
  modalButton.addEventListener('click', () => {
    activeModal(i)
  })
})

modalClose.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modal.forEach((modalRemove) => {
      modalRemove.classList.remove('active-modal')
    })
  })
})

// ============ SWIPER TESTIMONIAL ===============
const swiperTestimonial = new Swiper('.testimonial-swiper', {
  loop: true,
  spaceBetween: 32,
  grabCursor: true, 

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets:true,
    clickable: true,
  },
})

/* ============ SHOW SCROLL UP ================== */
const scrollUP = () =>{
   const scrollUP = document.getElementById('scroll-up')
  // when the scroll is higher than 350 wiewport height, add the show-scroll class to the tag with the scrollup class
  this.scrollY >= 350 ? scrollUP.classList.add('show-scroll')
                                          : scrollUP.classList.remove('show-scroll')
};
window.addEventListener('scroll', scrollUP);

