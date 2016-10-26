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

// (function(){
//  "use strict";
//  	var app = {
//  		init:function(){
//  		$.get('http://192.168.1.40:1337/alice.md', function(data){
//         var converter = new showdown.Converter();
//         var html = converter.makeHtml(data);
//         $('#md').html(html);
//  		});
//  		$.get('http://192.168.1.40:1337/menu.json', function(data2){
//         $('#app').append('<a href='+test+'>' + data2.menu[0].title + '</a>' +'<br>'+'<br>' + '<a id="mark">' + data2.menu[1].title + '</a>');
//  		var test = $.get('http://192.168.1.40:1337'+data2.menu[0].path.responseText);
//  		console.log(test);
//         });
//  		},
//  	};

//  	$(document).ready(function(){
//  		
//  	});
//  })(); 
// (function(){
// 	"use strict";
// 	var app = {
// 		menu : $.ajax('http://192.168.1.40:1337/menu.json'),
// 		alice: $.ajax('http://192.168.1.40:1337/alice.md'),
// 		mark: $.ajax('http://192.168.1.40:1337/example.md'),
// 		init:function(){
// 			app.menu();
// 			menu: function(){
// 				app.menu.done(function(){
// 					$.get('http://192.168.1.40:1337/menu.json',function(data){
// 					// for (var i = 0; i < data.menu.lenght; i++){
// 					// 	var pathJson = 'http://192.168.1.40:1337'+data.menu[i].path;
// 					// 	var title = data.menu[i].title;}
// 					console.log(pathJson,title);
// 				}),
// 				};
// 			}),
// 			},

// 		},
// 	};
// 	$(document).ready(function(){
// 		app.init();
// 	});
// })(); 

(function(){
	"use strict";
	var app = {
		menu : $.ajax('http://192.168.1.40:1337/menu.json'),
		alice: $.ajax('http://192.168.1.40:1337/alice.md'),
		mark: $.ajax('http://192.168.1.40:1337/example.md'),
		init:function(){
			app.menuf();
			app.transformation();
		},
		menuf : function(){
			app.menu.done(function(menuJ){
				for (var i = 0; i < menuJ.menu.length; i++) {
					menuJ[i]
					var pathJson = "http://192.168.1.40:1337"+menuJ.menu[i].path;
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
				$('#md').html(response);
			});
		},
	};


	$(document).ready(function(){
		app.init();
	});
})(); 