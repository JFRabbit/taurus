function testGet() {
    $.ajax({
        type: "GET",
        url: "admin/pageinfo?page=1&size=25", //?page=1&size=25
        contentType: "application/json;charset=UTF-8",
        success: function (data) {
            console.log(data.code);
        },
        error: function () {
            console.log("error");
        }
    });
}

function showInput() {
    document.getElementById("input_show").innerHTML = "";
    document.getElementById('input_show').innerHTML = document.getElementById("input_send").value;
}

function testPost() {
    var name = document.getElementById("user_name").value;
    var age = document.getElementById("user_age").value;
    $.ajax({
        type: "POST",
        url: "admin/user",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({'name': name, 'age': age}),
        success: function (data) {
            if (data.data.name === undefined || data.data.age === undefined) {
                console.error(data.msg);
                document.getElementById("show_user").innerHTML = data.msg;
            } else {
                console.log(data);
                document.getElementById("show_user").innerHTML = data.data.name + ":" + data.data.age;
            }
        },
        error: function (data) {
            console.error(data);
        }
    });
}