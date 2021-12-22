import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
const home = document.getElementById("home"),
  menu = document.getElementById("menu"),
  about = document.getElementById("about");

// Event listeners

home.addEventListener("click", renderHome);
menu.addEventListener("click", renderMenu);
