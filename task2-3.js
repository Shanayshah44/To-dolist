
window.onload = () => {
	const form1 = document.querySelector("#add");

	let items = document.getElementById("items");
	let submit = document.getElementById("submit");

	let edit = null;

	form1.addEventListener("submit", addItem);
	items.addEventListener("click", removeItem);
};

function addItem(e) {
	e.preventDefault();

	if (submit.value != "Submit") {
		console.log("Hello");

		edit.target.parentNode.childNodes[0].data
			= document.getElementById("item").value;

		submit.value = "Submit";
		document.getElementById("item").value = "";

		document.getElementById("success").innerHTML
			= "Text edited ";

		document.getElementById("success")
						.style.display = "block";

		setTimeout(function() {
			document.getElementById("success")
							.style.display = "none";
		}, 3000);

		return false;
	}

	let newItem = document.getElementById("item").value;
	if (newItem.trim() == "" || newItem.trim() == null)
		return false;
	else
		document.getElementById("item").value = "";

	let li = document.createElement("li");
	li.className = "list-group-item";

	let deleteBtn = document.createElement("button");

	deleteBtn.className =
		"btn-danger btn btn-sm float-right delete";

	deleteBtn.appendChild(document.createTextNode("Delete"));

	let editBtn = document.createElement("button");

	editBtn.className =
			"btn-success btn btn-sm float-right edit";

	editBtn.appendChild(document.createTextNode("Edit"));

	li.appendChild(document.createTextNode(newItem));
	li.appendChild(deleteBtn);
	li.appendChild(editBtn);

	items.appendChild(li);
}

function removeItem(e) {
	e.preventDefault();
	if (e.target.classList.contains("delete")) {
		if (confirm("Are you Sure?")) {
			let li = e.target.parentNode;
			items.removeChild(li);
			document.getElementById("success").innerHTML
				= "Text deleted ";

			document.getElementById("success")
						.style.display = "block";

			setTimeout(function() {
				document.getElementById("success")
						.style.display = "none";
			}, 3000);
		}
	}
	if (e.target.classList.contains("edit")) {
		document.getElementById("item").value =
			e.target.parentNode.childNodes[0].data;
		submit.value = "EDIT";
		edit= e;
	}
}

function toggleButton(ref, btnID) {
	document.getElementById(btnID).disabled = false;
}
