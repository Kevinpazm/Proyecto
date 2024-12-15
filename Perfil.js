//---PERFIL---

const BotonPerfil = document.querySelector('.perfil-dropdown');
const recuadroperfil= document.getElementById('perfil');


BotonPerfil.addEventListener('click', () => {
    recuadroperfil.style.display = recuadroperfil.style.display === 'none' ? 'block' : 'none';
});
