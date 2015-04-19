
function timer() {
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	
	h = zeroFill(h);
	m = zeroFill(m);
	s = zeroFill(s);

	document.getElementById('clock').innerHTML = h + ":" + m;
	document.getElementById('sec').innerHTML = ":" + s;
	
	var str = (today.toDateString()).split(" ");
	
	document.getElementById("date").innerHTML = str[0] + ", " + str[1] + " " + str[2];

	var t = setTimeout(function(){timer()},500);
}


function zeroFill(i) {
	if (i < 10) {
		i = "0" + i;
	}

	return i;
}


/*
    var days = ['Sun', 'mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec'];

    Date.prototype.getMonthName = function() {
        return months[ this.getMonth() ];
    };
	
    Date.prototype.getDayName = function() {
        return days[ this.getDay() ];
    };
*/