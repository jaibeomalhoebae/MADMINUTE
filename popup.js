let changeColor = document.getElementById('GOGO');



changeColor.onclick = function(element) {
	let color = element.target.value;
	let total = document.getElementById('total').value;
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.executeScript(
		  tabs[0].id,
		  {code: 'document.getElementsByTagName("tbody")[2].children[0].children[1].remove(); document.getElementsByTagName("tbody")[2].children[0].children[0].children[0].children[0].children[0].children[0].children[1].innerText = "100%"; document.getElementsByTagName("tbody")[2].children[0].children[0].children[0].children[0].children[0].children[1].children[1].innerText = ' + total + '; document.getElementsByTagName("tbody")[2].children[0].children[0].children[0].children[0].children[0].children[2].children[1].innerText = "0"; document.getElementsByTagName("tbody")[2].children[0].children[0].children[0].children[0].children[0].children[3].children[1].innerText = ' + total + ';document.getElementsByTagName("tbody")[2].children[0].children[0].children[0].children[0].children[0].children[4].children[1].innerText = "0";'});
		
	});
};