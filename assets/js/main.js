document.addEventListener("DOMContentLoaded", () => {
    const aside = document.getElementById("navigationAside");

    function dashboardIconClick() {
        if (navigationAside.classList.contains("-translate-x-full")) {
            navigationAside.classList.remove("-translate-x-full");
            navigationAside.classList.add("translate-x-0");
        }
        else {
            navigationAside.classList.add("-translate-x-full");
            navigationAside.classList.remove("translate-x-0"); }
    }

    document.getElementById("dashboardButton").addEventListener("click", dashboardIconClick);
});

