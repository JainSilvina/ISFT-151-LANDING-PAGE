// Obtén todos los enlaces de la barra de navegación
const enlacesNavegacion = document.querySelectorAll('.navegacion-principal a');

// Agrega un evento clic a cada enlace
enlacesNavegacion.forEach(enlace => {
  enlace.addEventListener('click', () => {
    // Quita la clase 'activo' de todos los enlaces
    enlacesNavegacion.forEach(e => e.classList.remove('activo'));
    // Agrega la clase 'activo' al enlace seleccionado
    enlace.classList.add('activo');
  });
});
 
  //----------------------------------------------------------------------------------
 




// VER SI FUNCIONA ESTE CODIGO PARA EL FORMULARIO (3/10/23  23:00HS)

// Obtén una referencia al iframe que contiene el formulario de Google
const formularioIframe = document.getElementById('miFormulario');

// Obtén una referencia al botón personalizado
const botonEnviar = document.getElementById('enviarFormulario');

// Agrega un evento clic al botón personalizado
botonEnviar.addEventListener('click', () => {
    // Envía una señal al formulario de Google para enviarlo
    formularioIframe.contentWindow.postMessage('enviar', 'https://docs.google.com/forms/d/e/1FAIpQLScsNSHgGSXuM6oya8069fiMI5o1MvkWrX9Ny4Ntjxn64-TUaA/viewform?embedded=true');
});

// Agrega un escuchador de mensajes para recibir confirmación de envío
window.addEventListener('message', (event) => {
    if (event.origin === 'https://docs.google.com/forms/d/e/1FAIpQLScsNSHgGSXuM6oya8069fiMI5o1MvkWrX9Ny4Ntjxn64-TUaA/viewform?embedded=true' && event.data === 'Formulario enviado') {
        // Aquí puedes realizar acciones adicionales después del envío
        alert('Formulario enviado con éxito');
    }
});




