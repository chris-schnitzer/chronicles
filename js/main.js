$(window).on("load", function() {
    $("#load_wrap").fadeOut("slow");
});

var slider = $('#slider');
 
    $(document).on('scroll', function() {
    var currentScrollTop = $(this).scrollTop();
    
        $('.spacer').each(function() {
            var spacer = $(this);
        
            if(spacer.position().top <= currentScrollTop)
        
            slider.slider('option', 'value', 14);

        });
    

        $('.spacerTwo').each(function() {
            var spacer = $(this);
        
            if(spacer.position().top <= currentScrollTop)
  
            slider.slider('option', 'value', 13);
        });
   

        $('.spacerThree').each(function() {
            var spacer = $(this);
        
            if(spacer.position().top <= currentScrollTop)
  
            slider.slider('option', 'value', 12);
        });

        $('.spacerFour').each(function() {
            var spacer = $(this);
        
            if(spacer.position().top <= currentScrollTop)
  
            slider.slider('option', 'value', 11);
        });

        $('.spacerFive').each(function() {
            var spacer = $(this);
        
            if(spacer.position().top <= currentScrollTop)
  
            slider.slider('option', 'value', 10);
        });

        $('.spacerSix').each(function() {
            var spacer = $(this);
        
            if(spacer.position().top <= currentScrollTop)
  
            slider.slider('option', 'value', 9);
        });
        
        $('.spacerSeven').each(function() {
            var spacer = $(this);
        
            if(spacer.position().top <= currentScrollTop)
  
            slider.slider('option', 'value', 8);
        });

        $('.spacerEight').each(function() {
            var spacer = $(this);
        
            if(spacer.position().top <= currentScrollTop)
  
            slider.slider('option', 'value', 7);
        });

        $('.spacerNine').each(function() {
            var spacer = $(this);
        
            if(spacer.position().top <= currentScrollTop)
  
            slider.slider('option', 'value', 6);
        });

        $('.spacerTen').each(function() {
            var spacer = $(this);
        
            if(spacer.position().top <= currentScrollTop)
  
            slider.slider('option', 'value', 5);
        });

        $('.spacerEleven').each(function() {
            var spacer = $(this);
        
            if(spacer.position().top <= currentScrollTop)
  
            slider.slider('option', 'value', 4);
        });

        $('.spacerTwelve').each(function() {
            var spacer = $(this);
        
            if(spacer.position().top <= currentScrollTop)
  
            slider.slider('option', 'value', 3);
        });

        $('.spacerThirteen').each(function() {
            var spacer = $(this);
        
            if(spacer.position().top <= currentScrollTop)
  
            slider.slider('option', 'value', 2);
        });

        $('.spacerFourteen').each(function() {
            var spacer = $(this);
        
            if(spacer.position().top <= currentScrollTop)
  
            slider.slider('option', 'value', 1);
        });

    });


     $(function() {
            slider.slider({
                orientation: "vertical",
                min: 1,
                max: 14,
                value: 14,

                change: function(event, ui) {
                	if(!event.hasOwnProperty('cancelable')) // triggered programatically
                        return;
                    
                    window.location.hash = 'eraOne';
                    var value = slider.slider('value');

                    if(value >= 14) {
                        window.location.hash = 'eraOne';

                    }

                    else if (value == 13) {
                        window.location.hash = 'eraTwo';
                    }

                    else if (value == 12) {
                        window.location.hash = 'eraThree';
                    }

                    else if (value == 11) {
                        window.location.hash = 'eraFour';
                    }

                    else if (value == 10) {
                        window.location.hash = 'eraFive';
                    }

                    else if (value == 9) {
                        window.location.hash = 'eraSix';
                    }

                    else if (value == 8) {
                        window.location.hash = 'eraSeven';
                    }

                    else if (value == 7) {
                        window.location.hash = 'eraEight';
                    }

                    else if (value == 6) {
                        window.location.hash = 'eraNine';
                    }

                    else if (value == 5) {
                        window.location.hash = 'eraTen';
                    }

                    else if (value == 4) {
                        window.location.hash = 'eraEleven';
                    }

                    else if (value == 3) {
                        window.location.hash = 'eraTwelve';
                    }

                    else if (value == 2) {
                        window.location.hash = 'eraThirteen';
                    }

                    else if (value == 1) {
                        window.location.hash = 'eraFourteen';
                    };


                },
            });
        });


/* titles change on scroll*/






/*modal object*/
/*
var modal = (function() {


    var	$window = $(window);
    var	$modal = $('<div class="modal" />');
    var $content = $('<div id="modal_container" />');
    var $close = $('<img src="images/close.png" role="button" class="modal_close"></img>');
    
   
    $modal.append($content, $close);

    $close.on('click', function(e) {
    	e.preventDefault();
    	modal.close();
    });

    return {
    	center: function() {
    		var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
    		var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;
    		$modal.css({
    			top: top + $window.scrollTop(),
    			left: left + $window.scrollLeft()
    		})
    	},

    	open: function(settings) {
            $content.empty().append(settings.content);

            $modal.css({
            	width: settings.width || 'auto',
            	height: settings.height || 'auto'
            }).appendTo('body');

            $('#container').css({
                'position': 'fixed'
            });
            
            modal.center();
            $(window).on('resize', modal.center);
    	},

    	close: function() {
    		$content.empty();
    		$modal.detach();
    		$(window).off('resize', modal.center);
              $('#container').css({
                'position': 'relative'
            });
            
    	}


    };

}());
*/



      


                



        




       

        






