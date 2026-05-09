/* ========== Main JS — navbar, menu, FAQ, filters, partials ========== */

// Inject navbar + footer (keeps HTML files DRY)
const NAV_HTML = `
<nav class="navbar" id="navbar">
  <div class="container nav-wrap">
    <a href="index.html" class="logo">
      <span class="logo-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2C8 7 5 11 5 15a7 7 0 0 0 14 0c0-4-3-8-7-13z"/><path d="M12 22V10"/></svg>
      </span>
      GM <span>Enviro</span>
    </a>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html" data-link="index">Home</a></li>
      <li><a href="about.html" data-link="about">About</a></li>
      <li><a href="services.html" data-link="services">Services</a></li>
      <li><a href="projects.html" data-link="projects">Projects</a></li>
      <li><a href="certifications.html" data-link="certifications">Certifications</a></li>
      <li><a href="contact.html" data-link="contact" class="nav-cta">Get a Quote</a></li>
    </ul>
    <button class="menu-toggle" id="menuToggle" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
</nav>
<div class="scroll-progress" id="scrollProgress"></div>
<div class="cursor" id="cursor"></div>
<div class="cursor-follower" id="cursorFollower"></div>
`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-about">
        <a href="index.html" class="logo">
          <span class="logo-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2C8 7 5 11 5 15a7 7 0 0 0 14 0c0-4-3-8-7-13z"/><path d="M12 22V10"/></svg></span>
          GM <span>Enviro</span>
        </a>
        <p>Engineering a cleaner, greener future through innovative environmental consultancy, sustainable solutions and decades of industrial expertise.</p>
        <div class="social">
          <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.34 18.34V10.5H5.67v7.84zM7 9.28a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.06v-4.3c0-2.3-1.23-3.37-2.87-3.37-1.32 0-1.92.73-2.25 1.24V10.5h-2.66v7.84h2.66v-4.38c0-1.18.84-1.74 1.62-1.74.77 0 1.45.55 1.45 1.77v4.35z"/></svg></a>
          <a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8a8.5 8.5 0 0 1-2.36.65 4.13 4.13 0 0 0 1.81-2.27 8.21 8.21 0 0 1-2.6 1A4.1 4.1 0 0 0 11.4 9a11.65 11.65 0 0 1-8.45-4.29 4.1 4.1 0 0 0 1.27 5.49A4.1 4.1 0 0 1 2.4 9.7v.05a4.1 4.1 0 0 0 3.3 4 4.1 4.1 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.4 11.6 11.6 0 0 0 8.29 20c7.55 0 11.68-6.25 11.68-11.68v-.53A8.3 8.3 0 0 0 22 5.8z"/></svg></a>
          <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
          <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.87v-7H8v-2.87h2.5V9.8c0-2.5 1.5-3.87 3.77-3.87 1.1 0 2.23.2 2.23.2v2.43h-1.26c-1.24 0-1.62.77-1.62 1.56V12h2.76L16 14.87h-2.38v7A10 10 0 0 0 22 12z"/></svg></a>
        </div>
      </div>
      <div>
        <h5>Company</h5>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="certifications.html">Certifications</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <h5>Services</h5>
        <ul>
          <li><a href="services.html">EIA Studies</a></li>
          <li><a href="services.html">Env. Clearance</a></li>
          <li><a href="services.html">ETP / STP Design</a></li>
          <li><a href="services.html">HAZOP Studies</a></li>
          <li><a href="services.html">Sustainability</a></li>
        </ul>
      </div>
      <div>
        <h5>Contact</h5>
        <ul>
          <li><a href="mailto:info@gmenviro.com">info@gmenviro.com</a></li>
          <li><a href="tel:+919876543210">+91 98765 43210</a></li>
          <li>Pune, Maharashtra, India</li>
          <li>Mon – Sat • 9:00 – 18:00</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} GM Enviro Engineers. All rights reserved.</span>
      <span>Engineered with care for a sustainable planet 🌱</span>
    </div>
  </div>
