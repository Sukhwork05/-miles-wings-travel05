document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("siteHeader");
    const mobileMenu = document.getElementById("mobileMenu");
    const navigation = document.getElementById("mainNavigation");
    const currentYear = document.getElementById("currentYear");

    function updateHeader() {
        if (header) {
            header.classList.toggle("scrolled", window.scrollY > 25);
        }
    }

    window.addEventListener("scroll", updateHeader, { passive: true });
    updateHeader();

    if (mobileMenu && navigation) {
        mobileMenu.addEventListener("click", function () {
            const isOpen = navigation.classList.toggle("mobile-open");

            mobileMenu.classList.toggle("active", isOpen);
            mobileMenu.setAttribute("aria-expanded", String(isOpen));
            mobileMenu.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );
        });

        navigation.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navigation.classList.remove("mobile-open");
                mobileMenu.classList.remove("active");
                mobileMenu.setAttribute("aria-expanded", "false");
                mobileMenu.setAttribute("aria-label", "Open navigation");
            });
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 1000) {
                navigation.classList.remove("mobile-open");
                mobileMenu.classList.remove("active");
                mobileMenu.setAttribute("aria-expanded", "false");
            }
        });
    }

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
});
