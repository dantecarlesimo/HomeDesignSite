
$(document).ready(function() {
   //$('p').html("changing the p text");
  // $('p').append("testing more");
  // $('div.homeBox').append("<li>this is a LI</li>");
//  $('#mouseStuff').append("<p> YAY! </p>");

  $('div.collapse').accordion({collapsible: true, active: true});



  //  $('.container').mouseover(function() {
  //      alert("hover");
  //     $('#imgContainer').append("<p> YAY! </p>");
  //
  //
  //
   //});

  //  $('.text').hide().removeClass('text').addclass('text-js');

    $('.container').hover(
      function() {
      $(this).find('img').stop().fadeTo('slow', 0.3);
      $('.text').show('fast');
      },
      function () {
      $(this).find('img').stop().fadeTo('slow', 1);
      $('.text').hide('fast');
    });


});
