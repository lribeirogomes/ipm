
var locked = false;
var index = 0;
var pages = ["iRave"];
var titles = ["iRave"];


function updatePage() {
    var list = document.getElementsByClassName("page")
    var i, page, title;

    // hide all pages
    for (i = 0; i < list.length; i++) {
        list[i].style.display = "none";
    }

    // choose the title of the page
    if (index === 0) {
        title = titles[index];
    }
    else{
        title = titles[index - 1] + " > " + titles[index];
    }

    // change the title of the page
    document.getElementById("bar").innerHTML = "<h4 id='bar_text'>" + title + "</h4>";

    // choose the page
    if (pages[index] != titles[index]) {
        page = pages[index]
    }
    else if (index === 0){
        page = titles[index];
    }
    else {
        page = titles[index -1] + "_" + titles[index];
    }

    // show selected page
    list = document.getElementsByClassName(page);
    for (i = 0; i < list.length; i += 1) {
        list[i].style.display = "block";
    }
}


function load(title, page) {
    if (!page) { page = title; }

    index += 1;
    titles[index] = title;
    pages[index] = page;
    updatePage();
}


function back(n) {
    if (!locked) {
        if (!n) { n = 1; }

        if (index - n > -1) {
            index -= n;
            updatePage();
        }
    }
}


function home() {
    if (!locked) {
        index = 0;
        pages = ["iRave"];
        titles = ["iRave"];
        updatePage();
    }
}


function lock() {
    if (locked === false) {
        //turn screen off
        document.getElementById("bar").style.visibility = "hidden";
        document.getElementById("display").style.visibility = "hidden";
		
		document.getElementById("clock").style.visibility = "visible";
		document.getElementById("date").style.visibility = "visible";
    }
    else {
        //turn screen on
		document.getElementById("clock").style.visibility = "hidden";
		document.getElementById("date").style.visibility = "hidden";
		
        document.getElementById("bar").style.visibility = "visible";
        document.getElementById("display").style.visibility = "visible";
    }
    locked = !locked;
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





