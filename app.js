// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombreAmigo = input.value.trim();

    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    amigos.push(nombreAmigo);
    input.value = ''; 

    mostrarListaAmigos();
}
// Función para mostrar la lista de amigos
function mostrarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
