$(document).ready(function(){
	//Goto Top
	/* ------------------------------------------------------------------*/
		  $(".gotop").click(function(){
			$(document.body).animate({'scrollTop':0},100);
		  });

	//Smooth Scroll
	/*--------------------------------------------------------------------*/
		if ($(".smooth-scroll").length>0) {
			$('.smooth-scroll a[href*=#]:not([href=#])').click(function() {
				var target = $(this.hash);
				if (target) {
					$('html,body').animate({
						scrollTop: target.offset().top - 50
					}, 1000);
					return false;
				}
			});
		}

	//adaptive browser background image
	 /*--------------------------------------------------------------------*/
		if ($(".adaptive_browser").length>0) {
			$('.adaptive_browser').height($(window).height());
			$('.adaptive_browser').width($(window).width());
		}
		
	var fs = $( ".full_screen" );

	$( ".qr-item" ).click( function(e){
	  var src = $(this).attr( "data-QR" );
	  fs.find("img").attr( "src", src );
	  fs.fadeIn( 300 );
	});

	fs.find( ".close" ).click( function(e){
	  fs.find( "img" ).attr( "src", '' );
	  fs.fadeOut( 300 );
	});
	
	$(".pdf_view").find( ".close" ).click( function(e){
		$(".pdf_view").fadeOut(300)
		$('a.media').media({width:0, height:0});
	});
	
	$(".quote").on("click", function(e)
	{
		$(".pdf_view").fadeIn(300)
		$('a.media').media({width:800, height:600});
	})
	
	$(".american_capitain").mouseover(function(){
		$(".revolution_title").css("color","blue");
	});
	$(".iron_man").mouseover(function(){
		$(".revolution_title").css("color","red");
	});
	$(".hulk").mouseover(function(){
		$(".revolution_title").css("color","green");
	});
	
	$(".school_list").mouseout(function(){
		$(".revolution_title").css("color","white");
	});
});

// onload function
function load()
{
	$(".loading_wrapper").hide();
	$(".main_wrapper").show();
}

//shuffle lettres plug-in
$(function(){
	var els = $(".shuffle");
	for( var i = 0; i < els.length; i++)
		els.shuffleLetters();
});

// owl-carousel

$(function(){
	var time = 14;	// time -> next

	var $progressBar, $bar, $elem, isPause, tick, percentTime;

	$('#owl-demo').owlCarousel({
		slideSpeed: 500,
		paginationSpeed: 500,
		singleItem: true,
		afterInit: progressBar,
		afterMove: moved,
		startDragging: pauseOnDragging,
        autoHeight: false
	});

	function progressBar(elem){
		$elem = elem;
		buildProgressBar();
		start();
	}

	function buildProgressBar(){
		$progressBar = $('<div>',{
			id:'progressBar'
		});
		$bar = $('<div>',{
			id:'bar'
		});
		$progressBar.append($bar).insertAfter($elem.children().eq(0));
	}

	function start(){
		percentTime = 0;
		isPause = false;
		tick = setInterval(interval, 10);
	}

	function interval(){
		if(isPause === false){
			percentTime += 1 / time;
			$bar.css({
				width: percentTime+'%'
			});
			if(percentTime >= 100){
				$elem.trigger('owl.next')
			}
		}
	}

	function pauseOnDragging(){
		isPause = true;
	}

	function moved(){
		clearTimeout(tick);
		start();
	}

	$elem.on('mouseover',function(){
		isPause = true;
	})

	$elem.on('mouseout',function(){
		isPause = false;
	});
});

$(function () {

	$('#pi').highcharts({
	            
	    chart: {
	        polar: true,
	        type: 'line'
	    },
	    
	    title :{
			text:null
		},
	    
	    pane: {
	    	size: '90%'
	    },
	    
	    xAxis: {
	        categories: ['Sports', 'Movies', 'Photography', 'Food', 
	                'Travel', 'Coding'],
	        tickmarkPlacement: 'on',
	        lineWidth: 0
	    },
	        
	    yAxis: {
	        gridLineInterpolation: 'polygon',
	        lineWidth: 0,
	        min: 0
	    },
	    
	    tooltip: {
	    	shared: true,
	        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}%</b><br/>'
	    },
	    
	    legend: {
	        align: 'middle',
	        verticalAlign: 'middle',
	        y: 0,
	        layout: 'vertical'
	    },
		
		credits:{
			enabled:false
		},
	    
	    series: [{
	        name: "Fever",
	        data: [90, 70, 50, 90, 80, 80],
	        pointPlacement: 'on',
	    },
		{
	        name: "Actual",
	        data: [30, 10, 10, 30, 20, 95],
	        pointPlacement: 'on',
	    }]
	
	});
});

