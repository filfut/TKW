window.addEventListener("load", function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const headings = document.querySelectorAll('main h2');

    if (!searchInput || !searchButton) {
        console.error("Không thể tìm thấy các phần tử với ID 'searchInput' hoặc 'searchButton'.");
        return;
    }

    function highlightHeadings(query) {
        let found = false;

        headings.forEach(heading => {
            const text = heading.textContent.toLowerCase();
            heading.classList.remove('highlight'); 

            if (query && text.includes(query)) {
                heading.classList.add('highlight'); 
                if (!found) {
                    scrollToHeading(heading); 
                    found = true; 
                }
            }
        });
    }

    function scrollToHeading(heading) {
        heading.scrollIntoView({ behavior: 'smooth' }); 
    }

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase().trim();
        highlightHeadings(query); 
    });

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
});
