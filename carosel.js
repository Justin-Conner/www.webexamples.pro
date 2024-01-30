const items = [
    { src: 'images/Angular.jpg', alt: 'Image 1' },
    { src: 'images/HTML5_badge.png', alt: 'Image 2' },
    { src: 'images/css.png', alt: 'Image 3' },
    { src: 'images/NodeLogo.jpg', alt: 'Image 4' },
    { src: 'images/React logo.png', alt: 'Image 5' },
    { src: 'images/MongoDb.jpg', alt: 'Image 6' },
    { src: 'images/SSMS.jpg', alt: 'Image 7' },
    { src: 'images/Etc.jpg', alt: 'Image 8' },
    { src: 'images/MySQL.png', alt: 'Image 9' },
    { src: 'images/Oracle db.jpg', alt: 'Image 10' },
    { src: 'images/Python logo.jpg', alt: 'Image 11' },
    { src: 'images/Threejs.jpg', alt: 'Image 12' },
    { src: 'images/Sql logo.png', alt: 'Image 12' },

    // Add more items as needed
];

// Function to generate carousel items
function generateCarouselItems() {
    const carouselWrapper = document.getElementById('carouselWrapper');

    // Generate initial carousel items
    items.forEach(item => {
        const carouselItem = createCarouselItem(item);
        carouselWrapper.appendChild(carouselItem);
    });

    // Clone items for seamless scrolling
    items.forEach(item => {
        const carouselItem = createCarouselItem(item);
        carouselWrapper.appendChild(carouselItem.cloneNode(true));
    });
}

// Function to create a carousel item
function createCarouselItem(itemData) {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');

    const square = document.createElement('div');
    square.classList.add('square');

    const anchor = document.createElement('a');
    anchor.classList.add('btn');
    anchor.href = 'https://github.com/Justin-Conner/components';

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const image = document.createElement('img');
    image.style.width = '225px';
    image.style.height = 'auto';
    image.style.backgroundColor = 'transparent';
    image.src = itemData.src;
    image.alt = itemData.alt;

    imageContainer.appendChild(image);
    anchor.appendChild(imageContainer);
    square.appendChild(anchor);
    carouselItem.appendChild(square);

    return carouselItem;
}

// Generate initial carousel items
generateCarouselItems();

// Animate the carousel
const carouselWrapper = document.getElementById('carouselWrapper');
let currentPosition = 0;
const itemWidth = carouselWrapper.offsetWidth / 5; // 5 items visible at a time
const speed = 1; // Adjust the speed of animation as needed

function animateCarousel() {
    currentPosition -= speed;

    // Move the carousel continuously
    carouselWrapper.style.transform = `translateX(${currentPosition}px)`;

    // Reset position when reaching the end
    if (currentPosition <= -itemWidth * items.length) {
        currentPosition = 0;
    }
}

// Start the animation loop
setInterval(animateCarousel, 10); // Adjust the interval as needed
