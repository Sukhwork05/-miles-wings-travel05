/* =========================================================
   MILES WINGS TRAVEL
   NAVIGATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const header = document.getElementById("siteHeader");

    const mobileMenu = document.getElementById("mobileMenu");

    const navigation = document.getElementById("mainNavigation");


    /* =====================================================
       SCROLLING NAVBAR
    ===================================================== */

    function updateHeader() {

        if (!header) {
            return;
        }

        if (window.scrollY > 25) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

    updateHeader();


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    if (mobileMenu && navigation) {

        mobileMenu.addEventListener("click", function (event) {

            event.preventDefault();

            event.stopPropagation();


            const isOpen =
                navigation.classList.contains("mobile-open");


            if (isOpen) {

                navigation.classList.remove(
                    "mobile-open"
                );

                mobileMenu.classList.remove(
                    "active"
                );

                mobileMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );

                mobileMenu.setAttribute(
                    "aria-label",
                    "Open navigation"
                );


            } else {

                navigation.classList.add(
                    "mobile-open"
                );

                mobileMenu.classList.add(
                    "active"
                );

                mobileMenu.setAttribute(
                    "aria-expanded",
                    "true"
                );

                mobileMenu.setAttribute(
                    "aria-label",
                    "Close navigation"
                );

            }

        });


        /* ---------------------------------------------
           CLOSE WHEN LINK IS CLICKED
        --------------------------------------------- */

        const links =
            navigation.querySelectorAll("a");


        links.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    navigation.classList.remove(
                        "mobile-open"
                    );

                    mobileMenu.classList.remove(
                        "active"
                    );

                    mobileMenu.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    mobileMenu.setAttribute(
                        "aria-label",
                        "Open navigation"
                    );

                }
            );

        });


        /* ---------------------------------------------
           CLOSE WHEN RESIZING TO DESKTOP
        --------------------------------------------- */

        window.addEventListener(
            "resize",
            function () {

                if (window.innerWidth > 1000) {

                    navigation.classList.remove(
                        "mobile-open"
                    );

                    mobileMenu.classList.remove(
                        "active"
                    );

                    mobileMenu.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );

    }


    /* =====================================================
       FOOTER YEAR
    ===================================================== */

    const currentYear =
        document.getElementById("currentYear");


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }

});