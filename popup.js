let changeColor = document.getElementById('GOGO');

let deletea = "document.querySelectorAll('a[href=\"javascript:quiz.v95();\"]')[0].outerHTML = \"\";"

let lol = '<div id=\'feedback\' style=\'max-height:250px;overflow:auto;padding-left:25px;\'></div>'

changeColor.onclick = function(element) {
	let color = element.target.value;
	let total = document.getElementById('total').value;
	let chi = 'document.getElementById("q917").outerHTML = \'<input id="q917" class="status" type="text" value="' + total + '" readonly="readonly">\';';
	let chi2 = 'document.getElementById("q91a").outerHTML = \'<input id="q91a" class="status" type="text" value="0" readonly="readonly">\';';
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.executeScript(
		  tabs[0].id,
		  {code: 'document.getElementsByTagName("tbody")[2].children[0].children[1].innerHTML = "' + lol + '"; document.getElementsByTagName("tbody")[2].children[0].children[0].children[0].children[0].children[0].children[0].children[1].innerText = "100%"; document.getElementsByTagName("tbody")[2].children[0].children[0].children[0].children[0].children[0].children[1].children[1].innerText = ' + total + '; document.getElementsByTagName("tbody")[2].children[0].children[0].children[0].children[0].children[0].children[2].children[1].innerText = "0"; document.getElementsByTagName("tbody")[2].children[0].children[0].children[0].children[0].children[0].children[3].children[1].innerText = ' + total + ';document.getElementsByTagName("tbody")[2].children[0].children[0].children[0].children[0].children[0].children[4].children[1].innerText = "0";' + deletea + chi2 + chi + ''});
		
	});
};
