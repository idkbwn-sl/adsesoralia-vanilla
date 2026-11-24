(()=>{
'use strict';
const menu=document.querySelector('.menu'),nav=document.querySelector('.navlinks');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>menu.setAttribute('aria-expanded',String(nav.classList.toggle('open'))));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
const form=document.querySelector('#contact-form');if(form)form.addEventListener('submit',e=>{e.preventDefault();const b=form.querySelector('button[type=submit]'),s=form.querySelector('.status');b.disabled=true;b.textContent='Simulando envío…';s.textContent='';setTimeout(()=>{form.reset();s.textContent='Mensaje enviado correctamente (simulación). No se ha enviado ningún dato.';b.disabled=false;b.textContent='Enviar mensaje';},600)});
const dialog=document.querySelector('.mock-dialog');document.querySelectorAll('[data-mock]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();dialog.querySelector('.mock-message').textContent=a.dataset.mock+': '+a.textContent.trim()+'. No se ha iniciado ninguna acción externa.';dialog.showModal()}));
const cookie=document.querySelector('.cookie');try{cookie.hidden=!!localStorage.getItem('ads-demo-consent')}catch{cookie.hidden=false}document.querySelector('.cookie-control').addEventListener('click',()=>cookie.hidden=false);cookie.querySelectorAll('[data-consent]').forEach(b=>b.addEventListener('click',()=>{try{localStorage.setItem('ads-demo-consent',b.dataset.consent)}catch{}cookie.hidden=true}));

})();
