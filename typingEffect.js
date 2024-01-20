
document.addEventListener("DOMContentLoaded", function() {
    const sentences = [
        "Hello World. ",
        "Welcome to my portfolio website!",
        "Download my resume.",
        "Check out my projects.",
        "Schedule an interview."
    ];

    const typingSpeed = 100;
    const container = document.getElementById("typing-container");

    function typeSentence(index) {
        if (index < sentences.length) {
            const newContainer = document.createElement("div");
            newContainer.classList.add("typing-container");
            container.appendChild(newContainer);

            typeWords(sentences[index], newContainer, 0);
            setTimeout(function() {
                typeSentence(index + 1);
            }, typingSpeed * sentences[index].length);
        }
    }

    function typeWords(words, currentContainer, wordIndex) {
        if (wordIndex < words.length) {
            const span = document.createElement("span");
            span.textContent = words[wordIndex];
            currentContainer.appendChild(span);

            setTimeout(function() {
                typeWords(words, currentContainer, wordIndex + 1);
            }, typingSpeed);
        }
    }

    // Start typing effect
    typeSentence(0);
});

