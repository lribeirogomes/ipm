
var friends = [];
const MAX_FRIENDS = 3;


function updateFriends() {
    var list = document.getElementsByClassName("Friend")
    var i;

    // hide all friends
    for (i = 0; i < list.length; i++) {
        list[i].style.display = "none";
    }

    // show friends already added
    for (i = 0; i < MAX_FRIENDS; i += 1) {
        if (friends.indexOf(i) > -1) {
            list[i].style.display = "block";
        }
    }
}


function friendRequest() {
    var list = document.getElementsByClassName("Request")
    var i;

    // hide all requests
    for (i = 0; i < list.length; i++) {
        list[i].style.display = "none";
    }

    // show friend request
    if (friends.length < MAX_FRIENDS) {
        for (i = 0; i < MAX_FRIENDS; i += 1) {
            if (friends.indexOf(i) === -1) {
                list[i].style.display = "block";
                list[MAX_FRIENDS].style.display = "block";
                list[MAX_FRIENDS+1].style.display = "block";
                break;
            }
        }
    }
    else {
        list[MAX_FRIENDS+2].style.display = "block";
    }
}


function addFriend() {
    for (i = 0; i < MAX_FRIENDS; i += 1) {
        if (friends.indexOf(i) === -1) {
            friends.push(i);

            updateFriends();
            break;
        }
    }
}


function removeFriend(i) {
    friends.splice(friends.indexOf(i), 1);
    updateFriends();
}





