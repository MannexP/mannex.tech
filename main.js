
$(document).ready(function () {
    // For sticky navigation
    $('.js-projects').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });
  



   
});

console.log("hello");

