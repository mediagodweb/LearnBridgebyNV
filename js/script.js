function handleSearch() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    if (searchQuery.includes('college admission')) {
        window.location.href = 'collegeadmission.html';
    } else if (searchQuery.includes('study abroad')) {
        window.location.href = 'studyabroad.html';
    } else if (searchQuery.includes('credit transfer')) {
        window.location.href = 'credittransfer.html';
    } else {
        alert('No results found for: ' + searchQuery);
    }
}

document.getElementById('home-button').addEventListener('click', function() {
    window.location.href = 'index.html';
});

function handleSearch() {
    // Your search handling code
}

type="module"
        import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
        mermaid.initialize({ startOnLoad: true });
