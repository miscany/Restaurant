import { clearHtml } from "./home.js";
import { menu } from "./data.js";

export function renderMenu() {
  clearHtml();
  const content = document.querySelector("content");
  console.log(menu);
  console.log("x");
}
