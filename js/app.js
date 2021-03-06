(function(){
	"use strict";
	var app = {
		menu : $.ajax('http://localhost:8000/menu.json'),
		alice: $.ajax('http://localhost:8000/alice.md'),
		mark: $.ajax('http://localhost:8000/example.md'),
		init:function(){
			app.menuf();
			app.transformation();
		},
		menuf : function(){
			app.menu.done(function(menuJ){
				for (var i = 0; i < menuJ.menu.length; i++) {
					menuJ[i]
					var pathJson = "http://localhost:8000"+menuJ.menu[i].path;
					var titleJson = menuJ.menu[i].title;
					$('#app').append('<span>'+'<a class="mark"data-info="'+pathJson+'" href="#">'+titleJson+'</a>'+'</span>');
					app.transformation();
				}
			});
		},

		transformation : function(){
			$('.mark').click(function(){
				app.data($(this).data('info'));
			});
		},
		data: function(path){
			$.ajax({
				url: path,
				method: 'GET',
			}).done(function(response){
				var converter = new showdown.Converter(app.response),
				html      = converter.makeHtml(response);
				$('#md').html(html);
			});

		},
	};


	$(document).ready(function(){
		app.init();
	});
})(); 