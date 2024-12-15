// Seleccionar el enlace de "Descargas"
const descg = document.querySelector('.menu-lateral a[href="descargas.html"]');

// Agregar un evento de clic al enlace
descg.addEventListener('click', (event) => {
  event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
  window.location.href = 'descargas.html'; // Redirigir a la página de descargas
});

const inic = document.querySelector('.menu-lateral a[href="Inicio.html"]');

// Agregar un evento de clic al enlace
inic.addEventListener('click', (event) => {
  event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
  window.location.href = 'Inicio.html'; // Redirigir a la página de descargas
});

const Tops = document.querySelector('.menu-lateral a[href="p-tops.html"]');

// Agregar un evento de clic al enlace
Tops.addEventListener('click', (event) => {
  event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
  window.location.href = 'p-tops.html'; // Redirigir a la página de descargas
});