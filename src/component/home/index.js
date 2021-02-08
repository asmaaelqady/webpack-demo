var sliderImg = document.getElementById("imgTage");
var images = ["/src/assets/1.jpg", "/src/assets/2.jpg", "/src/assets/3.jpg", "/src/assets/4.jpg", "/src/assets/5.jpg", "/src/assets/6.jpg"];
var i = 0;
var type ;

function prve(){
    
    if(i != 0){
    i--;
    document.getElementById("imgTage").setAttribute("src",images[i]);}
}
function next(){
    
    if(i != images.length - 1){
    i++;
    document.getElementById("imgTage").setAttribute("src",images[i]);
    }
}
function showslider(){
   
 type = setInterval( function(){

     if(i >= images.length-1){
        i = -1;
     }
     i++;
     document.getElementById("imgTage").setAttribute("src",images[i]);
     
 },2000);
}
function stopslider(){
    clearInterval(type);
}