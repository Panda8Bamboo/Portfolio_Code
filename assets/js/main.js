document.addEventListener("DOMContentLoaded", () => {


    const text = "INTRODUCTION";
    const typingSpeed = 100;
    function typeEffect(elementId, text, speed) {
        const element = document.getElementById(elementId);
        let index = 0;

        function type() {
            if (index < text.length) {
                element.textContent += text[index];
                index++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    if (document.title === "Resume") {
        typeEffect("header", text, typingSpeed);
    }

    /* Reveal the dashboard on dashboard icon click */
    const navigationAside = document.getElementById("navigationAside");
    const dashboardButton = document.getElementById("dashboardButton");

    if (navigationAside && dashboardButton) {
        dashboardButton.addEventListener("click", dashboardIconClick);

        function dashboardIconClick() {
            if (navigationAside.classList.contains("-translate-x-full")) {
                navigationAside.classList.remove("-translate-x-full");
                navigationAside.classList.add("translate-x-0");
            } else {
                navigationAside.classList.add("-translate-x-full");
                navigationAside.classList.remove("translate-x-0");
            }
        }
    }


    /* Flash the tagline text in the header */
    const phrases = ["Amber Howe", "2D Artist", "Web Developer", "Programmer"];
    const textElement = document.getElementById("flashing-text");
    let index = 0;
    if (textElement) {
        function updateText() {
            textElement.classList.remove("opacity-100");
            textElement.classList.add("opacity-0");

            setTimeout(() => {
                textElement.textContent = phrases[index];
                index = (index + 1) % phrases.length;

                textElement.classList.remove("opacity-0");
                textElement.classList.add("opacity-100");
            }, 500);
        }
        setInterval(updateText, 3000);
    } else {
        console.warn('Element with ID "flashing-text" not found. UpdateText will not run.');
    }


    /* Reveal more button in the resume section */
    const readMoreContainers = document.querySelectorAll(".read-more-container");

    readMoreContainers.forEach(container => {
        const readMoreBtn = container.querySelector(".read-more-btn");
        const hiddenText = container.querySelector(".hidden");

        readMoreBtn.addEventListener("click", function () {
            hiddenText.classList.toggle("hidden");
            if (hiddenText.classList.contains("hidden")) {
                readMoreBtn.textContent = "Read More";
            } else {
                readMoreBtn.textContent = "Read Less";
            }
        });
    });
});

