
var	yPos = 0,
		xPos = 0,
		mouseDown = false,
		isDrag = false,
		outOfBorder = true,
		target=document.getElementById("display");
		

target.addEventListener('mousedown',	mouseDownHandler);
target.addEventListener('mousemove',	mouseMoveHandler);
target.addEventListener('mouseup',		mouseUpHandler);
target.addEventListener("mouseleave",	mouseLeaveHandler);


function verifyClick(object0, object1) {
	if (isDrag === false && outOfBorder===false) {
		load(object0, object1);
	}
}


function mouseDownHandler(e){
	mouseDown = true;
	isDrag = false;
	outOfBorder = false;
	yPos = e.pageY;
	xPos = e.pageX;
}


function mouseMoveHandler(e){ 
	if (mouseDown === true){
		if ((yPos - e.pageY) < -5 || (yPos - e.pageY) > 5 || (xPos - e.pageX) < -5 || (xPos - e.pageX) > 5) {
			isDrag = true;
			target.scrollTop = target.scrollTop + 0.1*(yPos - e.pageY);
		}
	}
}


function mouseUpHandler(e){
	mouseDown = false;
}


function mouseLeaveHandler(e){
	mouseDown = false;
	outOfBorder = true;
}
