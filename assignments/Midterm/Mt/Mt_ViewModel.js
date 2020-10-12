// JavaScript Document

// Model - Variable list
var currentOne = "1",
	currentBrand = "brand",
	currentModel = "model",
	currentPrice = "price",
	currentPic = "pic name",
	whichOne = "1";

// initialize the page - read the XML, create the inventory list
$(document).on("pagecreate", function(){
	"use strict";
	
	$.ajax({
		url:"MtList.xml",
		cache:false,
		dataType:"xml",
		success: function(xml)
		
		{
			$('#inventoryList').empty();
			
			$(xml).find('computer').each(function(){
				var info='<li data-id='
					+$(this).find("ID").text()
					+'><a href=#page1><img src='
					+$(this).find("pic").text()
					+'><h1>Tour: '
					+$(this).find("model").text()
					+'</h1><p>Duration: '
					+$(this).find("brand").text()
					+'</p><p>Cost: $'
					+$(this).find("cost").text()
					+'</p><p>Cities: '
					+$(this).find("notes").text()
					+'</p></a></li>';
				
				$('#inventoryList').append(info).listview('refresh');
				
			});
		}
	});

	
// handle a click on the listview - Populate the next page with the correct information	
	
$("#inventoryList").on("click","li",function(){
	whichOne=($(this).attr("data-id"));
	
	$.ajax({
		url:"MtList.xml",
		cache:false,
		dataType:"xml",
		success:function(xml1){
			
			$(xml1).find('computer').each(function(){
				currentOne = ($(this).find("ID").text());
				if(currentOne===whichOne)
				{
					currentBrand=($(this).find("brand").text());
					currentModel=($(this).find("model").text());
					currentPrice=($(this).find("cost").text());
					currentPic=($(this).find("pic").text());
					
					$('#theModel').text(currentModel);
					$('#theCost').text(currentPrice);
					$('#footerText').text(currentModel);
					$('#thePic').html('<img src='+currentPic+' width="300" height="225" />');
					$('#theSmallPic').html('<img src='+currentPic+' width="150" height="112" />');
				}
			});
		}
	});
	});
	
	
// Calculate the total payments - called by entering the #page2 or clicking #calcButton
function calcIt()
	{	
		var Amount = 0;
		var NOP = $('#N').val();
		var PerPrice = parseFloat($('#theCost').text());
		Amount = (PerPrice * NOP).toFixed(2);

		$('#Answer').html("Your total price will be $"+Amount);	
	
	}

	$('#calcButton').click(calcIt);

});
