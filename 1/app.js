document.addEventListener("DOMContentLoaded", function () {

	//link break
	function breakLink() {
		let link = document.getElementById("link");
		link.innerHTML = "&#xf0c1";

		setTimeout(function () {
			link.innerHTML = "&#xf127";
		}, 1000);
	}

	//link break called
	setInterval(breakLink, 2000);

	//battery func defined
	function battery() {
		let battery = document.getElementById("battery");
		battery.innerHTML = "&#xf244";

		setTimeout(function () {
			battery.innerHTML = "&#xf243"
		}, 1000);

		setTimeout(function () {
			battery.innerHTML = "&#xf242"
		}, 2000);

		setTimeout(function () {
			battery.innerHTML = "&#xf241"
		}, 3000);

		setTimeout(function () {
			battery.innerHTML = "&#xf240"
		}, 4000);
	}

	//battery func called
	setInterval(battery, 5000);

	//func offon defined
	document.getElementById("offon").addEventListener("click", onOff);

	function onOff() {
		let list = document.querySelector(".offon").classList;
		if (list.contains("fa-toggle-off")) {
			list.remove("fa-toggle-off");
			list.add("fa-toggle-on");
		} else {
			list.remove("fa-toggle-on");
			list.add("fa-toggle-off");
		}
	}
});