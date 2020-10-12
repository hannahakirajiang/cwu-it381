// JavaScript Document

function getMyTrips(){
	// from dayTrips1.html
	// retrieve TourName
	if(localStorage.key1TourName){usertext="Services: " +localStorage.key1TourName;}
	else {usertext = 'No development project selected'}
	$('#tourName1').html(usertext);

	// retrieve Pic
	if(localStorage.key1Pic){
		usertext=localStorage.key1Pic;
		$('#pic1').html('<img src=media/'+usertext+' width="160" height="120" />');
		}
	else {usertext = ''
		$('#pic1').html(usertext);
		}	
	
	//from dayTrips2.html
	// retrieve TourName
	if(localStorage.key2TourName){usertext="Service: " +localStorage.key2TourName;}
	else {usertext = 'No design project selected'}
	$('#tourName2').html(usertext);

	
	// retrieve Pic
	if(localStorage.key2Pic){
		usertext=localStorage.key2Pic;
		$('#pic2').html('<img src=media/'+usertext+' width="160" height="120" />');
		}
	else {usertext = ''
		$('#pic2').html(usertext);
		}	
	
	//from 3
	// retrieve TourName
	if(localStorage.key3TourName){usertext="Service: " +localStorage.key3TourName;}
	else {usertext = 'No management project selected'}
	$('#tourName3').html(usertext);

	
	// retrieve Pic
	if(localStorage.key3Pic){
		usertext=localStorage.key3Pic;
		$('#pic3').html('<img src=media/'+usertext+' width="160" height="120" />');
		}
	else {usertext = ''
		$('#pic3').html(usertext);
		}	
	
}
function clearItems() {
	localStorage.clear();
	location.reload();	
}
