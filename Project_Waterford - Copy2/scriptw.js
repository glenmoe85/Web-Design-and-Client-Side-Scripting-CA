
function subscribe(){
var em=document.getElementById("emailaddress").value;
	event.preventDefault();
	swal("Thank you!", "A regular newsletter will now be sent to " +em, "success"); 
	document.getElementById('emailaddress').value = "";
}

function booking(){
	window.open('https://www.booking.com/city/ie/waterford.html?aid=303948;label=waterford-QGU0OxFSh7S_qOdhVwSz4gS392876326984:pl:ta:p120:p2:ac:ap:neg:fi:tiaud-1183547561027:kwd-1141643791:lp1007901:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9Yf5EcukO1MOGLSSAuId8ToA;ws=&gclid=CjwKCAiAhreNBhAYEiwAFGGKPGpZmzYJHkg2WCHo1X9K-5d2u3aQCF3lQVXMd5XrWHn2FxvY768y-xoCqbAQAvD_BwE', '_blank');	
}

function webcam(){
	window.open('https://v.angelcam.com/iframe?v=24y463b0r0&autoplay=1', '_blank');
	
}

function events(){
	window.open('https://www.ticketmaster.ie/search?q=waterford', '_blank');
}

function guide(){
	window.open('https://www.arrivalguides.com/en/Travelguides/Europe/Ireland/Waterford', '_blank');
}	
	
function theatre(){
	window.open('https://www.theatreroyal.ie/', '_blank');
}		

function pubs(){
	window.open('https://www.tripadvisor.ie/Restaurants-g186637-zfg11776-County_Waterford.html', '_blank');
}	

function dining(){
	window.open('https://www.theirishroadtrip.com/best-restaurants-in-waterford/', '_blank');
}	