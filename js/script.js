function translatePhrase() {
    const translateButton = document.querySelector('button');
    const imageContainer1 = document.getElementById('imageContainer1');

    translateButton.style.display = 'none';
    imageContainer1.classList.remove('hidden');
}

function checkEnter(event) {
    const phrase = document.getElementById('phrase').value;
    const imageContainer1 = document.getElementById('imageContainer1');
    const finalMessageContainer = document.getElementById('mensajeFinalContainer');
    const translateButton = document.querySelector('button');
    const heading = document.querySelector('h1');
    const input = document.getElementById('phrase');
    const body = document.body;
    const backgroundOverlay = document.querySelector('.background-overlay');

    if (event.key === 'Enter') {
        if (phrase.toLowerCase() === 'no sabes nada jon snow') {
            imageContainer1.classList.add('fade-out');
            heading.classList.add('fade-out');
            input.classList.add('fade-out');
            translateButton.classList.add('fade-out');

            setTimeout(() => {
                imageContainer1.classList.add('hidden');
                heading.classList.add('hidden');
                input.classList.add('hidden');
                translateButton.classList.add('hidden');

                finalMessageContainer.classList.remove('hidden');
                finalMessageContainer.classList.add('fade-in'); 

                body.classList.add('final-background');
                
                backgroundOverlay.classList.remove('hidden');

                launchConfetti();
            }, 200);
        } else {
            alert('Esa no es tu frase, tonota');
        }
    }
}

function launchConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Para probar la función de confeti manualmente, puedes llamar a launchConfetti() directamente aquí:
// launchConfetti();
