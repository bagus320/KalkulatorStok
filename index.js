const button = document.querySelector("#button");
const result = document.querySelector("#result");
const boxAmount = document.querySelector("#boxAmount");
const stripAmount = document.querySelector("#stripAmount");
const tabAmount = document.querySelector("#tabAmount");

let initialTab;
let midTab;
let finalBox;
let finalStrip;
let finalTab;

function calc() {
  const initialValue = document.querySelector("#initialValue").value;
  const midValue = document.querySelector("#midValue").value;
  const firstSelector = document.querySelector("#firstSelector").value;
  const secondSelector = document.querySelector("#secondSelector").value;

  switch (firstSelector) {
    case "inBox":
      initialTab = initialValue * 100;
      break;
    case "inStrip":
      initialTab = initialValue * 10;
      break;
    default:
      initialTab = initialValue;
  }
  switch (secondSelector) {
    case "inBox":
      midTab = midValue * 100;
      break;
    case "inStrip":
      midTab = midValue * 10;
      break;
    default:
      midTab = midValue;
  }
  let finalBox = Math.floor((initialTab - midTab) / 100);
  let finalStrip = Math.floor((initialTab - midTab) / 10);
  let finalTab = Math.floor(initialTab - midTab);

  boxAmount.innerHTML = "Sisa Jumlah Obat Dalam Box: " + finalBox;
  stripAmount.innerHTML = "Sisa Jumlah Obat Dalam Strip: " + finalStrip;
  tabAmount.innerHTML = "Sisa Jumlah Obat Dalam Tablet: " + finalTab;
}

button.addEventListener("click", calc);
