// function enviarDatos() {
//     const nombre = document.getElementById('nombre').value;
//     const apellido = document.getElementById('apellido').value;
//     const fechaNacimiento = document.getElementById('fecha').value;

//     const formData = {
//         name: nombre,
//         username: apellido,
//         date: fechaNacimiento
//     };

//     const jsonData = JSON.stringify(formData);

//     fetch("https://jsonplaceholder.typicode.com/users", {
//         method: "PUT",
//         body: jsonData,
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then((response) => response.json())
//     .then((data) => {
//         console.log("Success:", data);
//         alert("Registro exitoso.");
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//         alert("Hubo un error al registrar.");
//     });
// }

function enviarRegistro(event) {
    event.preventDefault(); // Evita la recarga de la página al enviar el formulario

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fecha').value;

    const formData = {
        name: nombre,
        username: apellido, 
        fecha: fechaNacimiento // Cambio de "fechaNacimiento" a "fecha"
    };

    const jsonData = JSON.stringify(formData);

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: jsonData,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}