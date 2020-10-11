// JavaScript Document

// Model - Variable list
var currentOne = "1",
	currentBrand = "brand",
	currentModel = "model",
	currentPrice = "price",
	currentPic = "pic name",
	currentInterest = "interest",
	currentTerm	 = "term",
	currentSalesTax = "tax",
	whichOne = "1";

// initialize the page - read the XML, create the inventory list
$(document).on("pagecreate", function(){
	"use strict";
	$.ajax({
		url:"computersList.xml",
		cache:false,
		dataType:"xml",
		success: function(xml){
			$('#inventoryList').empty();
			$(xml).find('computer').each(function(){
				var info=
					'<li data-id='
					+$(this).find("ID").text()
					+'><a href=#page1><img src='
					+$(this).find("pic").text()
					+'><h1>Model: '
					+$(this).find("model").text()
					+'</h1><p>Brand: '
					+$(this).find("brand").text()
					+'</p><p>Cost: $'
					+$(this).find("cost").text()
					+'</p><p>Notes: '
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
		url:"computersList.xml",
		cache:false,
		dataType:"xml",
		success:function(xml1){
			
			currentInterest = $(xml1).find('standards').find('interestRate').text();
			currentSalesTax = $(xml1).find('standards').find('salesTax').text();
			
			$(xml1).find('computer').each(function(){
				currentOne = ($(this).find("ID").text());
				if(currentOne===whichOne)
				{
					currentBrand=($(this).find("brand").text());
					currentModel=($(this).find("model").text());
					currentPrice=($(this).find("cost").text());
					currentPic=($(this).find("pic").text());
					currentTerm=($(this).find("term").text());
					
					$('#theBrand').text(currentBrand);
					$('#theModel').text(currentModel);
					$('#theCost').text(currentPrice);
					$('#footerText').text(currentModel);
					$('#thePic').html('<img src='+currentPic+' width="300" height="225" />');
					$('#theSmallPic').html('<img src='+currentPic+' width="150" height="112" />');
					$('#P').val(currentPrice);
					$('#T').val(currentSalesTax);
					$('#N').val(currentTerm);
					$('#R').val(currentInterest);
					$('#CompName').text(currentModel);
					
				}
			});
			
		}
	});
	
	});

// Calculate the total payments - called by entering the #page2 or clicking #calcButton
function calcIt(){
	var Amount = 0;
	var currentModel = ($('#CompName').text());
	var TotalPayments = ($('#N').val());
	var Principal = parseFloat($('#P').val());
	var TaxRate = parseFloat($('#T').val());
	Principal = parseFloat(Principal * (1+TaxRate)).toFixed(2);
	var Rate = (($('#R').val())/12)/100;
	Amount = Principal*(Rate*Math.pow(1+Rate,TotalPayments))/(Math.pow(1+Rate,TotalPayments)-1);
	
	$('#Answer').html('With sales tax the '+currentModel + ' costs $'+Principal+' so you can take it home today for only $'+ Amount.toFixed(2)+' a month for '+TotalPayments+' months. Payments total $'+(Amount*TotalPayments).toFixed(2)+'.');

	}

$('#calcButton').click(calcIt);
	
});
