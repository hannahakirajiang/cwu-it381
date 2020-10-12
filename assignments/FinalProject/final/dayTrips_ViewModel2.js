// JavaScript Document
$(document).on("pagecreate", function(){	
$.ajax({
		url:"dayTwo.xml",
		cache:false,
		dataType:"xml",
				success: function(xml){
			$('#inventoryList').empty();
			myXML=xml;
			$(xml).find('excursion').each(function(){
			var info = 
			'<li data-id=' + $(this).find("ID").text()
			+ '><a href=#page1' 
			+ '><img src=media/' +$(this).find("pic").text() 
			+ '><h1>'
			+$(this).find("tourName").text() + '</h1><p>'
			+'<b>Tools & Technique:</b> '+$(this).find("visit").text()
			+'</p></a><a href= dayTripsCart.html data-ajax="false"></a></li>';
			
			$('#inventoryList').append(info).listview('refresh');
			});			
		}
	});
$("#inventoryList").on("click", "li", function() { 
    whichOne = ( $(this).attr("data-id") );
	 
	$(myXML).find('excursion').each(function(){
	currentID= ($(this).find("ID").text());
	currentTourName = ($(this).find("tourName").text());
	currentLength = ($(this).find("length").text());
	currentPrice = ($(this).find("price").text());
	currentVisit = ($(this).find("visit").text());
	currentPic = ($(this).find("pic").text());
			
	if(currentID == whichOne){ 
		$('#tourNameDetail').html('<h3>'+currentTourName+'<h3>');
		$('#tourLengthDetail').text(currentLength);
		$('#currentPriceDetail').html('<br>'+currentPrice);
		$('#currentVisitDetail').html('<br><b>Tools & Technique:</b><br>' +currentVisit);
		$('#currentPicDetail').html('<img src=media/'+currentPic+' width="320" height:"auto" alt=""/>');
			
		localStorage.key2TourName = currentTourName;
		localStorage.key2Length = currentLength;
		localStorage.key2Price = currentPrice;
		localStorage.key2Visit = currentVisit;
		localStorage.key2Pic = currentPic;
		}
	});
});
});