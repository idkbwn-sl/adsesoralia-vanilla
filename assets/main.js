(()=>{
'use strict';
const menu=document.querySelector('.menu'),nav=document.querySelector('.navlinks');
const mobile=window.matchMedia('(max-width: 899px)');
const backdrop=document.createElement('div');backdrop.className='menu-backdrop';backdrop.setAttribute('aria-hidden','true');document.body.append(backdrop);
const background=[document.querySelector('main'),document.querySelector('footer'),document.querySelector('.whatsapp'),document.querySelector('.cookie')].filter(Boolean);
let savedScroll=0;
function setMenu(open,restoreFocus=false){
  open=Boolean(open&&mobile.matches);
  const wasOpen=nav.classList.contains('open');
  if(open&&!wasOpen){savedScroll=window.scrollY;document.body.style.top=`-${savedScroll}px`;document.body.style.setProperty("--locked-header-height",`${document.querySelector("header").offsetHeight}px`);}
  nav.classList.toggle('open',open);document.documentElement.classList.toggle('menu-open',open);
  menu.setAttribute('aria-expanded',String(open));
  background.forEach(el=>el.inert=open);
  nav.inert=mobile.matches&&!open;
  if(!open&&wasOpen){document.body.style.top='';document.body.style.removeProperty('--locked-header-height');window.scrollTo({top:savedScroll,behavior:'instant'});if(restoreFocus)menu.focus();}
}
menu.addEventListener('click',()=>setMenu(!nav.classList.contains('open'),true));
backdrop.addEventListener('click',()=>setMenu(false,true));
nav.addEventListener('click',e=>{if(e.target.closest('a'))setMenu(false)});
mobile.addEventListener('change',()=>setMenu(false));
document.addEventListener('keydown',e=>{if(!nav.classList.contains('open'))return;if(e.key==='Escape'){setMenu(false,true);return;}if(e.key==='Tab'){const items=[menu,...nav.querySelectorAll('a[href]')];const first=items[0],last=items.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
setMenu(false);
const footer=document.querySelector('footer'),whatsapp=document.querySelector('.whatsapp');
if(footer&&whatsapp){const update=()=>{const hide=footer.getBoundingClientRect().top<window.innerHeight;whatsapp.classList.toggle('footer-hidden',hide);};if('IntersectionObserver' in window)new IntersectionObserver(update).observe(footer);window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);update();}
const form=document.querySelector('#contact-form');if(form)form.addEventListener('submit',e=>{e.preventDefault();const b=form.querySelector('button[type=submit]'),s=form.querySelector('.status');b.disabled=true;b.textContent='Simulando envío…';s.textContent='';setTimeout(()=>{form.reset();s.textContent='Mensaje enviado correctamente (simulación). No se ha enviado ningún dato.';b.disabled=false;b.textContent='Enviar mensaje';},600)});
const dialog=document.querySelector('.mock-dialog');document.querySelectorAll('[data-mock]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();dialog.querySelector('.mock-message').textContent=a.dataset.mock+': '+a.textContent.trim()+'. No se ha iniciado ninguna acción externa.';dialog.showModal()}));
const cookie=document.querySelector('.cookie');try{cookie.hidden=!!localStorage.getItem('ads-demo-consent')}catch{cookie.hidden=false}document.querySelector('.cookie-control').addEventListener('click',()=>cookie.hidden=false);cookie.querySelectorAll('[data-consent]').forEach(b=>b.addEventListener('click',()=>{try{localStorage.setItem('ads-demo-consent',b.dataset.consent)}catch{}cookie.hidden=true}));

})();
