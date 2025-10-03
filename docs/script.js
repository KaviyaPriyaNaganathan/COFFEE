/**
 * Handles the logic for toggling the mobile navigation menu.
 * This script is linked to index.html via: <script src="script.js"></script>
 */
document.addEventListener('DOMContentLoaded', () => {
    // Get the button and the menu container by their IDs
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        // Toggle menu visibility when the button is clicked
        menuToggle.addEventListener('click', () => {
            // Check if the menu is currently hidden
            const isHidden = mobileMenu.style.display === 'none' || mobileMenu.style.display === '';
            mobileMenu.style.display = isHidden ? 'block' : 'none';

            // Optional: Update the SVG icon inside the toggle button here if needed
        });

        // Close menu when a link is clicked to ensure smooth navigation to the section
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Only auto-close if we are on a mobile-sized screen
                if (window.innerWidth < 768) { 
                    mobileMenu.style.display = 'none';
                }
            });
        });
    }
});
