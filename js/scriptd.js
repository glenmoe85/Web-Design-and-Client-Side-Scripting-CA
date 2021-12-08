function subscribe(){
var em=document.getElementById("emailaddress").value;
	event.preventDefault();
	swal("Thank you!", "A regular newsletter will now be sent to " +em, "success"); 
	document.getElementById('emailaddress').value = "";
}

function booking(){
	window.open('https://www.booking.com/', '_blank');	
}

function webcam(){
	window.open('https://www.earthcam.com/world/ireland/dublin/?cam=templebar', '_blank');
	
}

function events(){
	window.open('https://www.ticketmaster.ie/search?q=dublin', '_blank');
}

function guide(){
	window.open('https://www.travelandleisure.com/travel-guide/dublin', '_blank');
}	
	
function theatre(){
	window.open('https://www.theatresonline.com/theatres/dublin-theatres', '_blank');
}		

function pubs(){
	window.open('https://www.timeout.com/dublin/bars/best-pubs-in-dublin', '_blank');
}	

function dining(){
	window.open('https://www.timeout.com/dublin/restaurants/best-restaurants-in-dublin', '_blank');
}	