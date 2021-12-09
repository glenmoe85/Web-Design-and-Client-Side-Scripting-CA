function resNavBar() {
  var x = document.getElementById("Navbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function formSubmit() {
	var fn = document.contactForm.firstname.value;
	var ln = document.contactForm.lastname.value;
	var em = document.contactForm.email.value;
	alert("Thank you for completing the form " +fn+" "+ln+"\nA member of our team will be respond shortly to "+em);
	document.forms['contactForm'].reset();
	
}