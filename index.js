document.addEventListener('DOMContentLoaded', () => {
    //  Buscamos todos los botones y el cuadro de la imagen
    const elementosClick = document.querySelectorAll('button, .mi-cuadro');

    elementosClick.forEach(elemento => {
        elemento.addEventListener('click', () => {
            
            // 1. Guardamos el color que tiene ahora
            const colorOriginal = elemento.style.backgroundColor;

            // 2. Cambiamos al color de clic (Amarillo)
            elemento.style.backgroundColor = '#ffcc00'; 
            elemento.style.transition = '0.1s'; // Cambio rápido

            // 3.  Regresa al color original en un parpadeo (200ms)
            setTimeout(() => {
                elemento.style.backgroundColor = colorOriginal;
            }, 200); 

        });
    });
});