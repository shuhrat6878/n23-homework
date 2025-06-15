// TASK 1 royxatLAR DOM BILAN
const boxEl = document.querySelector("#box");
const Keyingi = document.querySelector("#keyingi");

let praduct = [];
let elonlar = 5;

const URL = "https://dummyjson.com/products";

async function getProducts() {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    royxat = data.products;
    console.log(royxat);
    
    Praducts(royxat.slice(0, elonlar));
  } catch (err) {
    console.log("eror", err);
  }
}
function Praducts(arr) {
  boxEl.innerHTML = "";
  arr.forEach((royxat) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="${royxat.thumbnail}" alt = "${royxat.title}">
    <h3>${royxat.title}</h3>
    <p>${royxat.rating} </p>
    <p><b>${royxat.price} -$</b></p>
    <p><b>${royxat.price * 12700}- sum</b></p>`;
    boxEl.appendChild(card);
  });
}
Keyingi.addEventListener("click", () => {
  Praducts(royxat);
  Keyingi.style.display = "none";
});

getProducts();
