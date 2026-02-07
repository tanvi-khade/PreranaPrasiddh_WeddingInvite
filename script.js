window.onload = function () {
	var padding = document.getElementById("lavendar").clientHeight;
	console.log("padding", padding);
	if (padding > 79)
		document.getElementById("rsvp").style.paddingTop = `${padding}px`;
  else
    document.getElementById("rsvp").style.paddingTop ='50px';
}

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

var form = document.getElementById("rsvp-form");

async function handleSubmit(event) {
	event.preventDefault();
	var status = document.getElementById("my-form-status");
	var data = new FormData(event.target);
	fetch(event.target.action, {
		method: form.method,
		body: data,
		headers: {
			Accept: "application/json",
		},
	})
		.then((response) => {
			if (response.ok) {
				status.innerHTML = "Thanks for your submission!";
				form.reset();
			} else {
				response.json().then((data) => {
					if (Object.hasOwn(data, "errors")) {
						status.innerHTML = data["errors"]
							.map((error) => error["message"])
							.join(", ");
					} else {
						status.innerHTML = "Oops! There was a problem submitting your form";
					}
				});
			}
		})
		.catch((error) => {
			status.innerHTML = "Oops! There was a problem submitting your form";
		});
}
form.addEventListener("submit", handleSubmit);
