document.addEventListener("DOMContentLoaded", function() {
    let rotatingTexts = ['a creative.', 'a developer.', 'a musician.', 'a student.', 'ambitious.', 'a foodie.', 'a leader.', 'a learner.', 'a website developer'];
    let index = 0;
    let rotatingTextElement = document.getElementById('rotating-text-about');
    let typingSpeed = 100; // Speed at which characters are typed
    let deletingSpeed = 50; // Speed at which characters are deleted
    let pauseBetweenTexts = 1000; // Pause between fully typed texts
    let isDeleting = false;
    let textIndex = 0;

    function typeWriter() {
        let text = rotatingTexts[index];
        let speed = isDeleting ? deletingSpeed : typingSpeed;
        rotatingTextElement.textContent = text.substring(0, textIndex);
        
        if (!isDeleting && textIndex === text.length) {
            isDeleting = true;
            speed = pauseBetweenTexts;
        } else if (isDeleting && textIndex === 0) {
            isDeleting = false;
            index = (index + 1) % rotatingTexts.length;
            speed = pauseBetweenTexts;
        }

        textIndex += isDeleting ? -1 : 1;
        setTimeout(typeWriter, speed);
    }

    typeWriter(); // Initial text
});
