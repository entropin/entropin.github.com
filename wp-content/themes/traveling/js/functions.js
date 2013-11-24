jQuery(function(){
	jQuery('#menu li').hover(function(){
		jQuery(".menu_current",this).addClass('unhide');
		},function(){
		jQuery(".menu_current",this).removeClass('unhide');
			});
	
	
	
	
var halfWay = (jQuery(document).height()/2);
var offset = 10;
var inAction = false;
var reachedEnd = false;

jQuery(document).scroll(function(){
	
   if(jQuery(document).scrollTop() > halfWay && inAction == false){
       inAction = true;
       
       
			 jQuery.ajax({
			  url: 'wp-content/themes/traveling/get-posts.php?offset='+offset,
			  success: function(html){
			  offset = offset + 10;
			  halfWay = halfWay + 1775;
			  inAction = false;
			  jQuery('#content_wrapper').append(jQuery(html));
			  }
			});

   }
});
	
	
	
	});
	
	
	

