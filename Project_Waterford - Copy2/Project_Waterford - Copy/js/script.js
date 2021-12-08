function resNavBar() {
  var x = document.getElementById("Navbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}