const btn = document.querySelector("button"); // Get the button from the page
if (btn) {
  // Detect clicks on the button
  btn.onclick = function () {
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
  };
}

// ----- GLITCH STARTER PROJECT HELPER CODE -----

// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } },
    "*"
  );
};

const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => {
    goto(f.dataset.file, f.dataset.line);
  };
});

function prof() {
  window.open("/");
}
let buttonf = document.getElementById("prof");
buttonf.onclick = prof;

function twitter() {
  window.open("https://twitter.com/skikozou1596");
}
let button = document.getElementById("twitter");
button.onclick = twitter;

function youtube() {
  window.open("https://www.youtube.com/@skikozou");
}
let button2 = document.getElementById("youtube");
button2.onclick = youtube;

function github() {
  window.open("https://github.com/skikozou");
}
let button3 = document.getElementById("github");
button3.onclick = github;

function start() {
  window.open("https://skikozou.glitch.me/home.html","_self")
  document.cookie = "license=consent";
}

function nolic() {
  alert("じゃあ来んな〜")
  document.cookie = "license=Noconsent";
}