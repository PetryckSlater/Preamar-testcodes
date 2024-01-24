document.addEventListener('DOMContentLoaded', function () {
    const objects = document.querySelectorAll('.object');
    const infoBox = document.getElementById('info-box');

    objects.forEach(object => {
        object.addEventListener('mouseover', (event) => {
            const info = object.getAttribute('data-info');
            const description = object.getAttribute('data-description');
            
            infoBox.innerHTML = `<strong>${info}</strong><br>${description}`;

            // Posiciona a caixa de diálogo ao lado do objeto
            const rect = object.getBoundingClientRect();
            infoBox.style.top = `${rect.top}px`;
            infoBox.style.left = `${rect.right}px`;

            infoBox.style.display = 'block';
        });

        object.addEventListener('mouseout', () => {
            infoBox.style.display = 'none';
        });
    });
});
