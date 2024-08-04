document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme") || "light";
    
    document.body.classList.add(currentTheme + "-theme");

    themeToggleButton.addEventListener("click", () => {
        let newTheme = document.body.classList.contains("light-theme") ? "dark" : "light";
        document.body.classList.remove("light-theme", "dark-theme");
        document.body.classList.add(newTheme + "-theme");
        localStorage.setItem("theme", newTheme);
    });
});
