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
    case 0:
        title = page;
        break;
    case 1:
        title = page;
        break;
    case 2:
        title = stack[1];
        break;
    default:
        title = stack[1] + " > " + stack[index - 1];
    }
    document.getElementById('Title').innerHTML = "<h2>" + title + "</h2>";

    if (index == 3 && stack[1] != "Stages") {
		page = stack[1] + "_" + stack[2];
	}

    // print selected div
    list = document.getElementsByClassName(page);
    for (i = 0; i < list.length; i += 1) {
        list[i].style.display = "block";
    }
}

function back() {
    "use strict";
    // return home
    if (index === 0) {
        refresh("Home");
        return;
    }

    // return to previous div
    index -= 1;
    stack.splice(index,1);
    refresh(stack[index - 1]);
}

function load(page) {
    "use strict";
    // clean index
    if (page === "Home") {
        index = 0;
        stack = [];
        refresh(page);
        return;
    }
    
    if (page === "Day") {
        index = 1;
        stack = [page];
        refresh(page);
        return;
    }

    // save value into stack
    stack[index] = page;
    index += 1;

    // print selected div
    if (index === 4) {
        refresh(stack.join('_'));
    } else {
        refresh(page);
    }
}
