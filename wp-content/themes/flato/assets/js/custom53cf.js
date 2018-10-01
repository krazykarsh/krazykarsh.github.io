(function($) { 

	"use strict";

    // for skill chat jquary

    $(document).ready(function(e) {


        //var windowBottom = $(window).height();

        var index=0;

        $(document).scroll(function(){

            var module = $('.module-skills').offset();
            var topbar = $(window).scrollTop() + 280;
        	if(module){
        	       if( module.top < topbar ){

                		if(index==0){	
        
                			
        
                			$('.chart').easyPieChart({
        
                				easing: 'easeOutBounce',
        
                				onStep: function(from, to, percent) {
        
                					$(this.el).find('.percent').text(Math.round(percent));
        
                				}
        
                			});
        
                			
        
                		}
        
                		index++;
        
                	}
        	   
        	}
            

        });
        
        // One Page Scrolling 
    	$('.navbar-nav').onePageNav({
    		currentClass: 'active',
    		filter: ':not(.external)',
    		scrollOffset: 40
    	}); 

        
        //wrapper content take out script 

        $('.take-out').each(function(e){  

            var $this = $(this),

                $parent = $this.parents('.container');

                $parent.css('padding-bottom', '0px')

            $parent.after($this);

        });

 });       

        

    //For background slider

    $(function() {

    			

    	$( '#ri-grid' ).gridrotator( {

    		rows		: 4,

    		columns		: 8,

    		animType	: 'fadeInOut',

    		animSpeed	: 1000,

    		interval	: 600,

    		step		: 1,

    		

    		w1024		: {

    			rows	: 5,

    			columns	: 6

    		},

    		w768		: {

    			rows	: 7,

    			columns	: 4

    		},

    		w480		: {

    			rows	: 4,

    			columns	: 3

    		},

    		w320		: {

    			rows	: 4,

    			columns	: 2

    		},

    		w240		: {

    			rows	: 4,

    			columns	: 2

    		}

    	} );

    

    });

    



    // for banner height js

    var windowWidth = $(window).width();

        var windowHeight =$(window).height();

        $('.banner').css({'width':windowWidth ,'height':windowHeight -"60" });

	

    // for portfoli lightbox jquary

    jQuery(function($) {

    	var $chosenSheet,

    	$stylesheets = $( "a[id^=theme-]" );

    	

    	// run rlightbox

    	$( ".lb" ).rlightbox();

    	$( ".lb_title-overwritten" ).rlightbox({overwriteTitle: true});

    });

    

    $( ".navbar.navbar-inverse.navbar-static-top a" ).click(function() {

      $( ".navbar-collapse" ).addClass( "hideClass" );

    });

    

    

    $( ".navbar.navbar-inverse.navbar-static-top a" ).click(function() {

      $( ".navbar-collapse" ).addClass( "collapse" );

    });

    

    

    $( ".navbar.navbar-inverse.navbar-static-top a" ).click(function() {

      $( ".navbar-collapse" ).removeClass( "in" );

    });

    

    $( ".navbar-toggle" ).click(function() {

      $( ".navbar-collapse" ).removeClass( "hideClass" );

    });	


    // for portfoli filter jquary

    $(window).load(function(){
    
    	if( ($('body').data('sticky') === null) || ( $('body').data('sticky')=== undefined) || ( $('body').data('sticky').length === 0) ){
    		$(".menu").sticky({ topSpacing: 0 });
    	}
        
        

        var $container = $('.portfolioContainer');

        $container.isotope({

            filter: '*',

            animationOptions: {

                duration: 750,

                easing: 'linear',

                queue: false

            }

        });

     

        $('.portfolioFilter a').click(function(){

            $('.portfolioFilter .current').removeClass('current');

            $(this).addClass('current');

     

            var selector = $(this).attr('data-filter');

            $container.isotope({

                filter: selector,

                animationOptions: {

                    duration: 750,

                    easing: 'linear',

                    queue: false

                }

             });

             return false;

        });

        

        // chart loding

        var chart = window.chart = $('.chart').data('easyPieChart');

    	$('.js_update').on('click', function() {

    		chart.update(Math.random()*100);

    	}); 
        
        $('.flexslider').flexslider({

            prevText : '',

            nextText : '',

            controlNav : false

        });
        

    });
    
    



}(jQuery));