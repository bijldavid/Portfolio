var menuButton = document.querySelector("header button");
var navMenu = document.querySelector("nav");
var deHeader = document.querySelector("header");
var body = document.body;

menuButton.onclick = toggleMenu;

function toggleMenu() {
  navMenu.classList.toggle("open");
  deHeader.classList.toggle("open");
  body.classList.toggle("scroll-lock"); // Add or remove the scroll-lock class
}

const scrollers = document.querySelectorAll(".main2 section:nth-of-type(1)");

// Call the addAnimation function to start the animation
addAnimation();

function addAnimation() {
  scrollers.forEach((scroller) => {

    const scrollerInner = scroller.querySelector(".main2 section:nth-of-type(1) ul");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
