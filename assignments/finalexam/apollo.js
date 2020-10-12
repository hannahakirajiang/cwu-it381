// JavaScript Document
$(document).ready(function () {
	$.ajax({
		url: "apollo.xml",
		cache: false,
		dataType: "xml",
		success: function (xml) {
			$('#apolloList').empty();

			
			//find apollo
			$(xml).find('apollo').each(function () {
				var info =
					'<li data-id="' + $(this).find("ID").text() +
					'" class="ui-li-has-thumb"><a href="#page2" class="ui-btn ui-btn-icon-right ui-icon-carat-r"><img src="' 
					+$(this).find("Patch").text() 
					+'"><h1>' 
					+ $(this).find("Flight").text() 
					+ '</h1><p>The Crew: ' +
					$(this).find("Crew").text() 
					+ '</p><p>The Spacecraft: ' +
					$(this).find("Spacecraft").text() 
					+ '</p><p>Notes: ' +
					$(this).find("Notes").text() 
					+ '</p></a></li>';
				
				
				$('#apolloList').append(info);
			});
		}
	});

	
	//crew find
	$("#apolloList").on("click", "li", function () {
		whichOne = ($(this).attr("data-id"));
		$.ajax({
			url: "apollo.xml",
			cache: false,
			dataType: "xml",
			success: function (xml1) {

				$(xml1).find('apollo').each(function () {
					currentOne = ($(this).find("ID").text());
					
					
					if (currentOne === whichOne) {
						var flight = 
							($(this).find("Flight").text());
						var crewPic = 
							($(this).find("CrewPic").text());
						var crew = 
							($(this).find("Crew").text());
						
						$("#flight").text(flight);
						$("#crewPic").html('<img src="crew/' + crewPic + '">');
						$("#crew").html('<b>The Crew: </b>' +crew);
					}
				})
			}
		});
	})
});
