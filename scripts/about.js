import { clearHtml } from "./home.js";

export function renderAbout() {
  clearHtml();

  const content = document.querySelector(".content"),
    title = document.createElement("div"),
    titleH1 = document.createElement("h1"),
    subtitle = document.createElement("div"),
    subH3 = document.createElement("h3"),
    subH3Two = document.createElement("h3"),
    inputBox = document.createElement("div"),
    inputName = document.createElement("input"),
    inputEmail = document.createElement("input"),
    textArea = document.createElement("textarea"),
    location = document.createElement("div"),
    locationH1 = document.createElement("h1"),
    locationSubtitle = document.createElement("div"),
    locationSubtitlePara = document.createElement("p");
  // Title
  title.classList.add("title");
  titleH1.innerText = "CONTACT US";
  title.appendChild(titleH1);

  subtitle.classList.add("subtitle");
  subH3.innerText = "PHONE NUMBER - 613-822-3434";
  subH3Two.innerText = "EMAIL - Realfish@hotmail.com";
  subtitle.appendChild(subH3);
  subtitle.appendChild(subH3Two);

  // Input box
  inputBox.classList.add("input-box");
  inputName.id = "name";
  inputName.type = "text";
  inputName.placeholder = "Name";

  inputEmail.id = "email";
  inputEmail.type = "email";
  inputEmail.placeholder = "Email";

  textArea.id = "message";
  textArea.placeholder = "Message";
  inputBox.appendChild(inputName);
  inputBox.appendChild(inputEmail);
  inputBox.appendChild(textArea);

  // Location
  location.classList.add("title");
  locationH1.innerText = "LOCATION";
  location.appendChild(locationH1);

  locationSubtitle.classList.add("subtitle", "location-text");
  locationSubtitlePara.innerText = "92-1889 Princess Kailulani Blvd";
  locationSubtitle.appendChild(locationSubtitlePara);

  // Append Children
  content.appendChild(title);
  content.appendChild(subtitle);
  content.appendChild(inputBox);
  content.appendChild(location);
  content.appendChild(locationSubtitle);
}
