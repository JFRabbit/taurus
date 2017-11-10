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
