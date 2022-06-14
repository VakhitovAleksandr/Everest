document.addEventListener("DOMContentLoaded", () => {
  const menuDrop = document.querySelector(".menu_top");
  const burgerBtn = document.querySelector(".burger");

  let showHideMenu = function () {
    burgerBtn.addEventListener("click", () => {
      menuDrop.classList.toggle("open");
      burgerBtn.classList.toggle("open");
    });
  };
  showHideMenu();
});
