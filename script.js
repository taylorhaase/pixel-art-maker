var penColor="black";
function setPenColor(pen){
    penColor = pen;
};

function setPixelColor(pixel){
    pixel.style.backgroundColor= penColor;
};

var currentColor="black";
function setCurrentColor() {
    let currentColor = this.id;
    penColor.style.backgroundColor = penColor;
}