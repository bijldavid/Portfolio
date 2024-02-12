var menuButton = document.querySelector("header .hamburger");
var navMenu = document.querySelector("nav");
var deHeader = document.querySelector("header");
var body = document.body;


document.getElementById('hamburger-toggle')
.addEventListener('click', function(){
  document.body.classList.toggle('nav-open');
});

function toggleMenu() {
  navMenu.classList.toggle("open");
  deHeader.classList.toggle("open");
  body.classList.toggle("scroll-lock"); // scroll-lock
}

menuButton.onclick = toggleMenu;


// SCROLLER

const scrollers = document.querySelectorAll(".scroller");

addAnimation();

function addAnimation() {
  scrollers.forEach((scroller) => {

    const scrollerInner = scroller.querySelector(".scroller ul");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
