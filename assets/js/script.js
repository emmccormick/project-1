// Create global variable for each button that captures their value
// TO DO: need to update the querySelector using the html class of btns
var dogBtnValue = document.querySelector(button).value;

// API 1 - giphy
function gifFunction() {  
    // Make a `fetch` request concatenating the `button.value` to the query URL
    // TO DO: change out api key with one of our own keys?
    var gifUrl = 'https://api.giphy.com/v1/gifs/search?q=' + dogBtnValue +'&api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&limit=1'
    
    fetch(gifUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        console.log(response.data[0]);
        // TO DO: UPDATE W/ CORRECT HTML: a variable that will select the <div> where the GIF will be displayed
        var responseContainerEl = document.querySelector('#gif-response-container');
  
        // Empty out the <div> before we append a GIF to it
        responseContainerEl.innerHTML = '';
  
        var gifImg = document.createElement('img');
        gifImg.setAttribute('src', response.data[0].images.fixed_height.url);
  
        // Append 'gifImg' to the <div>
        responseContainerEl.appendChild(gifImg);
      });
  }

// API 2 - wikipedia 
function wikiFunction() {
  fetch(
    // Make a fetch request to Wikipedia; 
    // TO DO: update with dogBtnValue var so it returns that instead of random
    'https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnnamespace=0&rnlimit=1&origin=*'
  )
    .then(function(wikiResponse) {
      return wikiResponse.json();
    })
    .then(function(wikiResponse) {
      // TO DO: go over this line -- Create a variable to hold the title of the Wikipedia article
      var searchTerm = wikiResponse.query.random[0].title;

      // Display the article title above the GIF as a <h2> heading
      var responseHeaderEl = document.querySelector('#response-header');
      responseHeaderEl.innerHTML = '<h2>' + searchTerm + '</h2>';

      var rating = document.getElementById('rating').value;