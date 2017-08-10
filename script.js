var penColor="black";
function setPenColor(pen){
    penColor = pen;
    let currentColor = document.getElementsByClassName("current")[0];

    currentColor.style.backgroundColor = pen;
};

function setPixelColor(pixel){
    pixel.style.backgroundColor= penColor;
};
