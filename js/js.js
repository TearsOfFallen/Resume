function elem(val) {
	document.getElementById("result").value+=val
}
function solve() {
	let x = eval(document.getElementById("result").value)
	document.getElementById("result").value = x
}
function clr() {
	document.getElementById("result").value=""
}

function changeCSS() {
	/*let theme = document.getElementById("theme").value


	var oldLink = document.getElementByTagName("link").item(index);
	var newLink = document.createElement("link");

	newLink.setAttribute("rel", "stylesheet");
	newLink.setAttribute("type", "text/css");
		if (theme="change to dark theme") {
			newLink.setAttribute("href", "css/dark-theme.css");
		} else {
			newLink.setAttribute("href", "css/dark-theme.css");
		}
	document.getElementByTagName("head").item(index).replaceChild(newLink, oldLink);
	document.getElementById("theme").value="theme" value="change to light theme"*/
	document.getElementById('sheet').href='css/dark-theme.css';
}