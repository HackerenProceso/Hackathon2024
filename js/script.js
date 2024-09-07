function updateCountdown() {
    const endDate = new Date('September 14, 2024 23:59:59').getTime();
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');

    if (timeLeft < 0) {
        document.getElementById('contador-mensaje').textContent = "¡Inscripciones cerradas!";
    
        document.getElementById('days').textContent = "00";
        document.getElementById('hours').textContent = "00";
        document.getElementById('minutes').textContent = "00";
    }
}

setInterval(updateCountdown, 1000);

//MENU MOVIL
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona los elementos necesarios
    const navToggle = document.querySelector('.nav-toggle');
    const navMobile = document.querySelector('.nav-mobile');
    const navbarContainer = document.querySelector('.navbar-container');
    const navExit = document.querySelector('.nav-exit i');

    // Asegúrate de que los elementos existan antes de añadir los eventos
    if (navToggle && navMobile && navbarContainer && navExit) {
        // Función para mostrar el menú móvil y ocultar el contenedor de la barra de navegación
        function showNavMobile() {
            navMobile.style.display = 'block'; 
            navMobile.classList.remove('hidden');
            navbarContainer.classList.add('hidden');
            document.body.style.overflow = 'hidden'; // Evita el desplazamiento del fondo
        }

        // Función para ocultar el menú móvil y mostrar el contenedor de la barra de navegación
        function hideNavMobile() {
            navMobile.style.display = 'none'; 
            navMobile.classList.add('hidden');
            navbarContainer.classList.remove('hidden');
            document.body.style.overflow = ''; // Restaura el desplazamiento del fondo
        }

        // Agrega el evento de clic al ícono del menú móvil
        navToggle.addEventListener('click', showNavMobile);

        // Agrega el evento de clic al ícono de cerrar en el menú móvil
        navExit.addEventListener('click', hideNavMobile);
    }
});

//CARROUSEL DE SPONSOR
document.addEventListener('DOMContentLoaded', function() {
    const sponsors = document.querySelectorAll('.sponsor');
    let currentIndex = 0;
    const totalSponsors = sponsors.length;

    // Función para mostrar la siguiente imagen
    function showNextSponsor() {
      // Ocultar la imagen actual
      sponsors[currentIndex].classList.remove('active');

      // Calcular el siguiente índice
      currentIndex = (currentIndex + 1) % totalSponsors;

      // Mostrar la siguiente imagen
      sponsors[currentIndex].classList.add('active');
    }

    // Iniciar el carrusel
    sponsors[currentIndex].classList.add('active'); // Mostrar la primera imagen
    setInterval(showNextSponsor, 2000); // Cambiar cada 1 segundo
  });