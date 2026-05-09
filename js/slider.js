/* Swiper slider initializations */
document.addEventListener('DOMContentLoaded',()=>{
  if(!window.Swiper) return;
  document.querySelectorAll('.testimonial-swiper').forEach(el=>{
    new Swiper(el,{
      loop:true, autoplay:{delay:5000,disableOnInteraction:false},
      pagination:{el:el.querySelector('.swiper-pagination'),clickable:true},
      effect:'fade', fadeEffect:{crossFade:true},
      speed:800
    });
  });
  document.querySelectorAll('.cert-swiper').forEach(el=>{
    new Swiper(el,{
      loop:true, slidesPerView:1, spaceBetween:20, autoplay:{delay:3500},
      breakpoints:{640:{slidesPerView:2},960:{slidesPerView:3}},
      pagination:{el:el.querySelector('.swiper-pagination'),clickable:true}
    });
  });
});
