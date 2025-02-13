const noBtn = document.getElementById('no-btn');
const siBtn = document.getElementById('si-btn');
const loroImg = document.getElementById('loro-img');

noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

siBtn.addEventListener('click', () => {
    loroImg.src = 'bird_love.gif'; // Cambia el GIF del loro a uno feliz
    alert('¡Gracias por ser mi amigo!');
});