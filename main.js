var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
var width=screen.width;
newwidth=screen.width-70
newhieght=screen.hieght-300
if (width<922) {
document.getElementById("myCanvas").width=newwidth
document.getElementById("myCanvas").hieght=newhieght
document.body.style.overflow="hidden";
}
    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
     color = document.getElementById("color").value; width_of_line = document.getElementById("width_of_line").value; 
     positionx=e.touches[0].clientX-canvas.offsetLeft;
     positiony=e.touches[0].clientY-canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
    currentx=e.touches[0].clientX-canvas.offsetLeft;
    currenty=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    ctx.moveTo(positionx,positiony);
    ctx.lineTo(currentx,currenty);
    ctx.stroke();
    positionx=currentx;
    positiony=currenty;
    }

   