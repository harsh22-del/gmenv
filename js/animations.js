/* ========== Animations: reveal on scroll, counters, magnetic, hero entrance ========== */

document.addEventListener('DOMContentLoaded', () => {
  // Reveal on scroll
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  },{threshold:.15});
  document.querySelectorAll('.reveal,.reveal-stagger').forEach(el=>io.observe(el));

  // Counters
  const counters = document.querySelectorAll('[data-count]');
  const cio = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(!en.isIntersecting) return;
      const el = en.target;
      const target = parseFloat(el.dataset.count);
      const dur = 1800;
      const start = performance.now();
      const tick = (t)=>{
        const p = Math.min(1,(t-start)/dur);
        const e = 1 - Math.pow(1-p,3);
        const v = target*e;
        el.textContent = (target%1===0?Math.round(v):v.toFixed(1)).toLocaleString();
        if(p<1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      cio.unobserve(el);
    });
  },{threshold:.4});
  counters.forEach(el=>cio.observe(el));

  // Magnetic buttons
  document.querySelectorAll('.magnetic').forEach(el=>{
    el.addEventListener('mousemove', e=>{
      const r = el.getBoundingClientRect();
      const x = e.clientX-r.left-r.width/2;
      const y = e.clientY-r.top-r.height/2;
      el.style.transform=`translate(${x*.25}px,${y*.25}px)`;
    });
    el.addEventListener('mouseleave',()=>el.style.transform='');
  });

  // Anime.js hero entrance (if loaded)
  if(window.anime){
    anime({
      targets:'.hero-eyebrow',
      translateY:[20,0], opacity:[0,1], duration:900, easing:'easeOutExpo'
    });
    anime({
      targets:'.hero h1 .word',
      translateY:[60,0], opacity:[0,1], duration:1100,
      delay: anime.stagger(80,{start:200}),
      easing:'easeOutExpo'
    });
    anime({
      targets:'.hero-sub, .hero-actions, .hero-stats',
      translateY:[30,0], opacity:[0,1], duration:1000,
      delay:anime.stagger(150,{start:600}),
      easing:'easeOutExpo'
    });
    anime({
      targets:'.blob',
      translateX:()=>anime.random(-30,30),
      translateY:()=>anime.random(-30,30),
      scale:[1,1.1],
      duration:8000,
      direction:'alternate',
      loop:true,
      easing:'easeInOutSine'
    });
  }

  // Split heading words
  document.querySelectorAll('[data-split]').forEach(el=>{
    const html = el.textContent.split(' ').map(w=>`<span class="word" style="display:inline-block;overflow:hidden"><span style="display:inline-block">${w}</span></span>`).join(' ');
    el.innerHTML = html;
  });

  // GSAP ScrollTrigger parallax (if loaded)
  if(window.gsap && window.ScrollTrigger){
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('[data-parallax]').forEach(el=>{
      gsap.to(el,{
        yPercent: parseFloat(el.dataset.parallax)||-15,
        ease:'none',
        scrollTrigger:{ trigger:el, start:'top bottom', end:'bottom top', scrub:true }
      });
    });
    gsap.utils.toArray('.section-head').forEach(el=>{
      gsap.from(el,{
        opacity:0, y:60, duration:1, ease:'power3.out',
        scrollTrigger:{trigger:el, start:'top 85%'}
      });
    });
  }
});
