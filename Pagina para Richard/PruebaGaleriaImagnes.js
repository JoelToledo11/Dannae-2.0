//---------------------------------------------------------------------------------------------------------------------------
//PARA FORMULARIO DEL "iNICIAR SESIÓN"


//---------------------------------------------------------------------------------------------------------------------------
//PARA PONER UN MODAL A LAS CARD Y CAMBIAR LA IMAGEN AL SELECCIONAR UN COLOR
const detalleButtons = document.querySelectorAll('.ver-detalles');

detalleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const producto = button.parentElement;

        const nombre = producto.querySelector('h3').innerText;
        const precio = producto.querySelector('.precio').innerText;
        const imagen = producto.querySelector('img').src;

        // Actualizar el contenido del modal
        document.getElementById('modalProductName').innerText = nombre;
        document.getElementById('modalPrice').innerText = precio;
        document.getElementById('modalImage').src = imagen;

        // Establecer el select de colores
        const colorSelect = document.getElementById('colorSelect');
        colorSelect.innerHTML = ""; // Limpiar las opciones
        Object.keys(productos[nombre].imagenes).forEach(color => {
            const option = document.createElement('option');
            option.value = color;
            option.textContent = color;
            colorSelect.appendChild(option);
        });

        // Cambiar imagen según el color seleccionado
        colorSelect.addEventListener('change', () => {
            const selectedColor = colorSelect.value;
            document.getElementById('modalImage').src = productos[nombre].imagenes[selectedColor];
        });

        // Mostrar el modal
        const modal = new bootstrap.Modal(document.getElementById('detalleModal'));
        modal.show();
    });
});


const productos = {
    "Nombre del Producto 1": {
        precio: "$29.99",
        imagenes: {
            "Azul": "Imagenes/CamisetaArgentina.jpeg",
            "Rojo": "Imagenes/CamisetaSanMartin.jpg",
            "Verde": "Imagenes/CamisetaAtletico.jpg",
            "Negro": "Imagenes/CamisetaEjemplo.jpg",
        }
    },
    "Nombre del Producto 2": {
        precio: "$39.99",
        imagenes: {
            "Rojo": "Imagenes/Campera_Rojo.jpeg",
            "Azul": "Imagenes/Campera_Azul.jpeg",
            "Verde": "Imagenes/Campera_Verde.jpeg",
            "Negro": "Imagenes/Campera_Negro.jpeg",
        }
    },
    "Nombre del Producto 3": {
        precio: "$39.99",
        imagenes: {
            "Rojo": "Imagenes/Campera_Rojo.jpeg",
            "Azul": "Imagenes/Campera_Azul.jpeg",
            "Verde": "Imagenes/Campera_Verde.jpeg",
            "Negro": "Imagenes/Campera_Negro.jpeg",
        }
    },
    "Nombre del Producto 4": {
        precio: "$39.99",
        imagenes: {
            "Rojo": "Imagenes/Campera_Rojo.jpeg",
            "Azul": "Imagenes/Campera_Azul.jpeg",
            "Verde": "Imagenes/Campera_Verde.jpeg",
            "Negro": "Imagenes/Campera_Negro.jpeg",
        }
    },
    // Agrega más productos según sea necesario
};


//---------------------------------------------------------------------------------------------------------------------------

//PARA LA SECCION DE VIDEOS
 // Función para reproducir el video al hacer clic y quitar el sonido inicial
 function toggleVideo(videoElement) {
    const video = videoElement.querySelector('video');
    const overlay = videoElement.querySelector('.video-overlay');
    
    if (video.paused) {
      video.play();
      video.muted = false;
      overlay.style.display = 'none'; // Ocultar la superposición de clic
    } else {
      video.pause();
      video.muted = true;
      overlay.style.display = 'flex'; // Mostrar la superposición de clic
    }

    // Hacer pantalla completa si el video está en reproducción
    if (video.paused === false) {
      openFullscreen(videoElement);
    }
  }

  // Función para entrar en pantalla completa
  function openFullscreen(videoElement) {
    const video = videoElement.querySelector('video');

    // Verifica si el navegador soporta la API de pantalla completa
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // Firefox
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
      video.msRequestFullscreen();
    }
  }

//---------------------------------------------------------------------------------------------------------------------------

//SECCION DE SELECCCION GALERIA DE PRODUCTOS
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.img-fluid');
    let maxHeight = 0;

    // Encuentra la altura máxima entre todas las imágenes
    images.forEach(img => {
        const height = img.clientHeight;
        if (height > maxHeight) {
            maxHeight = height;
        }
    });

    // Ajusta todas las imágenes a la altura máxima
    images.forEach(img => {
        img.style.height = maxHeight + 'px';
    });
});

// SECCION DE COMPRAS DE PRODUCTOS
document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', function() {
        alert('Color seleccionado: ' + this.style.backgroundColor);
    });
});