</footer>
<a href="https://wa.me/919876543210" class="whatsapp-fab" aria-label="WhatsApp" target="_blank" rel="noopener">
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.15-1.7-.85-2-.94-.27-.1-.47-.15-.66.15-.2.3-.76.94-.94 1.13-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.18-.24-.57-.49-.5-.66-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.27-.2-.57-.34zM12 2a10 10 0 0 0-8.6 15.07L2 22l5.07-1.34A10 10 0 1 0 12 2z"/></svg>
</a>
`;

document.addEventListener('DOMContentLoaded', () => {
  // Inject partials
  const navMount = document.getElementById('nav-mount');
  const footerMount = document.getElementById('footer-mount');
  if(navMount) navMount.innerHTML = NAV_HTML;
  if(footerMount) footerMount.innerHTML = FOOTER_HTML;

  // Mark active nav link
  const page = document.body.dataset.page;
  if(page){
    document.querySelectorAll('[data-link]').forEach(a => {
      if(a.dataset.link === page) a.classList.add('active');
    });
  }

  // Loader
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader && loader.classList.add('hidden'), 600);
  });

  // Mobile menu
  const toggle = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');
  toggle?.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });
  links?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    toggle?.classList.remove('open');
    links.classList.remove('open');
  }));

  // Navbar scroll
  const nav = document.getElementById('navbar');
  const progress = document.getElementById('scrollProgress');
  const onScroll = () => {
    if(window.scrollY > 30) nav?.classList.add('scrolled'); else nav?.classList.remove('scrolled');
    if(progress){
      const h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (window.scrollY / h * 100) + '%';
    }
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // Cursor (desktop)
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  if(cursor && window.matchMedia('(min-width:1024px)').matches){
    let mx=0,my=0,fx=0,fy=0;
    document.addEventListener('mousemove', e=>{ mx=e.clientX; my=e.clientY; cursor.style.transform=`translate(${mx-5}px,${my-5}px)`;});
    const loop=()=>{ fx+=(mx-fx)*.15; fy+=(my-fy)*.15; follower.style.transform=`translate(${fx-20}px,${fy-20}px)`; requestAnimationFrame(loop);};
    loop();
    document.querySelectorAll('a,button,.service-card,.project-card').forEach(el=>{
      el.addEventListener('mouseenter',()=>{follower.style.width='60px';follower.style.height='60px';});
      el.addEventListener('mouseleave',()=>{follower.style.width='40px';follower.style.height='40px';});
    });
  }

  // FAQ
  document.querySelectorAll('.faq-item').forEach(item=>{
    item.querySelector('.faq-q')?.addEventListener('click',()=>item.classList.toggle('open'));
  });

  // Project filters
  const filters = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');
  filters.forEach(b=>b.addEventListener('click',()=>{
    filters.forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    const cat = b.dataset.filter;
    cards.forEach(c=>{
      const show = cat==='all' || c.dataset.cat===cat;
      c.style.display = show ? '' : 'none';
    });
  }));

  // Service card mouse glow
  document.querySelectorAll('.service-card').forEach(card=>{
    card.addEventListener('mousemove',e=>{
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', ((e.clientX-r.left)/r.width*100)+'%');
      card.style.setProperty('--my', ((e.clientY-r.top)/r.height*100)+'%');
    });
  });

  // Contact form (demo)
  const form = document.getElementById('contactForm');
  form?.addEventListener('submit', e=>{
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    if(btn){ btn.textContent='Sent ✓'; btn.style.background='#0B3D2E'; btn.style.color='#fff'; }
    form.reset();
    setTimeout(()=>{ if(btn){ btn.textContent='Send Message'; btn.style.background=''; btn.style.color=''; }},3000);
  });

  // Generate floating particles
  document.querySelectorAll('.particles').forEach(el=>{
    for(let i=0;i<22;i++){
      const p=document.createElement('span');
      p.className='p';
      p.style.left=Math.random()*100+'%';
      p.style.animationDelay=(Math.random()*12)+'s';
      p.style.animationDuration=(8+Math.random()*10)+'s';
      p.style.opacity=(.3+Math.random()*.5);
      el.appendChild(p);
    }
  });
});
