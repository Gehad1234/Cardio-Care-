// Sticky Navbar
  let header = document.querySelector('header');
  let menu = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');


  window.addEventListener('scroll', () => {
      header.classList.toggle('shadow', window.scrollY > 0);
  });

  menu.onclick = () => {
      navbar.classList.toggle('active');
  }
  window.onscroll = () => {
      navbar.classList.remove('active');
  }

var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      var body = this.nextElementSibling;
      if (body.style.display === "block") {
          body.style.display = "none";
      } else {
          body.style.display = "block";
      }
  });
}