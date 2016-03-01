$("button").hover(
    function() {
        $(this).addClass('hover');
    }, function() {
        $( this ).removeClass('hover');
    }
);
$( "button" ).click(function(){
    var div = $(this);
    div.toggleClass('active');
    if (!div.is(".active")) {
        div.removeClass("hover");
    }
});
