document.addEventListener("DOMContentLoaded", () => {

    /* Flash the tagline text in the header */
    document.addEventListener('headerLoaded', () => {
        const phrases = ["Amber Howe", "Digital Artist", "Web Developer", "Programmer"];
        const textElement = document.getElementById("flashing-text");
        if (!textElement) {
            console.error("Element with ID 'flashing-text' not found!");
            return;
        }

        let index = 0;

        function updateText() {
            // Fade out
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
    });

    async function loadHeader() {
        try {
            const headerResponse = await fetch('../assets/html/header.html');
            const headerData = await headerResponse.text();
            document.getElementById('header').innerHTML = headerData;
            document.dispatchEvent(new Event('headerLoaded')); // Correct event name
        } catch (error) {
            console.error('Error loading shared components:', error);
        }
    }
    loadHeader();


    document.addEventListener('footerLoaded', () => {
        const navigationAside = document.getElementById('navigationAside');
        const dashboardButton = document.getElementById('dashboardButton');

        if (dashboardButton) {
            dashboardButton.addEventListener('click', () => {
                if (navigationAside.classList.contains('-translate-x-full')) {
                    navigationAside.classList.remove('-translate-x-full');
                    navigationAside.classList.add('translate-x-0');
                } else {
                    navigationAside.classList.add('-translate-x-full');
                    navigationAside.classList.remove('translate-x-0');
                }
            });
        }
    });
    async function loadFooter() {
        try {
            const footerResponse = await fetch('../assets/html/footer.html');
            const footerContent = await footerResponse.text();
            document.getElementById('footer').innerHTML = footerContent;

            document.dispatchEvent(new Event('footerLoaded'));
        } catch (error) {
            console.error('Error loading footer:', error);
        }
    }
    loadFooter();


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
        typeEffect("intro", "INTRODUCTION", 100);
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

