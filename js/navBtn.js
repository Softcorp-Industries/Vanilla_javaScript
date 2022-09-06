alert("nav page js working");


const menuBtn = document.querySelector(".navBar-menu");
const mainNav = document.querySelector(".main-nav")

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("openMenu");
    mainNav.classList.add("openNav")
    menuOpen = true;
  } else {
    menuBtn.classList.remove("openMenu");
    mainNav.classList.remove("openNav")
    menuOpen = false;
  }

})
