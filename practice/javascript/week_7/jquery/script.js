// jQuery(document).ready( function() {} );


jQuery(document).ready( function() {

    $("#light-off").click(function () {
        $("body").css({"background-color": "black", "color": "white"});
    });

    $("#light-on").click(function () {

        var body = $("body");
        body.css({"background-color": "white"});
        body.css("color", "black");
    });

    // new javascript function, takes two arguments, first is callback, second is how long in milliseconds.
    setTimeout(function () {

    // Add an element to the webpage. it adds it to the end.
    $("ol").append("<li>This was added after the fact.</li>");

    $("body").append("<h1>New section</h1><p>Welcome to this new section</p>");

    // Adds an element to the start of the child list, .prepend()
    $("body").prepend("<h1 style='color: red'>Alert! new virus!</h1>");

    // Adds an html as a child, replacing existing children, . html()
    $("ol").html("<li>All tasks done!</li>");
    

}, 3000);

$("#recycleButton").click(function() {
    
    // Removes the element you have selected.
    $('body').remove();
    
    // Removes all the children of the element you have selected.
    $('body').empty();

})
    

} );

