// jQuery(document).ready( function() {} );


jQuery(document).ready( function() {

    $("body").empty();

    var body = $("body");
    
    body.append("<h1>Welcome</h1>");
    $("h1").css("border", "10px dashed black");

    body.append("<p>Topic One</p>");

    body.append("<ul></ul>");

    $("ul").append("<li>Item 1</li>");
    $("ul").append("<li>Item 2</li>");
    $("ul").append("<li>Item 3</li>");

    $("ul").css("background-color", "lightgrey");

    $("li:nth-child(2)").remove();

    $("li")[1].remove();


    // jQuery .next(), .prev()
    // JQuery .parent(), .children()

    $("body").children("ul").prev().prev().next();

});


