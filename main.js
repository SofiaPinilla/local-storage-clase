localStorage.setItem("name", "Sofía");
localStorage.surname = "La Profe";

let firstName = localStorage.getItem("name");
let lastName = localStorage.surname;

console.log(firstName);

// localStorage.removeItem('surname')

// localStorage.clear()

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  console.log(`${key}: ${localStorage.getItem(key)}`);
}

const user = {
  firstName: "Juanda",
  lastName: "Mayorga",
};

localStorage.setItem("user", JSON.stringify(user));

JSON.parse(localStorage.getItem("user"));

localStorage.setItem("number", 9);
console.log(typeof localStorage.getItem("number"));

let personajesAnime = ["Levi", "Mikasa", "Zoro", "Luffy", "Tanjiro", "Nezuko"];

localStorage.setItem("anime", JSON.stringify(personajesAnime));

let data = JSON.parse(localStorage.getItem("anime"));

console.log("Mi array", data);

const nombre = document.getElementById("nombre");
const btn = document.querySelector("#btn");
const nombreParrafo = document.getElementById("nombreGuardado");

function mostrarPorPantalla() {
  nombreParrafo.innerHTML = localStorage.getItem("nombre");
}
function test(e) {
  e.preventDefault();
  localStorage.setItem("nombre", nombre.value);
  mostrarPorPantalla();
}

mostrarPorPantalla();

btn.addEventListener("click", test);
