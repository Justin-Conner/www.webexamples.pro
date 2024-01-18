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
showSlide(currentSlide);