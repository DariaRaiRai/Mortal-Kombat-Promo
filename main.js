$(document).ready(function () {
$('#app').vide({
  mp4: 'video/video.mp4',
  webm: 'video/video.webm',
  ogv: 'video/video-image.jpg',
  poster: 'img/cover-image.jpg'
});
});


const orderFilm = document.querySelector("#order");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

orderFilm.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}