const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Scroll function
const navbarScroll = document.querySelector(".navbar");

document.addEventListener("scroll", function (e) {
  var scroll_position = window.scrollY;
  if (scroll_position > 100) {
    navbarScroll.style.backgroundColor = "#000000";
  } else {
    navbarScroll.style.backgroundColor = " transparent";
  }
});

// Sign up toggle
const SignUp = document.querySelector(".sign-up");

document.querySelector(".btn-sign").onclick = (e) => {
  SignUp.classList.toggle("active");
  e.preventDefault();
};

const closeSign = document.querySelector(".close");

document.addEventListener("click", function (e) {
  if (closeSign.contains(e.target)) {
    SignUp.classList.remove("active");
    e.preventDefault();
  }
});

// Show password
function myFunction() {
  var Show = document.getElementById("myInput");
  if (Show.type === "password") {
    Show.type = "text";
  } else {
    Show.type = "password";
  }
}
