

let img;
function preload() {
  // img = loadImage("../image/bg.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    // image(img, 0, 0);
  }

function draw() {
    
    let x = mouseX;
    let y = mouseY;
    let ix = width - mouseX;  // Inverse X
    let iy = height - mouseY; // Inverse Y
    background(30)
    fill(255, 200);
    ellipse(x, height/2, y, y);
    fill(0, 240);
    ellipse(ix, height/2, iy, iy);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

 function initialize() {
    var fenway = {lat: 42.345573, lng: -71.098326};
    var map = new google.maps.Map(document.getElementById('map'), {
      center: fenway,
      zoom: 14
    });
    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
          position: fenway,
          pov: {
            heading: 34,
            pitch: 10
          }
        });
    map.setStreetView(panorama);
  }

  function toggle() {
    var x = document.getElementById("myDIV");
    if (x.innerHTML === "ok"){
      x.innerHTML = "Hello";
      x.style.color = "white";
    }
    else if (x.innerHTML === "Hello"){
      x.style.color = "transparent";
      x.innerHTML = "Hello<br>";
    } 
    else if (x.innerHTML === "Hello<br>") {
      x.style.color = "white";
      x.innerHTML = "Welcome to Objective View-World.";
    } 
    else if(x.innerHTML === "Welcome to Objective View-World."){
      x.style.color = "transparent";
      x.innerHTML = "Welcome to Objective View-World.<br>";
    } 
    else if(x.innerHTML === "Welcome to Objective View-World.<br>"){
      x.style.color = "white";
      x.innerHTML = "This is a place to review the world with non-human centric perspective.";
    } 
    else if(x.innerHTML === "This is a place to review the world with non-human centric perspective."){
      x.style.color = "transparent";
      x.innerHTML = "This is a place to review the world with non-human centric perspective.<br>";
    } 
    else if(x.innerHTML === "This is a place to review the world with non-human centric perspective.<br>"){
      x.style.color = "white";
      x.innerHTML = "";
      var btn = document.createElement("BUTTON");
      btn.innerHTML = "Start your life";
      var a = document.createElement("A");
      a.href = "scene.html";
      a.appendChild(btn);
      x.appendChild(a);
    } 

  }