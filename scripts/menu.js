import { clearHtml } from "./home.js";
import { menu } from "../data.js";

export function renderMenu() {
  clearHtml();
  const content = document.querySelector(".content"),
    breakfastMenuCont = document.createElement("div"),
    breakfast = document.createElement("div"),
    breakfastH1 = document.createElement("h1");
  breakfast.classList.add("title");
  breakfastH1.innerText = "BREAKFAST";
  breakfast.appendChild(breakfastH1);

  breakfastMenuCont.classList.add("menu-container");

  for (const [key, value] of Object.entries(menu.breakfast)) {
    const menuItem = document.createElement("div"),
      imgCont = document.createElement("div"),
      img = document.createElement("img"),
      titleCont = document.createElement("div"),
      priceSpan = document.createElement("span"),
      titleSpan = document.createElement("span"),
      subtitleCont = document.createElement("div"),
      h2 = document.createElement("h2"),
      keyCopy = key;

    menuItem.classList.add("menu-item");
    img.src = value.url;
    imgCont.classList.add("img-cont");
    imgCont.appendChild(img);
    priceSpan.innerText = value.price;
    titleSpan.innerText = value.title;
    titleCont.classList.add("menu-item-title");
    titleCont.appendChild(priceSpan);
    titleCont.appendChild(titleSpan);
    h2.innerText = value.subtitle;

    subtitleCont.classList.add("menu-item-subtitle");
    subtitleCont.appendChild(h2);

    for (const [key, value] of Object.entries(
      menu.breakfast[keyCopy].ingredients
    )) {
      let p = document.createElement("p");
      p.innerText = value;
      subtitleCont.appendChild(p);
    }

    menuItem.appendChild(imgCont);
    menuItem.appendChild(titleCont);
    menuItem.appendChild(subtitleCont);

    breakfastMenuCont.appendChild(menuItem);
  }

  content.appendChild(breakfast);
  content.appendChild(breakfastMenuCont);

  const lunch = document.createElement("div"),
    lunchH1 = document.createElement("h1");
  lunch.classList.add("title");
  lunchH1.innerText = "LUNCH";
  lunch.appendChild(lunchH1);
  content.appendChild(lunch);
}
