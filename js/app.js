// (function(){
// 	"use strict";
// 	var app = {
// 		init:function(){
// 		$.get('http://192.168.1.40:1337/alice.md', function(data){
//         var converter = new showdown.Converter();
//         var html = converter.makeHtml(data);
//         $('#md').html(html);
// 		$.get('http://192.168.1.40:1337/menu.json', function(data2){
// 			$('#app').html('<a>' + data2.menu[1].title + '</a>');
// 			$('#app').html('<a>' + this.data.menu[0].title + '</a>');
// 		},
// 	},
// 	};

// 	$(document).ready(function(){
// 		app.init();
// 	});
// })();

(function(){
 "use strict";
 	var app = {
 		init:function(){
 		$.get('http://192.168.1.40:1337/alice.md', function(data){
        var converter = new showdown.Converter();
        var html = converter.makeHtml(data);
        $('#md').html(html);
 		});
 		$.get('http://192.168.1.40:1337/menu.json', function(data2){
        $('#app').html('<a href='+test+'>' + data2.menu[0].title + '</a>' +'<br>'+'<br>' + '<a id="mark">' + data2.menu[1].title + '</a>');
 		var test = $.get('http://192.168.1.40:1337'+data2.menu[0].path.responseText);
 		console.log(test);
  


        });
 		},
 	};
 
 	$(document).ready(function(){
 		app.init();
 	});
 })(); 