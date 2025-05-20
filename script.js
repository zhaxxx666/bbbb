
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Testimonial slider
    const dots = document.querySelectorAll('.dot');
    const testimonials = document.querySelectorAll('.testimonial');
    
    if (dots.length > 0 && testimonials.length > 0) {
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                
                // Hide all testimonials and remove active class from dots
                testimonials.forEach(item => item.classList.remove('active'));
                dots.forEach(item => item.classList.remove('active'));
                
                // Show selected testimonial and add active class to dot
                testimonials[index].classList.add('active');
                this.classList.add('active');
            });
        });
        
        // Auto-rotate testimonials every 5 seconds
        let currentIndex = 0;
        setInterval(function() {
            currentIndex = (currentIndex + 1) % testimonials.length;
            
            // Hide all testimonials and remove active class from dots
            testimonials.forEach(item => item.classList.remove('active'));
            dots.forEach(item => item.classList.remove('active'));
            
            // Show next testimonial and add active class to dot
            testimonials[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');
        }, 5000);
    }
    
    // Menu tabs
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuItems = document.querySelectorAll('.menu-items');
    
    if (menuTabs.length > 0 && menuItems.length > 0) {
        menuTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                
                // Hide all menu items and remove active class from tabs
                menuItems.forEach(item => item.classList.add('hidden'));
                menuTabs.forEach(item => item.classList.remove('active'));
                
                // Show selected menu items and add active class to tab
                document.getElementById(category).classList.remove('hidden');
                this.classList.add('active');
            });
        });
    }
    
    // Gallery filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Remove active class from all buttons
                filterButtons.forEach(item => item.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Show all items if filter is 'all', otherwise filter by category
                if (filter === 'all') {
                    galleryItems.forEach(item => item.style.display = 'block');
                } else {
                    galleryItems.forEach(item => {
                        if (item.getAttribute('data-category') === filter) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                }
            });
        });
    }
    
    // Lightbox functionality for gallery
    const galleryItemsWithLightbox = document.querySelectorAll('.gallery-item');
    const lightbox = document.querySelector('.lightbox');
    
    if (galleryItemsWithLightbox.length > 0 && lightbox) {
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.querySelector('.lightbox-caption');
        const closeLightbox = document.querySelector('.close-lightbox');
        const lightboxPrev = document.querySelector('.lightbox-prev');
        const lightboxNext = document.querySelector('.lightbox-next');
        
        let currentImageIndex = 0;
        
        // Open lightbox on gallery item click
        galleryItemsWithLightbox.forEach((item, index) => {
            item.addEventListener('click', function() {
                const img = this.querySelector('img');
                const caption = this.querySelector('h3').textContent;
                const description = this.querySelector('p').textContent;
                
                currentImageIndex = index;
                lightboxImg.src = img.src;
                lightboxCaption.innerHTML = `<h3>${caption}</h3><p>${description}</p>`;
                lightbox.style.display = 'flex';
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            });
        });
        
        // Close lightbox
        closeLightbox.addEventListener('click', function() {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling
        });
        
        // Close lightbox on outside click
        lightbox.addEventListener('click', function(event) {
            if (event.target === lightbox) {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto'; // Enable scrolling
            }
        });
        
        // Navigate to previous image
        lightboxPrev.addEventListener('click', function(event) {
            event.stopPropagation();
            currentImageIndex = (currentImageIndex - 1 + galleryItemsWithLightbox.length) % galleryItemsWithLightbox.length;
            updateLightboxContent();
        });
        
        // Navigate to next image
        lightboxNext.addEventListener('click', function(event) {
            event.stopPropagation();
            currentImageIndex = (currentImageIndex + 1) % galleryItemsWithLightbox.length;
            updateLightboxContent();
        });
        
        // Update lightbox content
        function updateLightboxContent() {
            const item = galleryItemsWithLightbox[currentImageIndex];
            const img = item.querySelector('img');
            const caption = item.querySelector('h3').textContent;
            const description = item.querySelector('p').textContent;
            
            lightboxImg.src = img.src;
            lightboxCaption.innerHTML = `<h3>${caption}</h3><p>${description}</p>`;
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', function(event) {
            if (lightbox.style.display === 'flex') {
                if (event.key === 'Escape') {
                    lightbox.style.display = 'none';
                    document.body.style.overflow = 'auto'; // Enable scrolling
                } else if (event.key === 'ArrowLeft') {
                    currentImageIndex = (currentImageIndex - 1 + galleryItemsWithLightbox.length) % galleryItemsWithLightbox.length;
                    updateLightboxContent();
                } else if (event.key === 'ArrowRight') {
                    currentImageIndex = (currentImageIndex + 1) % galleryItemsWithLightbox.length;
                    updateLightboxContent();
                }
            }
        });
    }
});
