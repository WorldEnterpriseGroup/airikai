// Media filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all filter buttons and video items
    const filterButtons = document.querySelectorAll('[data-filter]');
    const videoItems = document.querySelectorAll('.video-item');
    
    // Add click event to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter videos
            videoItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    // Trigger reflow for animation
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Add transition styles to all video items
    videoItems.forEach(item => {
        item.style.transition = 'all 0.3s ease';
    });
});