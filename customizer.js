function changeColor(color){

let shirt = document.getElementById("shirt")

if(color=="black"){
shirt.style.filter="brightness(0.2)"
}

else if(color=="blue"){
shirt.style.filter="hue-rotate(180deg)"
}

else if(color=="red"){
shirt.style.filter="hue-rotate(330deg)"
}

else if(color=="green"){
shirt.style.filter="hue-rotate(90deg)"
}

else if(color=="yellow"){
shirt.style.filter="sepia(1) saturate(5)"
}

else{
shirt.style.filter="none"
}

}