var css = document.querySelector("h3");
var c0 = document.querySelector(".c0");
var c1 = document.querySelector(".c1");
var body = document.getElementById("gradient");

console.log(css);
console.log(body.style);
console.log(c0.value);
console.log(c1.value);

//useful input event: input
function changeColor() {
	/*var c = e.target;
	console.log(c.name +": " + c.value);*/
	body.style.background = 
	"linear-gradient(to right, " 
	+ c0.value 
	+ ", " 
	+ c1.value 
	+ ")";
	
	css.textContent = body.style.background + ";";
}

c0.addEventListener("input", changeColor);
c1.addEventListener("input", changeColor);