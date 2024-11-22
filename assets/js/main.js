document.addEventListener("DOMContentLoaded", () => {
    const aside = document.getElementById("navigationAside");
    const projectsLink = document.getElementById("projectsLink");
    const aboutLink = document.getElementById("aboutLink");
    const contactLink = document.getElementById("contactLink");
    const resumeLink = document.getElementById("resumeLink");

    projectsLink.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = "projects.html";
    });

    aboutLink.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = "about.html";
    });

    contactLink.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = "contact.html";
    });

    contactLink.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = "resume.html";
    });

    function homeIconClick() {
        window.location.href = 'index.html';
    }

    function dashboardIconClick() {
        if (navigationAside.classList.contains("-translate-x-full")) {
            navigationAside.classList.remove("-translate-x-full");
            navigationAside.classList.add("translate-x-0");
        }
        else {
            navigationAside.classList.add("-translate-x-full");
            navigationAside.classList.remove("translate-x-0"); }
    }

    document.getElementById("homeButton").addEventListener("click", homeIconClick);
    document.getElementById("dashboardButton").addEventListener("click", dashboardIconClick);
});

