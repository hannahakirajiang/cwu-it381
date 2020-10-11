// JavaScript Document
//call this once after all the document parts have loaded
$(document).ready(function() {
	//call using jQuery ajax
	$.ajax({
		url:"apollo.xml",
		cache:false,
		dataType:"xml",
		success: function(xml){
			$('#contents').empty();
			//find each record - apollo here is the name of the table
			$(xml).find('apollo').each(function() {
            //Create the set of data using the fields in the XML
			var info = 
			'<div data-role = "collapsible"><h3>'
			+$(this).find("Flight").text()+'</h3>'
			+'<div data-role="main" class="ui-content"><p>'
			+'<img src=images/'
            +$(this).find("Patch").text()
            +' width="130" height="130" alt="'
            +$(this).find("Flight").text()
            +' Flight Patch"/><br>'
			+'<strong>Crew:</Strong> ' +$(this).find("Crew").text()
			+'<br><strong>Highlights:</strong> '+$(this).find("Notes").text()
			+'</div></div>' 
			 
			//Add the information in info to the display
			$('#contents').append(info);
            });//close the each.function
		}//close the success function
	});//close the ajax function
    
});