/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("oooo developer console so coool :)");
const buttoncount = 0;

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
