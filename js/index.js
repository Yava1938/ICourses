const botones = document.querySelectorAll('.btn');


botones.forEach(boton => {
    boton.addEventListener('click', () => {
        
        const seccionContacto = document.getElementById('contacto');

        seccionContacto.scrollIntoView({
            behavior: 'smooth', 
            block: 'start'      
        });
    });
});