// ===========================================
// 1. Array to store the movie watchlist
// ===========================================
let movieWatchlist = [];

// ===========================================
// 2. Function to display the list of movies
// (Requirement: Write a function to display the list)
// ===========================================
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
        
        // Attach the remove functionality to the button
        // We pass the movie index to know which item to remove
        removeBtn.onclick = () => removeMovie(index); 
        
        // Assemble the list item
        li.appendChild(titleSpan);
        li.appendChild(removeBtn);
        
        // Add the new item to the main list
        movieListElement.appendChild(li);
    });
}

// ===========================================
// 3. Function to add movies to the array
// (Requirement: Function to add movies to an array)
// ===========================================
function addMovie() {
    const movieInput = document.getElementById('movie-name');
    const movieTitle = movieInput.value.trim();

    // Basic validation
    if (movieTitle === '') {
        alert('Please enter a valid movie title.');
        return;
    }

    // Add the movie title to the array
    movieWatchlist.push(movieTitle); 
    
    // Clear the input field
    movieInput.value = '';

    // Update the display immediately
    displayWatchlist(); 
}

// ===========================================
// 4. Function to remove movies from the watchlist
// (Requirement: Function to allow users to remove movies)
// ===========================================
function removeMovie(index) {
    // Use the array's splice method to remove the movie at the given index
    // splice(startIndex, deleteCount)
    movieWatchlist.splice(index, 1); 
    
    // Update the display immediately
    displayWatchlist();
}

// ===========================================
// 5. Initial setup and Event Listeners
// ===========================================
document.addEventListener('DOMContentLoaded', () => {
    // Display the list when the page first loads (will show "empty" message)
    displayWatchlist();

    // Get the Add Movie button element
    const addMovieBtn = document.getElementById('add-movie-btn');

    // Attach the addMovie function to the button click event
    addMovieBtn.addEventListener('click', addMovie);

    // Optional: Allow pressing Enter key in the input field to add the movie
    const movieInput = document.getElementById('movie-name');
    movieInput.addEventListener('keypress', (event) => {
        // Key code 13 is the Enter key
        if (event.key === 'Enter') {
            addMovie();
        }
    });
});