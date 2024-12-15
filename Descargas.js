const BotonDescargas = document.querySelector('.boton-descargas');
const recuadrodescargas = document.getElementById('descargas');

BotonDescargas.addEventListener('click', () => {
    recuadrodescargas.style.display = recuadrodescargas.style.display === 'none' ? 'block': 'none';
});