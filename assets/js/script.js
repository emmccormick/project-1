// Create global variable for each button that captures their value
// TO DO: need to update the querySelector using the html class of btns
var dogBtn = document.querySelector('button')
console.log(dogBtn)
var dogBtnValue = document.querySelector('button').value;


dogBtn.addEventListener('click', gifFunction)
dogBtn.addEventListener('click', picFunction)

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
        //console.log(response.data[0]);
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
function picFunction() {
  // using this dogBreed var as a placeholder to try and get the wiki api link to work
  //var dogBreed = "shiba"
  var pictureUrl = 'https://dog.ceo/api/breed/shiba/images'

  console.log(pictureUrl)

  fetch(pictureUrl)

    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response.message[0]);
        // DONE: a variable that will select the <div> where the GIF will be displayed
        var picResponseContainerEl = document.querySelector('#pic-response-container');
    
        var picImg = document.createElement('img');
        picImg.setAttribute('src', response.message[0]);
  
        // Append 'picImg' to the <div>
        picResponseContainerEl.appendChild(picImg);
    });
  }