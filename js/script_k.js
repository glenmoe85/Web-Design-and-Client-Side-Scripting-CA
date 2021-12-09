

	// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});





	// Get the modal
var modal1 = document.getElementById("modal1");

// Get the button that opens the modal
var btn = document.getElementById("btn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
window.addEventListener("click", function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
});



	// Get the modal
var modal2 = document.getElementById("modal2");

// Get the button that opens the modal
var btn = document.getElementById("btn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
window.addEventListener("click", function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
});



jQuery(document).ready(function(){
    $.getScript('collscript.js');
});