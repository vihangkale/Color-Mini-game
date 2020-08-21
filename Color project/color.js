var colors = [ 
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(255, 0, 255)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",

]

var squares = document.querySelectorAll(".square");
var pickedColor =pickColor(); //pick a color
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")

colorDisplay.textContent =pickedColor;
for(var i=0; i<squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click lsiteners to squares
	squares[i].addEventListener("click",function()  {
		
	//grabbed clicked color square
	var clickedColor = this.style.backgroundColor;
	//compare color to clicked color
	if(clickedColor === pickedColor) {
		messageDisplay.textContent ="Correct";
		changeColors(clickedColor);
	}
	else {
		this.style.backgroundColor="#232323";
		messageDisplay.textContent = "Try again! You can do it!";
	}

	});
	
}

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color; 
	}
}


	function pickColor() { //Math.random() : returns random number less than 1  
	var random = Math.floor(Math.random()* colors.length)   //picks a random number
	return colors[random];
}	


