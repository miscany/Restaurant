import { clearHtml } from "./home.js";
import { menu } from "../data.js";

export function actualRender(menu) {
  const menuItems = [];
  console.log('something1');
  for (const [key, value] of Object.entries(menu)) {
    console.log('something else2');
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

    for (const [key, value] of Object.entries(menu[keyCopy].ingredients)) {
      let p = document.createElement("p");
      p.innerText = value;
      subtitleCont.appendChild(p);
    }

    menuItem.appendChild(imgCont);
    menuItem.appendChild(titleCont);
    menuItem.appendChild(subtitleCont);
    menuItems.push(menuItem);
  }

  return menuItems;
}

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

  const breakfastMenuItems = actualRender(menu.breakfast);
  breakfastMenuItems.forEach((item) => {
    breakfastMenuCont.appendChild(item);
  });

  content.appendChild(breakfast);
  content.appendChild(breakfastMenuCont);

  const lunchMenuCont = document.createElement("div"),
    lunch = document.createElement("div"),
    lunchH1 = document.createElement("h1");
  lunchMenuCont.classList.add("menu-container");
  lunch.classList.add("title");
  lunchH1.innerText = "LUNCH";
  lunch.appendChild(lunchH1);
  const lunchMenuItems = actualRender(menu.lunch);
  lunchMenuItems.forEach((item) => {
    lunchMenuCont.appendChild(item);
  });
 
  content.appendChild(lunch);
  content.appendChild(lunchMenuCont);
}
