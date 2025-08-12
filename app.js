// El principal objetivo de este desafío es 
// fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
// Array para registrar los amigos ingresados

let amigos = [];
let nombresNormalizados = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  let nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor ingresa un nombre válido.");
    return;
  }

  let nombreNormalizado = normalizarNombre(nombre);

  if (nombresNormalizados.includes(nombreNormalizado)) {
    alert("Este nombre ya fue agregado o es muy similar.");
    return;
  }

  amigos.push(nombre);
  nombresNormalizados.push(nombreNormalizado);
  actualizarLista();
  input.value = "";
}

function normalizarNombre(nombre) {
  let nombreMin = nombre.toLowerCase().trim();

  if (nombreMin.endsWith("es") && nombreMin.length > 3) {
    nombreMin = nombreMin.slice(0, -2);
  } else if (nombreMin.endsWith("s") && nombreMin.length > 2) {
    nombreMin = nombreMin.slice(0, -1);
  }

  return nombreMin;
}

function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo, index) => {
    const item = document.createElement("li");
    item.textContent = `${index + 1}. ${amigo}`;
    lista.appendChild(item);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const ganador = amigos[indice];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpiar resultado anterior

  const item = document.createElement("li");
  item.textContent = `Amig@ secret@ es: ${ganador}`;
  resultado.appendChild(item);

  // Limpiar todo para nueva carga
  amigos = [];
  nombresNormalizados = [];
  document.getElementById("amigo").value = "";
  document.getElementById("listaAmigos").innerHTML = "";


}
