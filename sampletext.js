$(document).ready(function () {

	$('.st-here').each(function() {
		var element = $(this);

		var count = element.attr('data-count');

		if(count == undefined)
		{
			count = 20;
		}

		var html = '';

		for(var i = 0; i < count; i++)
		{
			var len = Math.floor((Math.random() * 9) + 1);

			html += '<span class="st-word" style="width: '+ len +'em"></span>';
		}

		$(this).html(html);

	});

});