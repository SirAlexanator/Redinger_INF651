
let movieWatchlist = [];


function displayWatchlist() {
    const movieListElement = document.getElementById('movie-list');
    
    // Clear the current list content
    movieListElement.innerHTML = '';

    if (movieWatchlist.length === 0) {
        movieListElement.innerHTML = '<li class="collection-item center-align grey-text">Your watchlist is empty! Add a movie.</li>';
        return;
    }

    // Loop through the array and create list items dynamically
    movieWatchlist.forEach((movie, index) => {
        const li = document.createElement('li');
        li.className = 'collection-item';
        
        // Movie Title
        const titleSpan = document.createElement('span');
        titleSpan.className = 'movie-title';
        titleSpan.textContent = movie;
        
        // Remove Button (Mark as Watched)
        const removeBtn = document.createElement('i');
        removeBtn.className = 'material-icons remove-btn';
        removeBtn.textContent = 'check_circle_outline'; // Materialize icon for 'watched'
        removeBtn.onclick = () => removeMovie(index); 
        li.appendChild(titleSpan);
        li.appendChild(removeBtn);
        movieListElement.appendChild(li);
    });
}


function addMovie() {
    const movieInput = document.getElementById('movie-name');
    const movieTitle = movieInput.value.trim();

    if (movieTitle === '') {
        alert('Please enter a valid movie title.');
        return;
    }
    movieWatchlist.push(movieTitle); 
    movieInput.value = '';
    displayWatchlist(); 
}

function removeMovie(index) {

    movieWatchlist.splice(index, 1); 

    displayWatchlist();
}


document.addEventListener('DOMContentLoaded', () => {
    // Display the list when the page first loads (will show "empty" message)
    displayWatchlist();

    const addMovieBtn = document.getElementById('add-movie-btn');
    addMovieBtn.addEventListener('click', addMovie);
    const movieInput = document.getElementById('movie-name');
    movieInput.addEventListener('keypress', (event) => {
        // Key code 13 is the Enter key
        if (event.key === 'Enter') {
            addMovie();
        }
    });
});