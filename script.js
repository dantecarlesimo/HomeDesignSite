
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
      $('.collage').html('<h4>this is the about section. add stuff here later.</h4>');


    });
    $( "#collections").on( "click", function() {
      $('.collage').html('<h4>Display info about the different home collections</h4>');


    });
    $( "#contact").on( "click", function() {
      $('.collage').html('<h4>Contact Info here.</h4>');


    });



});


//$('p').html("changing the p text");
// $('p').append("testing more");
// $('div.homeBox').append("<li>this is a LI</li>");
//  $('#mouseStuff').append("<p> YAY! </p>");

//$('div.collapse').accordion({collapsible: true, active: true});



//  $('.container').mouseover(function() {
//      alert("hover");
//     $('#imgContainer').append("<p> YAY! </p>");
//
//
//
//});

//  $('.text').hide().removeClass('text').addclass('text-js');
