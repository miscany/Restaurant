const days = [
  ["Monday", "7am - 7pm"],
  ["Tuesday", "7am - 7pm"],
  ["Wednesday", "7am - 7pm"],
  ["Thursday", "7am - 7pm"],
  ["Friday", "7am - 7pm"],
  ["Saturday", "10am - 8pm"],
  ["Sunday", "11am - 9pm"],
];

export function clearHtml() {
  const content = document.querySelector(".content");
  content.innerHTML = "";
}

export function renderHome() {
  clearHtml();
  //Create title header
  const content = document.querySelector(".content");
  let header = document.createElement("header"),
    headerH1 = document.createElement("h1");
  header.classList.add("main-title");
  headerH1.innerText = "WILD SEA BAR";
  header.appendChild(headerH1);

  //Create hours section
  let hoursTitle = document.createElement("header"),
    hoursH1 = document.createElement("h1");
  hoursTitle.classList.add("title");
  hoursH1.innerText = "HOURS";
  hoursTitle.appendChild(hoursH1);

  let hoursTextCont = document.createElement("div"),
    dayText = document.createElement("div"),
    hourText = document.createElement("div");
  hoursTextCont.classList.add("hours", "subtitle");
  dayText.classList.add("flex", "day-text");
  hourText.classList.add("flex", "hour-text");
  for (let day in days) {
    let pDay = document.createElement("p"),
      pHours = document.createElement("p");
    pDay.innerText = days[day][0];
    pHours.innerText = days[day][1];

    dayText.appendChild(pDay);
    hourText.appendChild(pHours);
  }
  hoursTextCont.appendChild(dayText);
  hoursTextCont.appendChild(hourText);

  // Create fish preview section
  let fishPreview = document.createElement("div"),
    picture = document.createElement("picture"),
    img = document.createElement("img");
  fishPreview.classList.add("fish-preview");
  img.src = "./images/main-sushi.jpg";
  picture.appendChild(img);

  let previewText = document.createElement("div"),
    prePara1 = document.createElement("p"),
    prePara2 = document.createElement("p"),
    prePara3 = document.createElement("p");

  previewText.classList.add("preview-text");
  prePara1.innerText =
    "Wild caught fish of the day, prepared specifically for you!";
  prePara2.innerText = "Pre-made or make your own sushi bowls.";
  prePara3.innerText = "Wide array of fresh fish dishes.";

  [prePara1, prePara2, prePara3].forEach((para) => {
    previewText.appendChild(para);
  });

  fishPreview.appendChild(picture);
  fishPreview.appendChild(previewText);

  // Create location section
  let locationTitle = document.createElement("header"),
    locationH1 = document.createElement("h1"),
    locationSubtitle = document.createElement("div"),
    locationSubtitlePara = document.createElement("p");

  locationTitle.classList.add("title");
  locationH1.innerText = "LOCATION";
  locationTitle.appendChild(locationH1);

  locationSubtitle.classList.add("subtitle", "location-text");
  locationSubtitlePara.innerText = "92-1889 Princess Kailulani Blvd";
  locationSubtitle.appendChild(locationSubtitlePara);

  // Append all children to content section
  content.appendChild(header);
  content.appendChild(hoursTitle);
  content.appendChild(hoursTextCont);
  content.appendChild(fishPreview);
  content.appendChild(locationTitle);
  content.appendChild(locationSubtitle);
}
