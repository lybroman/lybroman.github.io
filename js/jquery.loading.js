/**
 * @name		Nice Loading Effect
 * @author		Yubo Li
 * @version 	1.0
 * @url			
 * @license		MIT License
 */

(function($){
	
	$.fn.loading = function(prop){
		
		var options = $.extend({
			"step"		: 4,			// How many times should the letters be changed
			"length"	: 480,			// Frames Per Second
			"callback"	: function(){}	// Run once the animation is complete
		},prop)
		
		for( var i = 0 ; i < options.step;  i++)
		{
			for(var j = 0; j < options.step; j++)
			{
				var ml = -1 * j * (options.length/options.step);
				var mt = -1 * i * (options.length/options.step);;
				var block = "<div style=\"overflow:hidden; width:" + (options.length/options.step).toString() + "px; height:" +  (options.length/options.step).toString() 
				+ "px; float:left\">"
				+ "<img class=\"shading delay_"+ (j + i) + "\" style=\"width:480px; height:480px; opacity:1.0; margin-left:" + ml + "px; margin-top:"  + mt
				+"px\" src=\"../imgs/yl_neg.png\">"
				+ "</div>"
				$(this)[0].innerHTML += block
			}
		}
	};
	
	
})(jQuery);