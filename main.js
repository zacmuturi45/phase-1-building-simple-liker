// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let glyph = document.querySelectorAll('.like-glyph');
let post = document.querySelector('.media-post');
glyph.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    mimicServerCall()
    .then((data) => {
      
        element.innerHTML===FULL_HEART || element.className==="like-glyph activated-heart" ? element.innerHTML = EMPTY_HEART : element.innerHTML = FULL_HEART, element.className = 'activated-heart';
        element.classList.add('like-glyph');

      
    })
    .catch((error) => {
      const p = document.querySelector('div#modal h2');
      const d = document.querySelector('div#modal');
      p.textContent = error;
      d.classList.remove('hidden');
      setTimeout(() => d.classList.add('hidden'), 3000);
      element.innerHTML = EMPTY_HEART;
    });
  });
});

 




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
