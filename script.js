let currentImageIndex = 1;

function showImage(index) {
    const imageElement = document.getElementById('carouselImage');
    imageElement.src = `imagen${index}.jpg`;
}

function prevImage() {
    if (currentImageIndex > 1) {
        currentImageIndex--;
    } else {
        currentImageIndex = 5; // Cambia este número al total de imágenes
    }
    showImage(currentImageIndex);
}

function nextImage() {
    const totalImages = 5; // Cambia este número al total de imágenes
    if (currentImageIndex < totalImages) {
        currentImageIndex++;
    } else {
        currentImageIndex = 1;
    }
    showImage(currentImageIndex);
}

// Mostrar la primera imagen al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    showImage(currentImageIndex);
});
