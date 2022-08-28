window.addEventListener("resize", getTemplate);

    CurrentPage = 'DesktopPage';

    function getTemplate() {
        if (screen.width <= 769 && CurrentPage != 'DesktopPage') {
            return window.location.replace("index_tab.html");
        }

        if (screen.width > 770 && CurrentPage != 'MobilePage') {
            return window.location.replace("index.html");
        }
    }

    getTemplate();