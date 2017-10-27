
function loadHelloWorld(){

var box1 = document.getElementById("box-1");

var xhr = new XMLHttpRequest();
xhr.addEventListener("load", ajaxLoad);
xhr.addEventListener("error", ajaxError);
xhr.open("GET", "hello-world.html");
xhr.send();


function ajaxLoad(event) {
    if (this.status === 200) {
        
        box1.innerHTML = this.responseText;
        alert(this.responseText);
    } 

    else {
        console.log("unsuccessful request");
    }
}

function ajaxError(event) {
    console.log('error');
}
}


function loadLorumIpsum(){

var box2 = document.getElementById("box-2");

var xhr = new XMLHttpRequest();
xhr.addEventListener("load", ajaxLoad);
xhr.addEventListener("error", ajaxError);
xhr.open("GET", "random-lorum-ipsum-text.txt");
xhr.send();


function ajaxLoad(event) {
    if (this.status === 200) {
        
        box2.innerHTML = this.responseText;
    } 

    else {
        console.log("unsuccessful request");
    }
}

function ajaxError(event) {
    console.log('error');
}
}


function loadImage(){

var box3 = document.getElementById("box-3");
var image = document.getElementById("image");

var xhr = new XMLHttpRequest();
xhr.addEventListener("load", ajaxLoad);
xhr.addEventListener("error", ajaxError);
xhr.open("GET", "image.png");
xhr.send();


function ajaxLoad(event) {
    if (this.status === 200) {
        
        image.src = "image.png";
    } 

    else {
        console.log("unsuccessful request");
    }
}

function ajaxError(event) {
    console.log('error');
}
}