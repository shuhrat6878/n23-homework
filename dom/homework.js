const h1=document.querySelector('h1')
h1.textContent = 'Royxattan otish'
h1.style.color ='green'


const form = document.getElementById("login");

const natija = document.getElementById("natija");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "abbosovich1999@gmail.com" && password === "123456") {
    natija.textContent = "kirish muvafaqiyatli";
    natija.style.color = "green";
  } else {
    natija.textContent = "email yoki parol xato";
    natija.style.color = "red";
  }
});
