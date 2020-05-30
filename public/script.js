let date = new Date();
let months = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];
let days = 31;
let gaps = 8 - parseInt(date.getDate() % 7);

// document.getElementById("year").innerHTML = date.getFullYear();
document.getElementById("month").innerHTML = months[date.getMonth()];

for (let j = 1; j <= gaps; j++) {
  document.getElementById("days").innerHTML =
    document.getElementById("days").innerHTML +
    `<div class="text-xs font-hairline"></div>`;
}

for (let i = 1; i <= days; i++) {
  document.getElementById("days").innerHTML =
    document.getElementById("days").innerHTML +
    `<div class="text-xs font-hairline" id="date">${i}</div>`;
}

document.getElementById("image").src =
  "https://i.picsum.photos/id/" +
  parseInt(Math.random() * 1000) +
  "/300/200.jpg";

document.getElementById("date").style.color = "blue";
