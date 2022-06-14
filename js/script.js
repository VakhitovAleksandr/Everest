let showHideMenu = function () {
  const menuDrop = document.querySelector(".menu_top");
  const burgerBtn = document.querySelector(".burger");

  burgerBtn.addEventListener("click", () => {
    menuDrop.classList.toggle("open");
    burgerBtn.classList.toggle("open");
  });
};

showHideMenu();
