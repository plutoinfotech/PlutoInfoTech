
// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number parseInt',
    category: '[data-category]',
    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});



// Menu Background
$(window).scroll(function(){
    if($(window).scrollTop()>100){
        $('#menu').addClass('menu_bg');
    }
    else{
        $('#menu').removeClass('menu_bg');
    }
    
    if($(window).scrollTop()>$('#slider').height()){
        $('#menu').css('border-bottom','2px solid #fff');
    }
    else{
        $('#menu').css('border-bottom','none');
    }
});


$(document).ready(function(){
    
    $('.carousel').carousel({
        interval: 5000
    })
    
    
    // Slider Image
    $('.slider_img').css({
        width: $(window).width(),
        height: $(window).height()
    });
    
    	
    // OWL Carousel
    var owl = $("#owl-demo");
	 
    owl.owlCarousel({
        items : 4,
        itemsDesktop : [1366,4],
        itemsDesktopSmall : [1024,3],
        itemsTablet: [768,2],
        itemsMobile : [480,1],
        autoPlay : true
    });
    




    //For Animate Menu
    $('.home_menu, .navbar-brand').click(function() {
        $('html,body').animate({scrollTop:$('html,body').offset().top - 0}, 1000);
    });
    $('.about_menu').click(function() {
        $('html,body').animate({scrollTop:$('#about').offset().top - 60}, 1000);
    });
    $('.service_menu').click(function() {
        $('html,body').animate({scrollTop:$('#service').offset().top - 60}, 1000);
    });
    $('.portfolio_menu').click(function() {
        $('html,body').animate({scrollTop:$('#portfolio').offset().top - 60}, 1000);
    });
    $('.in_short_menu').click(function() {
        $('html,body').animate({scrollTop:$('#counter').offset().top - 60}, 1000);
    });
    $('.team_menu').click(function() {
        $('html,body').animate({scrollTop:$('#team').offset().top - 60}, 1000);
    });
    $('.testimonial_menu').click(function() {
        $('html,body').animate({scrollTop:$('#text-slider').offset().top - 60}, 1000);
    });
    $('.contact_menu').click(function() {
        $('html,body').animate({scrollTop:$('#contact').offset().top - 60}, 1000);
    });


    
    // Counter
    $('.count').counterUp({
        delay: 10,
        time: 2000
    });
    
    $(".navbar-nav>li").click(function(){
        $(".navbar-collapse").removeClass("in");
    });
});

  

  
