var currentSlide = 1;
var isPaused = false;

function loadSlideContent(slideNumber) {
  var slideElement = document.getElementById('slide' + slideNumber);
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      slideElement.innerHTML = xhr.responseText;
    }
  };

  xhr.open('GET', 'slide' + slideNumber + '.html', true);
  xhr.send();
}

function showSlide(slideNumber) {
  var slides = document.getElementsByClassName('slide');
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  loadSlideContent(slideNumber);
  slides[slideNumber - 1].style.display = 'block';
}

function nextSlide() {
  if (!isPaused) {
    currentSlide = (currentSlide % 3) + 1;
    showSlide(currentSlide);
  }
}

function togglePause() {
  isPaused = !isPaused;
}

function copyContent() {
  var currentSlideContent = document.getElementById('slide' + currentSlide).innerHTML;
  // Use the Clipboard API to copy the content to the clipboard
  navigator.clipboard.writeText(currentSlideContent).then(function () {
    console.log('Content copied to clipboard!');
  }).catch(function (err) {
    console.error('Unable to copy content to clipboard', err);
  });
}

setInterval(nextSlide, 2000);

// Update this to match the ID of your container
var slidesContainer = document.getElementById('slidesContainer');

// Function to create a square and append it to the container
function createSquare(imageSrc, content) {
  var square = document.createElement('div');
  square.className = 'square';

  var link = document.createElement('a');
  link.className = 'btn';
  link.href = '#'; // Update this to the correct link

  var imageContainer = document.createElement('div');
  imageContainer.className = 'image-container';

  var image = document.createElement('img');
  image.style.width = '250px';
  image.style.height = 'auto';
  image.style.backgroundColor = 'transparent';
  image.src = imageSrc;
  image.alt = 'Sample Image';

  var squareContent = document.createElement('div');
  squareContent.className = 'squareContent';
  squareContent.textContent = content;

  slidesContainer.appendChild(square);
  square.appendChild(link);
  link.appendChild(imageContainer);
  imageContainer.appendChild(image);
  square.appendChild(squareContent);
}

// Call createSquare for each square you want to add
createSquare('./images/HTML5_badge.png', 'HTML5');
createSquare('./images/css.png', 'CSS');
createSquare('./images/Custom components.jpg', 'Custom Components');
createSquare('./images/JavaScript.png', 'JavaScript');
