var span = document.getElementsByClassName("close")[0];
var modal;
function openPopup(eventName) {
	modal = document.getElementById(eventName);
	modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
function closePopup(eventName) {
	document.getElementById(eventName).style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
