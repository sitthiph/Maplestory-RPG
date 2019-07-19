// Mouse animation effect
$(document).mousedown(function () {
    $("html").attr("id", "onkeydown");
});
$(document).mouseup(function () {
    $("html").attr("id", "onkeyup");
});

$(document).ready(function(){

    $("#button-start").click(function () {
        $("#char-select-container").toggle();
        $("#button-start").toggle();
    });

    // Toggle (.class-not-select) to make not-select opacity = 0.5;
    $("#phantom-class-section").click(function () {
        if($("#phantom-class-section").hasClass("select")){
            game.charSelect("Phantom");
        } else {
            $("#phantom-class-section").toggleClass("select");
            if (!$("#luminous-class-section").hasClass("class-not-select"))
                $("#luminous-class-section").toggleClass("class-not-select");
            if (!$("#dual-blade-class-section").hasClass("class-not-select"))
                $("#dual-blade-class-section").toggleClass("class-not-select");
            if ($("#phantom-class-section").hasClass("class-not-select"))
                $("#phantom-class-section").toggleClass("class-not-select");
            if ($("#luminous-class-section").hasClass("select"))
                $("#luminous-class-section").toggleClass("select");
            if ($("#dual-blade-class-section").hasClass("select"))
                $("#dual-blade-class-section").toggleClass("select");
        }
    });
    $("#luminous-class-section").click(function () {
        if($("#luminous-class-section").hasClass("select")){
            // TODO: LOL imagine if I actually coded it? V.1.2 prob;
        } else {
            $("#luminous-class-section").toggleClass("select");
            if ($("#luminous-class-section").hasClass("class-not-select"))
                $("#luminous-class-section").toggleClass("class-not-select");
            if (!$("#dual-blade-class-section").hasClass("class-not-select"))
                $("#dual-blade-class-section").toggleClass("class-not-select");
            if (!$("#phantom-class-section").hasClass("class-not-select"))
                $("#phantom-class-section").toggleClass("class-not-select");
            if ($("#phantom-class-section").hasClass("select"))
                $("#phantom-class-section").toggleClass("select");
            if ($("#dual-blade-class-section").hasClass("select"))
                $("#dual-blade-class-section").toggleClass("select");
        }
    });
    $("#dual-blade-class-section").click(function () {
        if($("#dual-blade-class-section").hasClass("select")){
            // TODO: LOL imagine if I actually coded it? V.1.4 prob;
        } else {
            $("#dual-blade-class-section").toggleClass("select");
            if (!$("#luminous-class-section").hasClass("class-not-select"))
                $("#luminous-class-section").toggleClass("class-not-select");
            if ($("#dual-blade-class-section").hasClass("class-not-select"))
                $("#dual-blade-class-section").toggleClass("class-not-select");
            if (!$("#phantom-class-section").hasClass("class-not-select"))
                $("#phantom-class-section").toggleClass("class-not-select");
            if ($("#luminous-class-section").hasClass("select"))
                $("#luminous-class-section").toggleClass("select");
            if ($("#phantom-class-section").hasClass("select"))
                $("#phantom-class-section").toggleClass("select");
        }
    });

});