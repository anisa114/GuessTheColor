

var numberSquares=6;
var colors =[];
var pickedColor;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.getElementById("message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");


init();

function init(){
		setupModeButtons();
		setupSquares();
		reset();
}
function setupSquares(){

	// EventListeners for Event Squares
		for(var i=0;i<squares.length;i++)

		{	//add click listeners to squares
			squares[i].addEventListener("click",function(){
			//grab color of clicked square
			var colorClicked=this.style.backgroundColor;
			//compare color to pickedColor
			if(colorClicked===pickedColor){
				messageDisplay.textContent="Correct"
				changeColors(colorClicked);
				h1.style.background=colorClicked;
				resetButton.textContent="Play Again?"
			}
			else
			{

				this.style.backgroundColor="#232323";
				messageDisplay.textContent="Try Again"
			}

			});
		}
}

function setupModeButtons(){

	// Mode Buttons event Listeners
		for(var i=0;i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			// Alternative for an if statement
			this.textContent === "Easy" ? numberSquares= 3: numberSquares =6;
			reset();
		});
	}
}


function reset(){
	//When clicked, generate all new colors
	colors =generateRandomColors(numberSquares);
	//pick a random color from array
	pickedColor=pickColor();
	//change colorDisplay to pickedColor
	colorDisplay.textContent=pickedColor;
	// Reset button content from "Play Again" to "New Colors"
	resetButton.textContent="New colors"
	messageDisplay.textContent="";
	//change colors of squares on the page
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i]){
		//add colors to squares
		squares[i].style.display="block";
		squares[i].style.backgroundColor=colors[i];
		}

		else{
			squares[i].style.display="none";
		}

	}
	//Reset h1 color to go back to black or original color;
	h1.style.background="steelblue";
	}


resetButton.addEventListener("click",function(){
reset();
});


function changeColors(color){

	//loop through all squares
	for(var i=0;i<squares.length;i++)
	{
		//change color to match given color
		squares[i].style.backgroundColor=color;
	}

}

function pickColor(){
//Pick a random number
var random= Math.floor(Math.random()* colors.length);
//Access a  random color from the array and return that random color
	return colors[random];
}


function generateRandomColors(num){
//Make an array
var arr=[];
//Add num random colors to that array/ repeat num times
for(var i=0;i<num;i++){
	//get Random color and push into arr
	arr[i]=randomColor();
}
//return that array
return arr;
}

function randomColor(){
	//pick a "red" from 0- 255
	var r=Math.floor(Math.random() * 256)
	//pick a "green" from 0-255
	var g=Math.floor(Math.random() * 256)
	//pick a "blue" from 0-255
	var b=Math.floor(Math.random() * 256)
	var result="rgb("+ r +", "+ g +", "+ b +")";
	return result;

}













