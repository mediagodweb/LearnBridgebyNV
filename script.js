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


