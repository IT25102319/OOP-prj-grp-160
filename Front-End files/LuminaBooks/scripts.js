// Interactions and basic logic for Lumina Books UI

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 1000); // Increased preloader time
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu logic
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');

            // Toggle hamburger icon between bars and x
            const icon = hamburger.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.replace('fa-bars', 'fa-xmark');
            } else {
                icon.classList.replace('fa-xmark', 'fa-bars');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.replace('fa-xmark', 'fa-bars');
            }
        });
    }

    // Category selection logic
    const categoryItems = document.querySelectorAll('.category-item');
    if (categoryItems.length > 0) {
        categoryItems.forEach(item => {
            item.addEventListener('click', () => {
                // Remove active class from all
                categoryItems.forEach(i => i.classList.remove('active'));
                // Add active class to clicked
                item.classList.add('active');
            });
        });
    }

    // Add to cart buttons
    const addButtons = document.querySelectorAll('.book-card .btn-primary');
    const cartCountBtn = document.querySelector('.nav-container .btn-primary');
    let cartCount = 0;

    if (addButtons.length > 0 && cartCountBtn) {
        addButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                cartCount++;
                cartCountBtn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> (${cartCount})`;

                // Optional: Add a subtle animation to the button
                const originalText = btn.innerHTML;
                btn.innerHTML = '<i class="fa-solid fa-check"></i> Added';
                btn.style.background = '#10B981'; // Success color

                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = ''; // Revert to CSS variable
                }, 1500);
            });
        });
    }
});
