var b = document.getElementById("b");
var l = document.getElementsByTagName("li");
var ob = document.getElementById("ob");
var f = function(){
	var ol = document.getElementById("thelist");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode("New Thing!"));
	ol.appendChild(li);
	for(var i=0; i<l.length; i++){
	    l[i].addEventListener("click", rm);
	}
};

b.addEventListener("click", f);

for(var i=0; i<l.length; i++){
    l[i].addEventListener("click", rm);
    console.log("hey");
};

var rm = function(){
    this.remove();
    console.log(this);
};


var fib = function(){
    var fi = ???.getElementsbyTagName("li");
    var newFib = document.createElement('li');
    if(fi.length<2){
	newFib.innerHTML=1;
    }
    else{
	newFib.innerHTML = fi(n-1) + fi(n-2);
    }
};

ob.addEventListener("click", fib);
	    
