/* Lenis smooth scrolling */
(function(){
  function init(){
    if(!window.Lenis) return;
    const lenis = new Lenis({ duration:1.2, easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)), smoothWheel:true });
    function raf(t){ lenis.raf(t); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    if(window.gsap && window.ScrollTrigger){
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(t=>lenis.raf(t*1000));
      gsap.ticker.lagSmoothing(0);
    }
    window.lenis = lenis;
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click',e=>{
        const id = a.getAttribute('href');
        if(id.length<2) return;
        const t = document.querySelector(id);
        if(t){ e.preventDefault(); lenis.scrollTo(t,{offset:-80}); }
      });
    });
  }
  if(document.readyState!=='loading') init(); else document.addEventListener('DOMContentLoaded', init);
})();
