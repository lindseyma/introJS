var b = document.getElementById("b");
var l = document.getElementsByTagName("li");

var f = function(){
	var ol = document.getElementById("thelist");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode("New Thing!"));
	ol.appendChild(li);
	for(var i=0; i<l.length; i++){
	    l[i].addEventListener("click", rm);
	}
}

b.addEventListener("click", f);

var rm = function(){
    this.remove()
}

