// Media filtering with pagination functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const videoItems = document.querySelectorAll('.video-item');
    const pagination = document.getElementById('pagination');
    const resultsCount = document.getElementById('resultsCount');
    const mediaGrid = document.getElementById('mediaGrid');
    
    let currentFilter = 'all';
    let currentPage = 1;
    const itemsPerPage = 12;
    let filteredItems = [];
    
    // Initialize
    init();
    
    function init() {
        // Add click handlers to filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Update filter and reset to page 1
                currentFilter = this.getAttribute('data-filter');
                currentPage = 1;
                
                // Apply filter and pagination
                updateDisplay();
            });
        });
        
        // Initial display
        updateDisplay();
    }
    
    function updateDisplay() {
        // Filter items
        filteredItems = Array.from(videoItems).filter(item => {
            return currentFilter === 'all' || item.getAttribute('data-category') === currentFilter;
        });
        
        // Calculate pagination
        const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        
        // Hide all items first
        videoItems.forEach(item => {
            item.classList.add('fade-out');
            setTimeout(() => {
                item.classList.add('hidden');
            }, 300);
        });
        
        // Show filtered items for current page
        setTimeout(() => {
            filteredItems.slice(startIndex, endIndex).forEach(item => {
                item.classList.remove('hidden');
                setTimeout(() => {
                    item.classList.remove('fade-out');
                }, 10);
            });
        }, 310);
        
        // Update results count
        const showingEnd = Math.min(endIndex, filteredItems.length);
        resultsCount.textContent = `Showing ${startIndex + 1}-${showingEnd} of ${filteredItems.length} videos`;
        
        // Update pagination
        updatePagination(totalPages);
        
        // Scroll to top of media grid
        mediaGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    function updatePagination(totalPages) {
        pagination.innerHTML = '';
        
        if (totalPages <= 1) {
            return;
        }
        
        // Previous button
        const prevLi = document.createElement('li');
        prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
        prevLi.innerHTML = `<a class="page-link" href="#" aria-label="Previous"><i class="bi bi-chevron-left"></i></a>`;
        prevLi.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentPage > 1) {
                currentPage--;
                updateDisplay();
            }
        });
        pagination.appendChild(prevLi);
        
        // Page numbers
        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, startPage + 4);
        
        if (endPage - startPage < 4) {
            startPage = Math.max(1, endPage - 4);
        }
        
        // First page and ellipsis
        if (startPage > 1) {
            addPageNumber(1);
            if (startPage > 2) {
                const ellipsis = document.createElement('li');
                ellipsis.className = 'page-item disabled';
                ellipsis.innerHTML = '<span class="page-link">...</span>';
                pagination.appendChild(ellipsis);
            }
        }
        
        // Page numbers
        for (let i = startPage; i <= endPage; i++) {
            addPageNumber(i);
        }
        
        // Last page and ellipsis
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                const ellipsis = document.createElement('li');
                ellipsis.className = 'page-item disabled';
                ellipsis.innerHTML = '<span class="page-link">...</span>';
                pagination.appendChild(ellipsis);
            }
            addPageNumber(totalPages);
        }
        
        // Next button
        const nextLi = document.createElement('li');
        nextLi.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
        nextLi.innerHTML = `<a class="page-link" href="#" aria-label="Next"><i class="bi bi-chevron-right"></i></a>`;
        nextLi.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentPage < totalPages) {
                currentPage++;
                updateDisplay();
            }
        });
        pagination.appendChild(nextLi);
    }
    
    function addPageNumber(pageNum) {
        const li = document.createElement('li');
        li.className = `page-item ${pageNum === currentPage ? 'active' : ''}`;
        li.innerHTML = `<a class="page-link" href="#">${pageNum}</a>`;
        li.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = pageNum;
            updateDisplay();
        });
        pagination.appendChild(li);
    }
});