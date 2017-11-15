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
    // ======================append|prepend|before|after=======================
    $("#append_prepend_before_after_button").click(function () {
        var append_1 = "<span id='foo1'> append_1</span>";
        var append_2 = "<span> append_2</span>";
        var prepend_1 = "<span>prepend_1 </span>";
        var prepend_2 = "<span>prepend_2 </span>";
        var before_1 = "<span>before_1 </span>";
        var before_2 = "<span>before_2 </span>";
        var after_1 = "<span> after_1</span>";
        var after_2 = "<span> after_2</span>";

        $("#append_prepend_before_after_span").append(append_1, append_2);
        $("#append_prepend_before_after_span").prepend(prepend_1, prepend_2);
        $("#append_prepend_before_after_span").before(before_1, before_2);
        $("#append_prepend_before_after_span").after(after_1, after_2);
    });
    $("#remove").click(function () {
        $("span").remove("#foo1");
    });
    $("#removeAll").click(function () {
        $("#append_prepend_before_after_span").remove();
    });
    $("#empty").click(function () {
        $("#empty_div").empty();
    });

});