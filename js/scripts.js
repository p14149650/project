(function(){

  let menuButton = document.getElementById("menu");
  let navMenu = document.getElementById("nav-menu");

  menuButton.addEventListener("click", toggleMenu);

  let toggle = false; // hidden at first
  function toggleMenu(){
    if (toggle) { // true: it's visible
      navMenu.classList.remove("show-menu"), // hide it
      toggle = false
    }
    else { // false: it's hidden
      navMenu.classList.add("show-menu"), // show it
      toggle = true
    }
  }

})();
// loading screen javascript: fetch the "overlay" element

var overlay = document.getElementById("overlay");

//apply the windows listening element to load the page in the background
window.addEventListener('load', function(){
  overlay.style.display = 'none';
})