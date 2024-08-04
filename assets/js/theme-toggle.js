document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle");
    const lightThemeLink = document.getElementById("light-theme");
    const darkThemeLink = document.getElementById("dark-theme");
    const currentTheme = localStorage.getItem("theme") || "light";

    if (currentTheme === "dark") {
        darkThemeLink.removeAttribute("disabled");
        lightThemeLink.setAttribute("disabled", "disabled");
    } else {
        lightThemeLink.removeAttribute("disabled");
        darkThemeLink.setAttribute("disabled", "disabled");
    }

    themeToggleButton.addEventListener("click", () => {
        if (document.body.classList.contains("light-theme")) {
            document.body.classList.remove("light-theme");
            document.body.classList.add("dark-theme");
            darkThemeLink.removeAttribute("disabled");
            lightThemeLink.setAttribute("disabled", "disabled");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-theme");
            document.body.classList.add("light-theme");
            darkThemeLink.setAttribute("disabled", "disabled");
            lightThemeLink.removeAttribute("disabled");
            localStorage.setItem("theme", "light");
        }
    });
});
