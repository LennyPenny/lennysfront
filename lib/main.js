//import 'systemjs-hot-reloader/default-listener.js'

import simplerpc from "lib/simplerpc"

var api = simplerpc("ws://127.0.0.1:1337/lmao");

api.UpdateCurrentUsers = (num) => {
	$("#currentusers")[0].innerText = num;
}

api.UpdateMaxUsers = (num) => {
	$("#maxusers")[0].innerText = num;
}

api.UpdateTotalUsers = (num) => {
	$("#totalusers")[0].innerText = num;
}

api.UpdateStats = (data) => {
	api.UpdateCurrentUsers(data.currentusers);
	api.UpdateMaxUsers(data.maxusers);
	api.UpdateTotalUsers(data.totalusers);
}


console.log("hello!");
