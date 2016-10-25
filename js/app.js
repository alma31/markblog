(function(){
	"use strict";
	var app = {
		init:function(){
		$.get('http://192.168.1.40:1337/alice.md', function(data){
        var converter = new showdown.Converter();
        var html = converter.makeHtml(data);
        $('#md').html(html);
        app.recup();
        });
		},

		recup: function(){
		$.get('http://192.168.1.40:1337/menu.json', function(data2){
			$('#app').html(data2.menu[1].title);
           console.log(data2.menu[1]);
		});
		},
	};

	$(document).ready(function(){
		app.init();
	});
})();