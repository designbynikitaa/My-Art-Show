document.addEventListener('DOMContentLoaded', () => {
    // Get all painting frames
    const frames = document.querySelectorAll('.frame');
    // Get the lightbox elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const closeBtn = document.querySelector('.close-btn');

    // 1. Add click listener to each frame
    frames.forEach(frame => {
        frame.addEventListener('click', () => {
            // Get the full image path from the 'data-full' attribute
            const fullImagePath = frame.getAttribute('data-full');
            
            // Set the image source in the lightbox
            lightboxImage.src = fullImagePath;
            
            // Display the lightbox
            lightbox.style.display = 'flex';
            
            // Optional: Hide body scrollbar when lightbox is open
            document.body.style.overflow = 'hidden';
        });
    });

    // 2. Add click listener to the close button
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
        // Restore body scrollbar
        document.body.style.overflow = 'hidden'; // Kept hidden for the main horizontal scroll
    });

    // 3. Close the lightbox when clicking outside the image
    lightbox.addEventListener('click', (event) => {
        // Check if the click target is the lightbox itself, not the image or close button
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'hidden'; 
        }
    });

    // 4. Close the lightbox with the 'Escape' key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && lightbox.style.display === 'flex') {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'hidden';
        }
    });
});