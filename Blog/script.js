let slideIndex = 1;
showSlides(slideIndex);

function openModal(index) {
    document.getElementById("modal").style.display = "block";
    slideIndex = index;
    showSlides(slideIndex);
    
    // Desabilitar a rolagem da página
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    
    // Reabilitar a rolagem da página
    document.body.style.overflow = "auto";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("modal-slide");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Esconde todas as imagens
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Mostra a imagem atual
    slides[slideIndex - 1].style.display = "block";
}
