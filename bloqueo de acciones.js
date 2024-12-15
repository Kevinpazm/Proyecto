const btnNotificaciones = document.getElementById('boton-notificaciones');
const btnPerfil = document.getElementById('perfil-dropdown');
const menuNotificaciones = document.getElementById('notificacion');
const menuPerfil = document.getElementById('perfil');


function cerrarTodosMenus() {
menuNotificaciones.style.display = 'none';
menuPerfil.style.display = 'none';
}

cerrarTodosMenus();
btnNotificaciones.addEventListener('click', (event) => {
    event.stopPropagation(); 
    cerrarTodosMenus();
    menuNotificaciones.style.display = 
    menuNotificaciones.style.display === 'block' ? 'none' : 'block';
});

btnPerfil.addEventListener('click', (event) => {
    event.stopPropagation(); 
    cerrarTodosMenus();
    menuPerfil.style.display = 
    menuPerfil.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', () => {
    cerrarTodosMenus();
});
