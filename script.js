// Mobile Menu

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Navbar Scroll

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 40){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

});



emailjs.init({
    publicKey: "FMP5FMOjkxwRqEoU_"
});

const form = document.getElementById("contact-form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    result.innerHTML = "Sending...";
    result.style.color = "#2563eb";

    emailjs.sendForm(
        "service_s4nek1v",
        "template_7rguczo",
        form
    )
    .then(() => {
        result.innerHTML = "✅ Message Sent Successfully!";
        result.style.color = "green";
        form.reset();
    })
    .catch((error) => {
        result.innerHTML = "❌ Failed to Send Message!";
        result.style.color = "red";
        console.error(error);
    });
});