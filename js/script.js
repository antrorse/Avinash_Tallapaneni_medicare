// Mobile menu

const menus = document.querySelectorAll("#header__menu-mobile-icon");
const menu_toggle = document.querySelector(".header__menu-mobile");

menus.forEach((menu) => {
  menu.addEventListener("click", () => {
    if (menu_toggle.classList.contains("active")) {
      menu_toggle.classList.remove("active");
    } else {
      menu_toggle.classList.add("active");
    }
  });
});
