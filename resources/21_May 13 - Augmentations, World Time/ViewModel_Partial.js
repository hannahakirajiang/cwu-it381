
				var info=
					'<li data-icon='
					+$(this).find("lIcon").text()
					+' class="ui-nodisc-icon" data-id='
					+$(this).find("ID").text()
					+'><a href=#page1><img src='
					+$(this).find("pic").text()
					+'><h1>Tour: '
					+$(this).find("model").text()
					+'</h1><p class="ui-li-aside">'
					+$(this).find("tAside").text()
					+'</p><p>Cost: $'
					+$(this).find("cost").text()
					+'</p><p>Tour Stops: '
					+$(this).find("notes").text()
					+'</p></a></li>';
				$('#inventoryList').append(info).listview('refresh');
			});
		}
	});
