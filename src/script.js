var index = 0;
var stack = [];

function refresh(page) {
    "use strict";
    // clean all div's
    var list = document.getElementsByClassName("page"),
        i,
        title;
    for (i = 0; i < list.length; i += 1) {
        list[i].style.display = "none";
    }

    switch (index) {
    case 1:
        title = page;
        break;
    default:
        title = stack[index - 2] + " > " + stack[index - 1];
        break;
    }
    if (index >= 4) {
		page = stack[2] + "_" + stack[index - 1];
	}
    document.getElementById('Title').innerHTML = "<h4>" + title + "</h4>";

    // print selected div
    list = document.getElementsByClassName(page);
    for (i = 0; i < list.length; i += 1) {
        list[i].style.display = "block";
    }
}

function back() {
    "use strict";
    // return home
    if (index === 1) {
        return;
    }

    // return to previous div
    index -= 1;
    refresh(stack[index - 1]);
}

function home() {
    index = 1;
    stack = ["iRave"];
    refresh("iRave");
    return;
}

function load(page) {
    "use strict";
    // save value into stack
    stack[index] = page;
    index += 1;

    // print selected div
    refresh(page);
}

function GetChar(e) {
	  e = e || event
	  switch(e.keyCode) {
	  case 37: // left
	    back()
	    return false;
	  case 39: // right

	    return false;
	  case 40: // down
	    home();
	    return false;
	  }
}
