(function() {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  const motion = window.SOFTLAND_MOTION || { enabled: true };
  const sliderEl = document.querySelector('.testimonials-slider');
  if (sliderEl && typeof Swiper !== 'undefined') {
    new Swiper('.testimonials-slider', {
      speed: motion.enabled ? 600 : 0,
      loop: true,
      autoplay: motion.enabled ? {
        delay: 5000,
        disableOnInteraction: false
      } : false,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  }

  window.addEventListener('load', () => {
    if (typeof AOS === 'undefined') return;
    if (!motion.enabled) {
      document.querySelectorAll('[data-aos]').forEach((el) => {
        el.classList.add('aos-animate');
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()
