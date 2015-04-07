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
        title = stack[0];
        break;
    default:
        title = stack[0] + " > " + stack[index - 1];
    }
    document.getElementById('Title').innerHTML = "<h2>" + title + "</h2>";

    // print selected div
    list = document.getElementsByClassName(page);
    for (i = 0; i < list.length; i += 1) {
        list[i].style.display = "block";
    }
}

function back() {
    "use strict";
    if (index === 0) {
        return;
    }

    // return to previous div
    index -= 1;
    refresh(stack[index]);
}

function load(page) {
    "use strict";
    // clean index
    if (page === "Home" || page === "Day") {
        index = 0;
        refresh(page);
        return;
    }

    // save value into stack
    stack[index] = page;
    index += 1;

    // print selected div
    if (index === 3) {
        refresh(stack.join('_'));
    } else {
        refresh(page);
    }
}
