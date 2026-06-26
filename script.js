// Show live date and time in footer
function showDateTime() {
    const dateTimeBox = document.getElementById("dateTime");

    if (dateTimeBox) {
        let now = new Date();
        dateTimeBox.innerText = "Date and Time: " + now.toLocaleString();
    }
}

setInterval(showDateTime, 1000);
showDateTime();


// Contact form validation
let contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let address = document.getElementById("address").value;
        let message = document.getElementById("message").value;

        let formMessage = document.getElementById("formMessage");

        if (name == "") {
            formMessage.innerText = "Please enter your name";
            formMessage.className = "text-red-500 text-center mt-4 font-semibold";
        }
        else if (email == "") {
            formMessage.innerText = "Please enter your email";
            formMessage.className = "text-red-500 text-center mt-4 font-semibold";
        }
        else if (phone == "") {
            formMessage.innerText = "Please enter your phone number";
            formMessage.className = "text-red-500 text-center mt-4 font-semibold";
        }
        else if (address == "") {
            formMessage.innerText = "Please enter your address";
            formMessage.className = "text-red-500 text-center mt-4 font-semibold";
        }
        else if (message == "") {
            formMessage.innerText = "Please enter your message";
            formMessage.className = "text-red-500 text-center mt-4 font-semibold";
        }
        else {
            formMessage.innerText = "Your message has been submitted successfully";
            formMessage.className = "text-green-600 text-center mt-4 font-semibold";

            contactForm.reset();
        }
    });
}