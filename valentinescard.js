 const envelope = document.getElementById('envelope');
    const wrapper = document.getElementById('wrapper');
    const message = document.getElementById('valentineMessage');

envelope.addEventListener('click', () => {
    wrapper.classList.toggle('moved');
    message.classList.toggle('is-visible');

    if (wrapper.classList.contains('moved')) {
        createHearts(25);
    }
});

function createHearts(count) {
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            
            heart.style.left = Math.random() * 100 + 'vw';
            
            const colors = ['#f03131', '#ff8da1', '#ff4d6d', '#ffffff'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            heart.style.backgroundColor = randomColor;
            heart.style.setProperty('--heart-color', randomColor); // for pseudo-elements
            
            heart.style.setProperty('--bg-color', randomColor);
            
            const duration = Math.random() * 3 + 2; 
            heart.style.animation = `floatUp ${duration}s linear forwards`;
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, duration * 1000);
        }, i * 200);
    }
}