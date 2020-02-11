//DOM element
let modalBtn = document.getElementById("modalBtn");
let modal = document.getElementById("simpleModal");
let closeBtn = document.getElementsByClassName("closeBtn")[0];

//Listen for open a click
modalBtn.addEventListener("click", openModal);
//Listen for columnRuleStyle: 
closeBtn.addEventListener("click", closeModal);
//Listen for Outside click
window.addEventListener("click", clickOutside);

//open modal
function openModal() {
	modal.style.display = "block";
}

//close modal
function closeModal() {
	modal.style.display = "none";
}

//close modal if click outside
function clickOutside(e) {
	if (e.target == modal) {
		modal.style.display = "none";
	}
}