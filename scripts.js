document.addEventListener("DOMContentLoaded", function() {
    const floatingObjects = document.querySelector(".floating-objects");
    const numObjects = 50; // Number of floating objects

    // Create floating objects
    for (let i = 0; i < numObjects; i++) {
        const floating = document.createElement("div");
        floating.textContent = i % 2 === 0 ? "X" : "O";
        floating.className = "floating";
        floating.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        floating.style.top = `${Math.random() * 100}vh`; // Random vertical position
        floatingObjects.appendChild(floating);
    }

    // Function to animate floating objects
    function animateFloatingObjects() {
        const floatElements = document.querySelectorAll(".floating");

        floatElements.forEach(function(element) {
            // Randomize animation duration
            const animationDuration = (Math.random() * 15 + 5) + "s";
            element.style.animation = `float ${animationDuration} infinite`;

            // Randomize initial animation delay
            const animationDelay = Math.random() * 5 + "s";
            element.style.animationDelay = `-${animationDelay}`;
        });
    }

    animateFloatingObjects(); // Initial animation setup

    // Re-run animation setup periodically to handle continuous page transitions
    setInterval(animateFloatingObjects, 30000); // Adjust interval as needed
});
