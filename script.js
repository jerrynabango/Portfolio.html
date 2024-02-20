document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            const section = document.getElementById(sectionId);
            
            if (section) {
                // Smooth scroll to the section
                window.scrollTo({
                    top: section.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});
