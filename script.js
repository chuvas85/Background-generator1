//var button = document.getElementById("enter");

//var input = document.getElementById("userinput");

var Boton = document.getElementsByTagName("button")[0];
var input = document.getElementsByTagName("input")[0];
var ul = document.querySelector("ul");

Boton.addEventListener("click", function(){
	console.log(input.value);
	//if(input.value.lenght >0){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	//}
})




/*button.addEventListener("click", function(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode("Testing"));
	ul.appendChild(li);
})*/