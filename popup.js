window.onload = function() {

	var userid = "";
	chrome.storage.sync.get('username',function (data) {
		userid=data.username;
	});

	var password = "";
	chrome.storage.sync.get('password',function (data) {
		password=data.password;
	});
	var auto1 = false;
	chrome.storage.sync.get('auto',function (data) {
	auto1=data.auto;
	});
	var proxy = false;
	chrome.storage.sync.get('proxy',function (data) {
	proxy=data.proxy;
	});
	
	var delayMillis = 10;
	setTimeout(function() {
	 	document.getElementById('username').value = userid;
	 	document.getElementById('password').value = password;
	 	document.getElementById('autologin').checked = auto1;
	 	document.getElementById('proxy').checked = proxy;
	}, delayMillis);

	document.getElementById('proxy').onclick = function() {
		var proxy = document.getElementById('proxy').checked;
	    chrome.storage.sync.set({'proxy': proxy},function() {});
	    //console.log(proxy);
	    chrome.runtime.sendMessage(proxy);
	}
  	
  	document.getElementById('save').onclick = function() {
    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var auto = document.getElementById('autologin').checked;
    chrome.storage.sync.set({'username': username},function() {});
    chrome.storage.sync.set({'password': pass},function() {}); 
    chrome.storage.sync.set({'auto': auto},function() {}); 
  	}
}