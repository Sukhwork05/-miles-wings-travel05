/* =========================================================
   MILES WINGS TRAVEL
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function () {

            if (formMessage) {

                formMessage.textContent =
                    "Sending your enquiry...";

            }

        }
    );

}