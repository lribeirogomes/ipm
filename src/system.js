
var locked = false;
var index = 0;
var stack = []


function lock() {
    if (locked == false) {  // if locked is undefined does this
        //turn screen off
        document.getElementById("bar").style.visibility = "hidden";
        document.getElementById("display").style.visibility = "hidden";
		
		document.getElementById("clock").style.visibility = "visible";
		document.getElementById("date").style.visibility = "visible";
		
		locked = true;
    }
    else {
        //turn screen on
		document.getElementById("clock").style.visibility = "hidden";
		document.getElementById("date").style.visibility = "hidden";
		
        document.getElementById("bar").style.visibility = "visible";
        document.getElementById("display").style.visibility = "visible";
		
		locked = false;
    }
}


function home() {
	
    if (!locked) {
        index = 0;
	//	stack.splice(0, stack.length); // acho q isto é mais correto mas nao estava a funcionar
		stack.length = 0;

		stack.push ({
			title: 'iRave',
			page: 'iRave',
			display: true
		});
		
        displayPage();
    }
}


function load(t, p, d) {
	
	if (!p && d!==false)		{ p = t; d = true; }
	if (!p)							{ p = t; }
	if (d !== false)				{ d = true; }

	stack.push ({
		title: t,
		page: p,
		display: d
	});
	
	index++;
	
	displayPage();
}


function back(n) {
    if (!locked) {
        if (!n) { n = 1; }

		while(n > 0 && index > 0) {

			if(stack[index-1].display === true) {
				index--;
				n--;
			}
			
			stack.pop();
		}
		
		displayPage();
    }
}


function updateTitle() {
	
	var _title="", n, k;
	
	if (index === 0) {
		_title = stack[index].title;
	}
	else {
		for(n = stack.length-1; stack[n].display !== true && n >= 0; n--);
		for(k = n-1; stack[k].display !== true && k >= 0; k--);	// if (n > 0) {}

		_title = stack[k].title + ' > ' + stack[n].title;
	}
	
	console.log("_title : ", _title);
    document.getElementById("bar").innerHTML = "<h4 id='bar_text'>" + _title + "</h4>";
}


function displayPage() {
	
	console.log("\n stack : ",  stack);

	var _list = document.getElementsByClassName("page");
	var _page = "";
	var i, n, k;
	
    for (i = 0; i < _list.length; i++) {
        _list[i].style.display = "none";
    }
	
	updateTitle();
	
	if (index === 0) {
		_page = stack[index].page;
	}
	else {
		for(n = stack.length -1 ; stack[n].display !== true && n >= 0; n--);
		for(k = n-1; stack[k].display !== true && k >= 0; k--);
		
		_page = stack[k].page + '_' + stack[n].page;
	}
	
	console.log("_page : ", _page);
	
	_list = document.getElementsByClassName(_page);
	for (i = 0; i < _list.length; i += 1) {
		_list[i].style.display = 'block';
	}
	
}


function alternativeLoad(_page) {
	var _list = document.getElementsByClassName("page");
	var i, n, k;
	
    for (i = 0; i < _list.length; i++) {
        _list[i].style.display = "none";
    }
	
	updateTitle();
	
	console.log("Alt _page : ", _page);
	
	_list = document.getElementsByClassName(_page);
	for (i = 0; i < _list.length; i += 1) {
		_list[i].style.display = 'block';
	}
	
}

function GetChar(e) {
	  e = e || event
	  switch(e.keyCode) {
	  case 37: // left
	    back()
	    return false;
	  case 39: // right
      lock()
	    return false;
	  case 40: // down
	    home();
	    return false;
	  }
}
