// ======================Selector=======================

// id => #
$(document).ready(function () {
    $("#hide1").click(function () {
        $(this).hide();
    });
});

// class => .
$(document).ready(function () {
    $(".hide2").click(function () {
        $(this).hide();
    });
});

$(document).ready(function () {
    $("button.hide3").click(function () {
        $(this).hide();
    });
});

// property => [type_key='type_value']
$(document).ready(function () {
    $("button[title='hide4']").click(function () {
        $(this).hide();
    });
});

// first
$(document).ready(function () {
    $("ul li:first").click(function () {
        $(this).hide();
    });
});

// child
$(document).ready(function () {
    $("ul li:last-child").click(function () {
        $(this).hide();
    });
});

// ======================Event=======================
$(document).ready(function () {
    $("#event").click(function () {
        console.log("click event");
    });
    $("#event").dblclick(function () {
        console.log("dblclick event");
    });
    $("#event").mouseenter(function () {
        console.log("mouseenter event");
    });
    $("#event").mouseleave(function () {
        console.log("mouseleave event");
    });
    $("#event").mousedown(function () {
        console.log("mousedown event");
    });
    $("#event").mouseup(function () {
        console.log("mouseup event");
    });
    $("#event").hover(function () { // mouseenter + mouseleave
        console.log("hover event");
    });
});

$(document).ready(function () {
    $("#focus").focus(function () {
        console.log("focus event");
    });
    $("#focus").blur(function () {
        console.log("blur event");
    });
});