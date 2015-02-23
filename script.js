
$(document).ready(function() {

// CODE TO FADE PICTURE & SHOW TEXT AND BUTTONS FOR FLOORPLANS & ELEVATIONS
    $('.container').hover(
      function() {
      $(this).find('img').stop().fadeTo('slow', 0.3);
      $(this).find('.text').show('fast');
      },
      function () {
      $(this).find('img').stop().fadeTo('slow', 1);
      $('.text').hide('fast');
    });

    $( "#about").on( "click", function() {
         $('.collage, .collections, .contact').hide();
         $('.about').show();
    });
    $( "#collections").on( "click", function() {
        $('.collage, .about, .contact').hide();
        $('.collections').show();
    });
    $( "#contact").on( "click", function() {
        $('.collage, .about, .collections').hide();
        $('.contact').show();
    });
    $( "#home").on( "click", function() {
        $('.collections, .about, .contact').hide();
        $('.collage').show();
    });

});
