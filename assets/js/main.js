(function ($) {
    "use strict";
    
/* ==========================================================================
   //mean menu link
  ========================================================================== */
    jQuery('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "991",
  });

/* ==========================================================================
   //header-sticky
  ========================================================================== */
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 150) {
      $(".header-sticky").removeClass("sticky");
    } else {
      $(".header-sticky").addClass("sticky");
    }
  });


    /*-------------------------------------
     Background function
     -------------------------------------*/
     $.fn.theme_background_image = function() {
        $(this).each(function() {
            var url = $(this).attr('data-image');
            if(url){
                $(this).css('background-image', 'url(' + url + ')');
            }
        });
    };
    $('.theme-bg-img').theme_background_image();

/* ==========================================================================
   //poject activation link
  ========================================================================== */
  var grid =  $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: '.grid-item'
    }
  })
  // var $gallery = $( '#gellary' ).isotope( {

  // } );
 // filter items on button click
$('.project-menu').on( 'click', 'button', function() {
var filterValue = $(this).attr('data-filter');
grid.isotope({ filter: filterValue });
});
//for menu activation
$('.project-menu button').on('click', function(even){
$(this).siblings('.active').removeClass('active');
$(this).addClass('active');
even.preventDefault();
});
$('.project-img').magnificPopup({
type: 'image',
// other options
gallery: {
    enabled: true
  }
});
/* ==========================================================================
   //nav link
  ========================================================================== */
    // Add scrollspy to <body>
    $('body').scrollspy({
       target: ".Navmenu-nav",
       offset: 67
   });
   // Add smooth scrolling on all links inside the navbar
   $(".Navmenu-nav a").on('click', function (event) {
   
       // Make sure this.hash has a value before overriding default behavior
       if (this.hash !== "") {
   
           // Prevent default anchor click behavior
           event.preventDefault();
   
           // Store hash
           var hash = this.hash;
   
           // Using jQuery's animate() method to add smooth page scroll
           // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
           $('html, body').animate({
               scrollTop: $(hash).offset().top
           }, 800, function () {
   
               // Add hash (#) to URL when done scrolling (default click behavior)
               window.location.hash = hash;
           });
           $(".Navmenu").collapse("hide");
   
       } // End if
   
   });

})(jQuery);	    