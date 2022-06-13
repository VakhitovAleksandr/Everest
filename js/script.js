let droDownMEnu = function () {
  let menuBurger = document.querySelector(".burger-menu");
  let menuMobile = document.querySelector(".menu-mobile");

  menuBurger.addEventListener("click", () => {
    menuBurger.classList.toggle("active");
    menuMobile.classList.toggle("active");
  });
};
droDownMEnu();
