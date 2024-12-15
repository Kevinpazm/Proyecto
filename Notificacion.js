//*--BOTON DE MENU--*
const contenedor = document.querySelector('#contenedor');

window.addEventListener('load', () => {
    contenedor.classList.remove('active');
});

document.querySelector('#boton-menu').addEventListener('click', () => {
    contenedor.classList.toggle('active');
});

//*--BOTON DE NOTIFICACIONES--*
const botonNotificaciones = document.querySelector('.boton-notificaciones');
const recuadroNotificaciones = document.getElementById('notificacion');

//*--MOVIMIENTO POR EL MENU--*
botonNotificaciones.addEventListener('click', () => {
    // Alterna la visibilidad del recuadro de notificaciones
    recuadroNotificaciones.style.display = recuadroNotificaciones.style.display === 'none' ? 'block' : 'none';
});

//
const menuLinks = document.querySelectorAll('.menu-lateral a');

// Agrega el evento de clic a cada enlace
menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // Previene el comportamiento predeterminado del enlace
        event.preventDefault();

        // Remueve la clase 'active' de todos los enlaces
        menuLinks.forEach(link => link.classList.remove('active'));

        // Agrega la clase 'active' al enlace seleccionado
        event.target.classList.add('active');
    });
});


