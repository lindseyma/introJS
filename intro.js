var b = document.getElementById("b");

var f = function(){
	var ol = document.getElementById("thelist");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode("New Thing!"));
	ol.appendChild(li);
}

b.addEventListener("click", f);
