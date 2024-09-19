document.getElementById('search').addEventListener('input', function() {
    let query = this.value.toLowerCase();
    let articles = document.querySelectorAll('article');

    articles.forEach(function(article) {
        let tags = article.getAttribute('data-tags');
        if (tags.includes(query)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
});
