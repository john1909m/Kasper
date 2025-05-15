// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navBar = document.querySelector('.nav-bar');
    
    menuBtn.addEventListener('click', function() {
        navBar.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-bar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navBar.classList.remove('active');
        });
    });
}); 
