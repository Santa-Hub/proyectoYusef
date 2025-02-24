const yt = document.getElementById('yt');
const ig = document.getElementById('ig');
const wa = document.getElementById('wa');

yt.addEventListener('click', function() {
    const ventana = document.createElement('div');
    ventana.classList.add('ventana');

    const cuadro = document.createElement('div');
    cuadro.classList.add('cuadro');

    const botonVentana = document.createElement('a');
    botonVentana.href = 'https://www.youtube.com';
    botonVentana.target = '_blank';
    botonVentana.textContent = 'Ir a YouTube';
    botonVentana.classList.add('enlace');

    ventana.appendChild(cuadro);
    cuadro.appendChild(botonVentana);
})