// Create global variable for each button that captures their value
// TO DO: need to update the querySelector using the html class of btns
var dogBtn = document.querySelector('button')
console.log(dogBtn)
var dogBtnValue = document.querySelector('button').value;


dogBtn.addEventListener('click', gifFunction)
dogBtn.addEventListener('click', wikiFunction)

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
        // DONE: a variable that will select the <div> where the GIF will be displayed
        var responseContainerEl = document.querySelector('#gif-response-container');
  
        // Empty out the <div> before we append a GIF to it
        responseContainerEl.innerHTML = '';
  
        var gifImg = document.createElement('img');
        gifImg.setAttribute('src', response.data[0].images.fixed_height.url);
  
        // Append 'gifImg' to the <div>
        responseContainerEl.appendChild(gifImg);
      });
  }

// // API 2 - wikipedia 
function wikiFunction() {
  var dogBreed = "shiba"
  var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=query&format=json&titles=' + dogBreed + 'rnnamespace=0&rnlimit=1&origin=*'
  console.log(wikiUrl)

  fetch(wikiUrl)

    .then(function(wikiResponse) {
      return wikiResponse.json();
    })
    .then(function(wikiResponse) {
      // TO DO: go over this line -- Create a variable to hold the title of the Wikipedia article
      var dogBreedWiki = wikiResponse.query.random[0].title;

      // Display the article title below the GIF as a <h2> heading
      var responseHeaderEl = document.querySelector('#wiki-header');
      responseHeaderEl.innerHTML = '<h2>' + dogBreedWiki + '</h2>';
    });
  }
