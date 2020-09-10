
const buttonBar = document.querySelector('#buttonBar');
const menu = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');
const logoImage = document.querySelector('#logoImage');

buttonBar.addEventListener('click', (e) => {
   menu.classList.toggle('active');
   navigation.classList.toggle('active');
   
   if(logoImage.getAttribute('src') === './images/logo-bookmark.svg') {
      logoImage.setAttribute('src', './images/logo-bookmark-white.svg');
   } else {
      logoImage.setAttribute('src', './images/logo-bookmark.svg');
   }

});