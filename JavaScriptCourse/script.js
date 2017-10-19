//.CODE javascript page JavaScript code desiged and created by James Hunt and Brandon Rodgers - 29/07/17
$(document).ready(function () {
    function main () {
      //Code for the navigation bar:
      $('#nav-bar h3 a').hover(function () {
        $(this).animate({color: '#808080'}, 250);
      }, function () {
        $(this).animate({color: '#FF8C00'}, 250);
      });
      //Code for the navigation menu on the course breakdown section:
      $('#course-info a').hover(function () {
        $(this).animate({color: '#808080'}, 250);
      }, function () {
        $(this).animate({color: '#333'}, 250);
      });
      //Code for the buttons that return the users back to the nav-bar:
      $('.return-to-menu a').hover(function () {
        $(this).animate({color: '#808080'}, 250);
      }, function () {
        $(this).animate({color: '#333'}, 250);
      });
      //Code for footer:
      $('#footer a').hover(function () {
        $(this).animate({color: '#808080'}, 250);
      }, function () {
        $(this).animate({color: '#ffffff'}, 250);
      });
    };
    main();
});
