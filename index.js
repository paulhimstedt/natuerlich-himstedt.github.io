//function goToByScroll(id) {
//    // Reove "link" from the ID
//    id = id.replace("link", "");
//    // Scroll
//    $('html,body').animate({
//            scrollTop: $("#" + id).offset().top
//        },
//        'slow');
//}
//
//$("#menu-container > ul > li > a").click(function(e) {
//    // Prevent a page reload when a link is pressed
//    console.log("zacjk")
//    e.preventDefault();
//    // Call the scroll function
//    goToByScroll($(this).attr("id"));
//});

//$(document).ready(function() {
//    $("#beratunglink").click(function() {
//        console.log("klickklacjk")
//        var x = $("#beratung").position(); //gets the position of the div element...
//        window.scrollTo(x.left, x.top); //window.scrollTo() scrolls the page upto certain position....
//        //it takes 2 parameters : (x axis cordinate, y axis cordinate);
//    });
//});