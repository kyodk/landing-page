import smoothscroll from 'smoothscroll-polyfill';
import elements from './elements';

smoothscroll.polyfill();

const smoothScroll = (event) => {
  elements.body.classList.remove('is-nav-open');

  const { target } = event;
  if (!target.classList.contains('js-scroll')) {
    return;
  }
  event.preventDefault();
  const targetId = target.hash;
  document.querySelector(targetId).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};

if (window.document.body.id === 'top') {
  elements.gnavList.addEventListener('click', smoothScroll);
  elements.footerList.addEventListener('click', smoothScroll);
}
