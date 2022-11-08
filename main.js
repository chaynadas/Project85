var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");

var greencar_width = 100;
var greencar_height = 160;

 var background_image = "parkingLot.jpg";
var greencar_image = "car2.png";


var greencar_x = 100;
var greencar_y = 100;

function add() {
	//upload car, and background images on the canvas.
    function add() {
    var background_Tag = new Image();
   background_Tag.onload = uploadBackground;
   background_Tag.src = background_image;
    
    var greencar_imageTag = new Image();
    greencar_imageTag.onload = uploadgreencar;
    greencar_imageTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
    ctx.drawImage(background_Tag, 0, 0, 1000, 600);
}
    
function uploadgreencar() {
	//Define function ‘uploadgreencar’.
    ctx.drawImage(greencar_imageTag , greencar_x , greencar_y, greencar_width, greencar_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
    if (greencar_y >= 0){
       greencar_y = greencar_y - 10;
       uploadBackground();
        uploadgreencar();
    }
}

function down()
{
	
    if (greencar_y <= 440){
       greencar_y = greencar_y + 10;
       uploadBackground();
        uploadgreencar();
    }
}

function left()
{
	
    if (greencar_x >= 0){
       greencar_x = greencar_x - 10;
       uploadBackground();
        uploadgreencar();
    }
}

function right()
{
	
    if (greencar_x <= 900){
       greencar_x = greencar_x + 10;
       uploadBackground();
        uploadgreencar();
    }
}
