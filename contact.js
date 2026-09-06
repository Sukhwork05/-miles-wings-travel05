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
        function (event) {

            event.preventDefault();

            if (formMessage) {

                formMessage.textContent =
                    "Sending your enquiry...";

            }

            const formData = new FormData(contactForm);

            fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            })
                .then(function (response) {

                    if (response.ok) {

                        if (formMessage) {

                            formMessage.textContent =
                                "Thank you! Your enquiry has been sent — we'll be in touch soon.";

                        }

                        contactForm.reset();

                    } else {

                        if (formMessage) {

                            formMessage.textContent =
                                "Something went wrong. Please try again or contact us directly.";

                        }

                    }

                })
                .catch(function () {

                    if (formMessage) {

                        formMessage.textContent =
                            "Something went wrong. Please try again or contact us directly.";

                    }

                });

        }
    );

}
