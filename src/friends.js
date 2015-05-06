
// adding func to parent object
Array.prototype.contains = function(element) {
   for (var i in this) {
       if (this[i] === element) return true;
   }
   return false;
}

var _online = true;
var friends = [];
var people = ['', 'Stan Marsh', 'Kyle Broflovski', 'Eric Cartman', 'Kenny McCormick', 'Butters Stotch',
						'Bebe Stevens', 'Linda Stotch'];
						
						
function friendRequest() {
	
	var rand = Math.floor((Math.random() * people.length));
	console.log("rand : ", rand);
	
	document.getElementById("confirm").innerHTML = "";
	
	if (rand === 0) {
		alternativeLoad('Found0');
		
		console.log("\nno one found\n");
	}
	else {
		if (friends.contains(people[rand])) {
			alternativeLoad('AlreadyAdded');
			
			console.log("\nfriend already added\n");
		}
		else {
			check(people[rand], "Add");
		}
	}
}


function check(name, action) {
	console.log(name, " ; ", action);
	
	var str = "";
	
	str += "<ul><li>"+name+"</li><p style=' margin: 0.2cm 0cm 0.15cm -0.1cm;'>"+action+"?</p>" +
				"<img src ='.\\media\\confirm_hack.png' hspace='2' vspace='0' \
							usemap='#confirm_map'> \
						<map name='confirm_map'>"
						
	if(action=="Add") {
		str += 		"	<area shape='rect' coords='0,0, 44,35' \
										onClick='back(); showFriends();'> \
							<area shape='rect' coords='46,0, 90,35' \
										onClick="+'"'+"addFriend('"+name+"'); back(); showFriends();"+'"'+"> \
						</map>";
	}
	
	if(action=="Remove") {
		str += 		"	<area shape='rect' coords='0,0, 49,40' \
										onClick='back(); showFriends();'> \
							<area shape='rect' coords='51,0, 90,40' \
										onClick="+'"'+"removeFriend('"+name+"'); back(2); showFriends();"+'"'+"> \
						</map>";
	}
	
	str += "</ul>"
	document.getElementById("confirm").innerHTML = str;
}


function addFriend(name) {
	friends.push(name);
	friends.sort();
}


function removeFriend(name) {
	
	var i = friends.indexOf(name);
	
	if (i > -1) { friends.splice(i, 1); }
}


function showFriends() {
	var friend;
	var str = "<ul>";
		
	str += "<li onclick="+'"'+"alternativeLoad('Instructions');"+'"'
					+"><img class='icon' src='.\\media\\icons\\icon_add.png'> Add</li>";
	
	for (friend of friends) {
		str += "<li onclick="+'"'+"friendOptions('"+friend+"'); verifyClick('"
					+ friend.substring(0, 3)+'...'+"', 'Options')"+'"'+">"
					+friend+"</li>";
	}

	str += "</ul>";
	document.getElementById("friend_list").innerHTML = str;
}


function friendOptions(name) {
	var str = "<ul>";
		
		
		
		
	if (_online) {
		str += "<li class='option2' onclick="+'"'+"trackingScreen(); verifyClick('Tracking', 'Tracking')"+'"'+"> \
						<img class='icon2' src='.\\media\\icons\\icon_track.png'> \
						Find \
					</li>"
	}
	else {
		str += "<li class='option2' style='opacity: 0.4; filter: alpha(opacity=40)'> \
						<img class='icon2' src='.\\media\\icons\\icon_track.png' > \
						Find \
					</li>"
	}		
				
	str += "<li class='option2' onclick="+'"'+"verifyClick('Delete', 'Remove'); check('"+name+"', 'Remove')"
				+'"'+"> \
					<img class='icon2' src='.\\media\\icons\\icon_remove.png'> \
						Remove \
				</li>";
	
	str += "</ul>";
	document.getElementById("friend_options").innerHTML = str;
}


function trackingScreen() {
	
	/* not working for some reason
	
	var rand = Math.floor((Math.random() * 1)); // there are 1 different tracking images
	var path = "'./media/tracking/"+rand+".png'";
	
	document.getElementById("compass").style.backgroundImage = "url("+path+")";
	
	console.log("path : ", path);
	*/
}


function toggleState() {
	
	if (_online === true) {
		document.getElementById("state").style.color = "black";
		document.getElementById("state").innerHTML = "State: Offline";
		
		document.getElementById("stateButton").style.color = "green";
		document.getElementById("stateButton").innerHTML = "Go Online";
		
		document.getElementById("led").innerHTML = "<img src='./media/grey.png'>";
		_online = false;
		
	}
	else {
		document.getElementById("state").style.color = "green";
		document.getElementById("state").innerHTML = "State: Online";
		
		document.getElementById("stateButton").style.color = "black";
		document.getElementById("stateButton").innerHTML = "Go Offline";
		
		document.getElementById("led").innerHTML = "<img src='./media/green.png'>";
		_online = true;
	}
	
		console.log("state : ", _online);
		
}




