$(document).ready(function(event){

    /* intro button toggle for sections*/

    $(".content").hide();
    $("section").click( function(){
        var eleSelect = $(this);
        if (!eleSelect.attr('clickToggle')) {
            eleSelect.attr('clickToggle', 0);
        };
        var eleChildren = $(eleSelect).children();
        console.log(eleChildren);
        if (eleSelect.attr('clickToggle') == 0) {
            eleSelect.animate({width: '70%'},"slow", function() {     // selects element with tag section
                eleSelect.children(".content").slideToggle(500);      // slides down child of section with class content
            });
            eleSelect.attr('clickToggle', 1);
        } else {
            eleSelect.children(".content").slideToggle("slow", function() {
                eleSelect.animate({width: '30%'});
            });
            eleSelect.attr('clickToggle', 0);
        };
    });

    /* */

    
});