let arrayAmigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Escribe un nombre válido");
    }

    arrayAmigos.push(nombre);
    input.value = "";

    listaAmigo();
}

function listaAmigo() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    arrayAmigos.forEach(function(amigo) {
        let listadoAmigo = document.createElement("li");
        listadoAmigo.textContent = amigo;
        lista.appendChild(listadoAmigo);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    let i = Math.floor(Math.random() * arrayAmigos.length);
    let amigoSecreto = arrayAmigos[i];

    if (arrayAmigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    resultado.textContent = `El amigo secreto es: ${amigoSecreto}`;
}