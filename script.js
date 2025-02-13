const noBtn = document.getElementById('no-btn');
const siBtn = document.getElementById('si-btn');
const loroImg = document.getElementById('loro-img');
const mensaje = document.getElementById('mensaje');
const hearts = document.getElementById('hearts');
const pregunta = document.getElementById('pregunta');
const respuestas = document.getElementById('respuestas');

noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

siBtn.addEventListener('click', () => {
    // Cambia el GIF principal
    loroImg.src = 'bird_love.gif';

    // Muestra un mensaje
    mensaje.textContent = 'Te amo :3';

    // Oculta la pregunta y los botones
    pregunta.style.display = 'none';
    respuestas.style.display = 'none';

    // Agrega múltiples copias del GIF "heart.gif"
    for (let i = 0; i < 20; i++) { // Cambia el número para agregar más o menos corazones
        const img = document.createElement('img');
        img.src = 'heart.gif';
        img.alt = 'Corazón';
        hearts.appendChild(img);
    }
});
