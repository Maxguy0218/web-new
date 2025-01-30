$(document).ready(function() {
    // Simulated articles data
    const articles = [
        { id: "challanges", title: "What are the main challenges a CLM implementation can help address?" },
        { id: "need", title: "How did you know your organization needed CLM?" },
        { id: "conga", title: "What is Conga ?" },
        { id: "other", title: "What other business systems do CLM solutions integrate with? " },
        { id: "vendor", title: "How do you select a CLM vendor? " },
        { id: "roi", title: "How can you measure ROI from CLM?" },
        { id: "Agiloft", title: "Agiloft" },
    ];

    // Search functionality
    $('#searchInput'). on('input', function() {
        const searchTerm = $(this).val().toLowerCase();
        $('#results').empty();

        const filteredArticles = articles.filter(article => 
            article.title.toLowerCase().includes(searchTerm)
        );

        if (filteredArticles.length > 0) {
            filteredArticles.forEach(article => {
                $('#results').append(`
                    <div class="article-item">
                        <a href="${article.id}.html">${article.title}</a>
                    </div>
                `);
            });
        } else {
            $('#results').append('<div>No articles found.</div>');
        }
    });
});