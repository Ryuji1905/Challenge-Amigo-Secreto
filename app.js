
let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value.trim();
    //El .trim hace que se eliminen los espacios que podria poner el 
    // usuario al escribir un nombre, para mantenerlo solo el nombre y evitar posibles errores
    if (nombreAmigo === '') {
        alert("Por favor, inserte un nombre válido");
        return;
    }//Condiciones separdas, innecesario un else ya que no estan relacionadas
    if (amigos.includes(nombreAmigo)) {
        alert("Ese amigo ya está en la lista");
        limpiarEntrada();
        return;
    }

    amigos.push(nombreAmigo);
    limpiarEntrada();
    actualizarLista();
}


function limpiarEntrada() {
    document.getElementById("amigo").value = '';
}

function actualizarLista() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = ""; // Limpia la lista antes de agregar

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");   // Crea un <li>
        li.textContent = amigos[i];         // Le pone el nombre
        listaHTML.appendChild(li);               // Lo agrega al <ul>
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista");
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    
    let resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = `<li>${amigoSorteado}</li>`;
}
/*
function actualizarLista() {
    let amigoHTML = document.getElementById("listaAmigos");
    //.join agrega todos lo valores del array en string, seguidas de lo que pongamos en el parentesis
    amigoHTML.innerHTML = amigos.join(", ");
}
*/
 
/*
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista");
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    alert("El amigo sorteado es: " + amigoSorteado);
}*/

