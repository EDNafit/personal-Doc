// تبدیل اعداد انگلیسی به فارسی برای تمام محتوای قابل نمایش
const faDigits = '۰۱۲۳۴۵۶۷۸۹';
const enDigits = /[0-9]/g;
function toPersianDigits(value){
  return String(value).replace(enDigits, d => faDigits[d]);
}

document.querySelectorAll('body *').forEach(el => {
  if (el.children.length === 0 && el.textContent.trim()) {
    el.textContent = toPersianDigits(el.textContent);
  }
});

const year = document.getElementById('year');
if(year) year.textContent = toPersianDigits(new Date().getFullYear());

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
revealItems.forEach(item => observer.observe(item));

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if(toggle && nav){
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.nav a')];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      navLinks.forEach(link => link.style.color = '');
      const active = navLinks.find(link => link.getAttribute('href') === '#' + entry.target.id);
      if(active) active.style.color = 'var(--accent)';
    }
  });
},{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(section => sectionObserver.observe(section));
