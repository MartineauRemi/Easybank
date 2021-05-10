/**  
 * Add a click event to the hamburger icon in order to toggle the menu (for smaller devices only)
 **/

var hamburgerElt = document.getElementById("hamburger");
var menuElt = document.getElementById('menu');
var menuBgElt = document.getElementById('small-device-menu-bg');

var menuActive = false;

hamburgerElt.addEventListener('click', () => {
    menuActive = !menuActive;

    hamburgerElt.classList.toggle('hamburger--active');
    menuElt.classList.toggle('menu--active');
    menuBgElt.classList.toggle('small-device-menu-bg--active');
});
