var b = document.getElementById("b");
var l = document.getElementsByTagName("li");

var f = function(){
	var ol = document.getElementById("thelist");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode("New Thing!"));
	ol.appendChild(li);
}

b.addEventListener("click", f);

var rm = function(){
	var li = document.getElementsByTagName("li");
	li[0].remove();
}

l[0].addEventListener("click", rm);
