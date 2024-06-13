document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const container = document.querySelector('.container');
    
    noButton.addEventListener('mouseover', () => {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();
        
        let offsetX, offsetY;

        do {
            offsetX = Math.random() * (containerRect.width - buttonRect.width);
            offsetY = Math.random() * (containerRect.height - buttonRect.height);
        } while (Math.abs(offsetX - buttonRect.left) < 50 && Math.abs(offsetY - buttonRect.top) < 50);
        
        noButton.style.position = 'absolute';
        noButton.style.left = `${offsetX}px`;
        noButton.style.top = `${offsetY}px`;
    });

    yesButton.addEventListener('click', () => {
        container.innerHTML = `
            <h1>Pedido fofo aceito com sucesso!</h1>
            <p style="font-size:30px">&#129505 &#128171;</p>

            <p style="font-size:3px">"Às estrelas que ouvem e aos sonhos que são atendidos"</p>
        `;
        container.style.transform = 'scale(1.2)';
        container.style.opacity = '1';

    });
});
