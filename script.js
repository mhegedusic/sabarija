var slideIndex = 0;

function openModal(imageSrc, captionText, index) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    var caption = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = imageSrc;
    caption.innerHTML = captionText;
    slideIndex = index;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var modalImg = document.getElementById("modalImg");
    var caption = document.getElementById("caption");
    var images = document.querySelectorAll('.image img');
    if (n >= images.length) {slideIndex = 0}
    if (n < 0) {slideIndex = images.length - 1}
    modalImg.src = images[slideIndex].src;
    caption.innerHTML = images[slideIndex].getAttribute('alt');
}
