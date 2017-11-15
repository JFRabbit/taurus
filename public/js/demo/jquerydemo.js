$(document).ready(function () {
    // ======================Selector=======================
    // id => #
    $("#hide1").click(function () {
        $(this).hide();
    });
    // class => .
    $(".hide2").click(function () {
        $(this).hide();
    });
    $("button.hide3").click(function () {
        $(this).hide();
    });
    // property => [type_key='type_value']
    $("button[title='hide4']").click(function () {
        $(this).hide();
    });
    // first
    $("ul li:first").click(function () {
        $(this).hide();
    });
    // child
    $("ul li:last-child").click(function () {
        $(this).hide();
    });

    // ======================Event=======================
    $("#event").click(function () {
        console.log("click event");
    }).dblclick(function () {
        console.log("dblclick event");
    }).mouseenter(function () {
        console.log("mouseenter event");
    }).mouseleave(function () {
        console.log("mouseleave event");
    }).mousedown(function () {
        console.log("mousedown event");
    }).mouseup(function () {
        console.log("mouseup event");
    }).hover(function () { // mouseenter + mouseleave
        console.log("hover event");
    });

    $("#focus").focus(function () {
        console.log("focus event");
    }).blur(function () {
        console.log("blur event");
    });

    // ======================hide/show/toggle=======================
    $("#hide_show1").mousedown(function () {
        $("#shower").hide("slow"); // "slow"/fast or millisecond
    }).mouseup(function () {
        $("#shower").show("fast");
    });
    $("#hide_show2").click(function () {
        $("#shower").toggle(); // hide + show
    });

    // ======================fadeIn/fadeOut/fadeToggle=======================
    $("#fadeIn").click(function () {
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    });

    // ======================slideDown/slideUp/slideToggle=======================
    $("#flip").click(function () {
        $("#panel").slideToggle("slow");
    });

    // ======================animate=======================
    $("#animate0").click(function () {
        $("#animate").animate({
            height: 'toggle'
        });
    });
    $("#animate1").click(function () {
        $("#animate").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    });
    $("#animate2").click(function () {
        var div = $("#animate");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
    $("#animate3").click(function () {
        var div = $("#animate");
        div.animate({left: '100px'}, "slow");
        div.animate({fontSize: '1.5em'}, "slow");
    });
    $("#animate4").click(function () {
        $("#animate").hide("slow", function () {
            alert("callback");
        });
        console.log();

    });
    $(".default_div").click(function () {
        $(".animate").animate({
            left: '0px',
            opacity: '1',
            background: "#98bf21",
            height: "100px",
            width: "100px",
            position: "relative",
            fontSize: '1em'
        }).css("color", '#000000');
    });
    // ======================stop animate=======================
    $("#stop_animate").click(function () {
        $(".animate").stop(true);
    });
    // ======================JQuery Chaining=======================
    $("#animate5").click(function () {
        $("#animate").css("color", "#FF0000")
            .slideUp(2000)
            .slideDown(2000)
    });

    // ======================HTML=======================
    // ======================Catch HTML=======================
    $("#show_text_and_val").click(function () {
        console.log($("#text").text());
        console.log($("#text").html()); // 可包含标签
        console.log($("#text").attr("href"));
        console.log($("#val").val());
    });
    $("#change_text_and_val").click(function () {
        $("#text").text("changed1");
        $("#text").html("<b>changed2</b>");
        // $("#text").attr("href", "http://www.google.com");
        $("#text").attr({
            "href": "http://www.google.com",
            "title": "set title"
        });
        $("#val").val("changed");
    });
    $("#change_callback").click(function () {
        $("#text").text(function (i, originalText) {
            return "callback: " + i + " " + originalText;
        });
        // $("#text").html(function (i, originalText) {
        //     return "callback: " + i + " " + originalText;
        // });
        $("#text").attr("href", function (i, originalText) {
            return "callback: " + i + " " + originalText;
        });
        $("#val").val(function (i, originalText) {
            return "callback: " + i + " " + originalText;
        });
    });
});