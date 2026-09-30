const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

// Smoothly reveal portfolio content as it enters the viewport.
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('.portfolio-card,.service,.process-grid article,.about-copy').forEach(el=>{el.classList.add('reveal');observer.observe(el)});


/* Contact form: opens a prepared email so the static GitHub Pages site can receive enquiries without a backend. */
const inquiryForm=document.querySelector('#inquiry-form');
inquiryForm?.addEventListener('submit',event=>{
  event.preventDefault();
  const data=new FormData(inquiryForm);
  const subject=encodeURIComponent('New project enquiry — '+(data.get('service')||'Video editing'));
  const body=encodeURIComponent(
`Name: ${data.get('name')||''}
Email: ${data.get('email')||''}
Channel / website: ${data.get('channel')||''}
Service: ${data.get('service')||''}
Cadence: ${data.get('cadence')||''}

Project details:
${data.get('project')||''}`
  );
  window.location.href='mailto:workwith.naomieffiong@gmail.com?subject='+subject+'&body='+body;
  const note=document.querySelector('#form-note');
  if(note) note.textContent='Your email app should open with the enquiry ready to send.';
});
