document.addEventListener("DOMContentLoaded", function () {
    // Get all tabs and content sections
    const tabs = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");

    // Add click event listener to each tab
    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function (e) {
            e.preventDefault();

            // Remove active class from all tabs and sections
            tabs.forEach((t) => t.classList.remove("active"));
            sections.forEach((s) => s.classList.remove("active"));

            // Add active class to the clicked tab and corresponding section
            this.classList.add("active");
            sections[index].classList.add("active");
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Form validation
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (e) {
        // Example: Validate email format
        const emailInput = document.getElementById("email");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailInput.value)) {
            alert("Please enter a valid email address");
            e.preventDefault();
        }
    });
});
