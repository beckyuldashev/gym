// /*=============== SHOW MENU ===============*/
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');

const openMenu = () => {
  navMenu.classList.add('show-menu');
};

const closeMenu = () => {
  navMenu.classList.remove('show-menu');
};

if(navToggle) {
  navToggle.addEventListener('click', openMenu);
}

if(navClose) {
  navClose.addEventListener('click', closeMenu);
}

// /*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link');

const linkAction = () => {
  navMenu.classList.remove('show-menu');
};

navLinks.forEach(link => link.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header');

  this.scrollY > 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
};

window.addEventListener('scroll', scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionClass = document.querySelector(`.nav__menu a[href*=${sectionId}]`);
  
    if(this.scrollY > sectionTop && this.scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add('active-link');
    } else {
      sectionClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
  const scrollLink = document.getElementById('scroll-up');

  this.scrollY >= 350 ? scrollLink.classList.add('show-scroll-up') : scrollLink.classList.remove('show-scroll-up') 
};

window.addEventListener('scroll', scrollUp);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400
});

sr.reveal('.home__data, .footer__container, .footer__group');
sr.reveal('.home__img', {origin: 'bottom', delay: 700});
sr.reveal('.logos__img, .program__card, .pricing__card', {interval: 100});
sr.reveal('.choose__img, .calculate__content', {origin: 'left'});
sr.reveal('.choose__content, .calculate__img', {origin: 'right'});

/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form');
const calculateCm = document.getElementById('calculate-cm');
const calculateKg = document.getElementById('calculate-kg');
const calculateMsg = document.getElementById('calculate-message');

const calculateBmi = (e) => {
  e.preventDefault();

  if(calculateCm.value === '' || calculateKg.value === '') {
    calculateMsg.classList.add('color-red');
    calculateMsg.classList.remove('color-green');
    calculateMsg.textContent = 'Fill in the Height and Weight 👨‍💻';
  
    setTimeout(() => {
      calculateMsg.textContent = '';
    }, 3000);
  } else {
    
    const cm = calculateCm.value / 100;
    const kg = calculateKg.value;
    const bmi = Math.round(kg / (cm * cm));

    calculateMsg.classList.add('color-green');

    if(bmi < 18.5) {
      calculateMsg.textContent = `Your bmi is ${bmi} and you are skinny 😔`;
    } else if (bmi < 25)  {
      calculateMsg.textContent = `Your bmi is ${bmi} and you are healthy 🥳`;
    } else {
      calculateMsg.textContent = `Your bmi is ${bmi} and you are overweight 😔`;
    }

    calculateForm.reset();

    setTimeout(() => {
      calculateMsg.textContent = '';
    }, 4000);
  }
};

calculateForm.addEventListener('submit', calculateBmi);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactUser = document.getElementById('contact-user');
const contactMsg = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();

  if(contactUser.value === '') {
    contactMsg.classList.remove('color-green');
    contactMsg.classList.add('color-red');
  
    contactMsg.textContent = 'You must enter your email ☝';

    setTimeout(() => {
      contactMsg.textContent = '';
    }, 3000);

  } else {
    emailjs.sendForm('service_gh4vvx9', 'template_cnjf0jk', '#contact-form', '9Wwf805ObArIc0CF-')
      .then(() => {
        contactMsg.classList.remove('color-red');
        contactMsg.classList.add('color-green');
        contactMsg.textContent = `Your subscribed successfully 🥳`;

        contactForm.reset();

        setTimeout(() => {
          contactMsg.textContent = '';
        }, 3000);
      })
      .catch(e => {
        contactMsg.classList.add('color-red');
        contactMsg.textContent = `OOOPS! SOMETHING HAS FAILED... ${e}`;
      });
  }
};

contactForm.addEventListener('submit', sendEmail);