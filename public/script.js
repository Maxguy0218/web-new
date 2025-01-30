<script>
const images = document.querySelectorAll('.slideshow img');
let currentIndex = 0;

setInterval(() ={">"} {
    images[currentIndex].classList.remove('active') }
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
, 3000); // Change image every 3 seconds
</script>