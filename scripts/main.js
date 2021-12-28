import { renderHome } from "./home.js";
import { renderMenu, actualRender } from "./menu.js";
import { renderAbout } from "./about.js";
window.addEventListener("DOMContentLoaded", () => {
  renderHome();
});
const home = document.getElementById("home"),
  menu = document.getElementById("menu"),
  about = document.getElementById("about");

// Event listeners

home.addEventListener("click", renderHome);
menu.addEventListener("click", renderMenu);
about.addEventListener("click", renderAbout);
