$(document).ready(function(){
    let clickIntro = 0;
    $("#intro").click(function(){
        console.log($(this));
        $("#introContent").slideToggle("slow");
        if (clickIntro == 0) {
            $(this).css("width", "+=20%");
            clickIntro = 1;
        } else {
            $("#intro").css("width", "-=20%");
            clickIntro = 0;
        }
    });

    $("#workHead").click(function(){
        $("#workContent").slideToggle("slow");
    });

    $("#educationHead").click(function(){
        $("#educationContent").slideToggle("slow");
    });

    $("#projectHead").click(function(){
        $("#projectContent").slideToggle("slow");
    });

    $("#ccaHead").click(function(){
        $("#ccaContent").slideToggle("slow");
    });
});