$(document).ready(function(){

		var bInitial = true;
		
		var waypoints = $('#Home').waypoint(function(direction) {
		
			if(direction == 'up')
				{
					$("nav").css("opacity","0.5") 
					$("#About-tab").css("color", "#777")
					$("#Education-tab").css("color", "#777")
					$("#Career-tab").css("color", "#777")
				}
			},
			{
			offset: '-90%'
			}
		)
		
		var waypoints = $('#About').waypoint(function(direction) {
				if(direction == 'down')
				{
					$("nav").css("opacity","1.0") 
					$("#About-tab").css("color", "#493D26")
					$("#Education-tab").css("color", "#777")
					$("#Career-tab").css("color", "#777")
				}
			},
			{
			offset: 52
			}
		)
		var waypoints = $('#Education').waypoint(function(direction) {
				if(direction == 'down')
				{
					$("nav").css("opacity","1.0") 
					$("#About-tab").css("color", "#777")
					$("#Education-tab").css("color", "#493D26")
					$("#Career-tab").css("color", "#777")
				}

			},
			{
			offset: 52
			}
		)
		var waypoints = $('#Career').waypoint(function(direction) {
				if(direction == 'down')
				{
					$("nav").css("opacity","1.0") 
					$("#About-tab").css("color", "#777")
					$("#Education-tab").css("color", "#777")
					$("#Career-tab").css("color", "#493D26")
				}
			},
			{
			offset: 52
			}
		)
		
		var waypoints = $('#About').waypoint(function(direction) {
				if(direction == 'up')
				{
					$("nav").css("opacity","1.0") 
					$("#About-tab").css("color", "#493D26")
					$("#Education-tab").css("color", "#777")
					$("#Career-tab").css("color", "#777")
					if (bInitial)
					{
						$("nav").css("opacity","0.5") 
						$("#About-tab").css("color", "#777")
						$("#Education-tab").css("color", "#777")
						$("#Career-tab").css("color", "#777")
						bInitial = false;
					}
				}
			},
			{
			offset: 48
			}
		)
		var waypoints = $('#Education').waypoint(function(direction) {
				if(direction == 'up')
				{
					$("nav").css("opacity","1.0") 
					$("#About-tab").css("color", "#777")
					$("#Education-tab").css("color", "#493D26")
					$("#Career-tab").css("color", "#777")
				}

			},
			{
			offset: 48
			}
		)
		var waypoints = $('#Career').waypoint(function(direction) {
				if(direction == 'up')
				{
					$("nav").css("opacity","1.0") 
					$("#About-tab").css("color", "#777")
					$("#Education-tab").css("color", "#777")
					$("#Career-tab").css("color", "#493D26")
				}
			},
			{
			offset: 48
			}
		)
})

$(function() {

	// say we want to have only one item opened at one moment
	var opened = false;

	$( '#grid > div.uc-container' ).each( function( i ) {

		var $item = $( this ), direction;

		switch( i ) {
			case 0 : direction = ['right','bottom']; break;
			case 1 : direction = ['left','bottom']; break;
			case 2 : direction = ['right','top']; break;
			case 3 : direction = ['left','top']; break;
		}
		
		var pfold = $item.pfold( {
			folddirection : direction,
			speed : 300,
			onEndFolding : function() { opened = false; },
			centered : true
		} );

		$item.find( 'span.icon-eye' ).on( 'click', function() {

			if( !opened ) {
				opened = true;
				pfold.unfold();
			}


		} ).end().find( 'span.icon-cancel' ).on( 'click', function() {

			pfold.fold();

		} );

	} );
	
});


