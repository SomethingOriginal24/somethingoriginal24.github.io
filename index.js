/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("oooo developer console so coool :)");
const buttoncount = 0;

const motwth_url = 'https://raw.githubusercontent.com/SomethingOriginal24/somethingoriginal24.github.io/motwth.txt'; 
const motdContainer = document.getElementById('motd-container');
const btn = document.querySelector("button"); // Get the button from the page

setTimeout(fixYoutube1, 3000);
setTimeout(fixYoutube2, 3300);


function fixYoutube1() {
  document.getElementById('ytbutton').innerHTML = "wait no"
}

function fixYoutube2() {
  document.getElementById('ytbutton').innerHTML = "this is my youtube"
}

// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } },
    "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => {
    goto(f.dataset.file, f.dataset.line);
  };
});

 
function yoobtoob() {
  location.replace("https://www.youtube.com/@somethingoriginal987")
}

function projects() {
  //  window.open("https://somethingoriginal.glitch.me/projects.html")
  location.replace("/projects/index.html")
}

function fetchMessageOfTheDay() {
    fetch(GITHUB_RAW_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`it broke (status: ${response.status})`);
            }
            return response.text(); 
        })
        .then(data => {
            motdContainer.textContent = data.trim(); 
        })
        .catch(error => {
            console.error('it broke', error);
            motdContainer.textContent = 'something broke, try reloading maybe';
        });
}
fetchMessageOfTheDay();
