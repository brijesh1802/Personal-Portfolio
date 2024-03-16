function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var typed = new Typed('.section__text__p2', {
  strings: ["Iam a FrontEnd Developer.", "Iam a Programmer.","Iam a Tech Enthusiast."],
  typeSpeed: 70,
  smartbackspace:true,
  loop:true
});
