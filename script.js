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
    case 3:
        title = stack[2];
        break;
    case 4:
        title = stack[2] + " > " + stack[index - 1];
        break;
    case 5:
        title = stack[2] + " > " + stack[index - 1];
        break;
    default:
        title = page;
    }
    document.getElementById('Title').innerHTML = "<h2>" + title + "</h2>";

    if (index == 4 && stack[2] != "Stages") {
		page = stack[2] + "_" + stack[3];
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
    if (index === 1) {
        return;
    }

    // return to previous div
    index -= 1;
    stack.splice(index,1);
    refresh(stack[index - 1]);
}

function home() {
    index = 1;
    stack = ["Home"];
    refresh("Home");
    return;
}

function day() {
    index = 2;
    stack = ["Home","Day"];
    refresh("Day");
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
