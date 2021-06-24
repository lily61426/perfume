const navBar = document.querySelector('.navBar');
const dropNav = document.querySelector('ul.nav');
// console.log(navBar, dropNav)
navBar.addEventListener('click', function(){
  // console.log(dropNav)
  dropNav.classList.toggle('active');
});