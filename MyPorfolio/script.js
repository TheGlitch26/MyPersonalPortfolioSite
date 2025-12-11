function toggleNav(){
  let hamburgerDiv = document.querySelector('.js-hamburger-box');
  if(hamburgerDiv.classList.contains('js-hamburger-box-active')){
    hamburgerDiv.classList.remove('js-hamburger-box-active');
  }
  else {
    hamburgerDiv.classList.add('js-hamburger-box-active');
  }
}