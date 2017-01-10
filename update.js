function parseInput(inputRaw){
	var entries = inputRaw.replace(" ","").split(",");

	for(var i = 0; i < entries.length ; i++){
		if(entries[i].includes("-")){
			var temp = entries[i].split("-");
			if(!isNaN(temp[0]) && !isNaN(temp[1])){
				entries[i] = [parseInt(temp[0]), parseInt(temp[1])];
			} else entries[i] = [0, -1];
		} else {
			if(!isNaN(entries[i])){
				entries[i] = [parseInt(entries[i]), parseInt(entries[i])];
			} else entries[i] = [0, -1];
		}
	}
	return entries;
}

function updateSteps(value, start, end){
	var steps = document.getElementsByClassName("step-row");

	start--;
	end--;

	if (start < 0) start = 0;
	if (end > steps.length) end = steps.length;

	for(var index = start; index <= end; index++){
		steps[index].getElementsByClassName("form-control form-select")[0].value = value;
	}
}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request[0].msgnm === "tr-update"){

			var input = parseInput(request[0].range);
			var value = request[0].value;
			for(var i = 0; i < input.length ; i++){
				updateSteps(value, input[i][0], input[i][1]);
			}
		}
	}
)
;
