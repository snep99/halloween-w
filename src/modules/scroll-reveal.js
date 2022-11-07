import ScrollReveal from 'scrollreveal'

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 300,
  //reset: true - animation repeat
})

sr.reveal('.home__data, .footer__content, .footer__logo, .footer__description, .footer__copy')
sr.reveal('.home__tree-1', {origin: 'left', delay: 800})
sr.reveal('.home__tree-2', {origin: 'right', delay: 800})
sr.reveal('.home__img',  {delay: 800})
sr.reveal('.category__card, .items__card',  {interval: 100})
sr.reveal('.about__img, .about__data, .footer__tree-2', {origin: 'left'})
sr.reveal('.party__images, .party__data, .footer__tree-1', {origin: 'right'})
