function exec(e) {
	chrome.tabs.executeScript(null,
			{"file" : "update.js"}
	  );
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, generateCommand(), function(response) {
	});
});

}

function generateCommand(){
	var out = [];
	out.push({
		msgnm : "tr-update",
		range : document.getElementById("input").value,
		value : document.getElementById("value").value
	});
	return out;
}

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('set').addEventListener('click', exec, false);
});
