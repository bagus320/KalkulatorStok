const button = document.querySelector("#button");
const result = document.querySelector("#result");

let tabletAwal;
let tabletBerkurang;
let finalBox;
let finalStrip;
let finalTab;

function calc() {
  // mengambil nilai yang di inputkan oleh user
  let jumlahAwal = document.querySelector("#initialValue").value;
  let jumlahBerkurang = document.querySelector("#midValue").value;
  // mengambil nilai dari form selector
  const selectorPertama = document.querySelector("#firstSelector").value;
  const selectorKedua = document.querySelector("#secondSelector").value;

  switch (selectorPertama) {
    case "inBox":
      jumlahAwal *= 100;
      break;
    case "inStrip":
      jumlahAwal *= 10;
      break;
    default:
      jumlahAwal;
  }
  switch (selectorKedua) {
    case "inBox":
      jumlahBerkurang *= 100;
      break;
    case "inStrip":
      jumlahBerkurang *= 10;
      break;
    default:
      jumlahBerkurang;
  }
  let finalBox = Math.floor((jumlahAwal - jumlahBerkurang) / 100);
  let finalStrip = Math.floor((jumlahAwal - jumlahBerkurang) / 10);
  let finalTab = Math.floor(jumlahAwal - jumlahBerkurang);

  result.innerHTML = `Sisa Jumlah Obat Dalam Box: ${finalBox} <br> Sisa Jumlah Obat Dalam Strip: ${finalStrip} <br> Sisa Jumlah Obat Dalam Tablet ${finalTab}`;
}
button.addEventListener("click", calc);
