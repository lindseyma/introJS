var b = document.getElementById("b");
var l = document.getElementsByTagName("li");
var h = document.getElementById("h");
var ob = document.getElementById("ob");


for(var i=0; i<l.length; i++){
    l[i].addEventListener("click", rm);
		l[i].addEventListener("mouseover", console.log("mouseover"));
		l[i].addEventListener("mouseover", replace);
		l[i].addEventListener("mouseout", console.log("mouseout"));
		l[i].addEventListener("mouseout", replace2);
};

var f = function(){
	var ol = document.getElementById("thelist");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode("New Thing!"));
	ol.appendChild(li);
	for(var i=0; i<l.length; i++){
	  l[i].addEventListener("click", rm);
		l[i].addEventListener("mouseover", console.log("mouseover"));
		l[i].addEventListener("mouseover", replace);
		l[i].addEventListener("mouseout", console.log("mouseout"));
		l[i].addEventListener("mouseout", replace2);
	};
};

b.addEventListener("click", f);


var rm = function(){
    this.remove();
    console.log(this);
};


var fib = function(){
    var fi = document.getElementsbyTagName("li");
    var newFib = document.createElement('li');
    if(fi.length<2){
	newFib.innerHTML=1;
    }
    else{
	newFib.innerHTML = fi(n-1) + fi(n-2);
    }
};

var replace = function(){
	h.innerHTML = this.innerHTML;
}
var replace2 = function(){
	h.innerHTML = "Hello World!";
}

ob.addEventListener("click", fib);
	    
