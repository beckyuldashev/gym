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


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/


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
    }, 4000)
  }
};

calculateForm.addEventListener('submit', calculateBmi);

/*=============== EMAIL JS ===============*/
