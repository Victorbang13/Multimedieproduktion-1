document.addEventListener('DOMContentLoaded', function() {
    const images = [
        '../GALLERI/Kids_background_2.jpg',  // Billedet fra https://www.pexels.com/da-dk/foto/folk-leg-skole-kreativitet-8363119/
        '../GALLERI/Kids_background_3.jpg',   // Billedet fra https://www.pexels.com/da-dk/foto/296302/
        '../GALLERI/Kids_background_4.jpeg',  // Billedet fra https://www.pexels.com/da-dk/foto/kvinde-skrivebord-sidde-sidning-8363771/
        '../GALLERI/Kids_background_5.jpg',  // Billedet fra https://pixabay.com/photos/nursery-child-kindergarten-school-2114173/
        '../GALLERI/Kids_background_6.jpg',  // Billedet fra https://www.pexels.com/da-dk/foto/folk-kvinde-leg-skole-8422207/
        '../GALLERI/Kids_background_7.jpg',  // Billedet fra https://www.pexels.com/da-dk/foto/sjov-born-uddannelse-mangfoldighed-8422112/
        '../GALLERI/Kids_background_8.jpg',  // Billedet fra https://pixabay.com/photos/child-boy-toddler-preschooler-play-1522870/
        '../GALLERI/Kids_background_9.jpeg',  // Billedet fra https://www.pexels.com/da-dk/foto/folk-kvinde-sidde-sidning-8364026/
        '../GALLERI/Kids_background_10.jpg',  // Billedet fra https://www.pexels.com/da-dk/foto/kunst-bygning-maleri-klaver-7104222/
        '../GALLERI/Kids_background_11.jpg',  // Billedet fra https://www.pexels.com/da-dk/foto/folk-kvinde-kunst-bord-8612990/
        '../GALLERI/Kids_background_12.jpg',  // Billedet fra https://www.pexels.com/da-dk/foto/leg-born-laere-laering-8422260/
        '../GALLERI/Kids_background_13.jpg',  // Billedet fra https://www.pexels.com/da-dk/foto/folk-sodt-nuttet-sidde-8363772/
        '../GALLERI/Kids_background_14.jpg'  // Billedet fra https://www.pexels.com/da-dk/foto/kvinde-pige-maleri-kreativitet-8612981/
    ];

    let currentImageIndex = 0;
    const heroSection = document.querySelector('.hero');

    // Preload images
    const preloadImages = (imageArray) => {
        imageArray.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    };

    // Function to change background with smooth transition
    function changeBackground() {
        heroSection.style.backgroundImage = `url('${images[currentImageIndex]}')`;

        // Update to the next image in the array
        currentImageIndex = (currentImageIndex + 1) % images.length;  // Loop back to the first image when reaching the end
    }

    // Initial background setup
    preloadImages(images);
    changeBackground();

    // Change background every 7 seconds (same for all images)
    setInterval(function() {
        changeBackground();  // Change background every interval
    }, 7000);  // Set interval to 7 seconds for all images, including the first one
});