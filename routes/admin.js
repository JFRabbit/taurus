var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    console.log("=GET=");
    var msg = {name: "Tom", age: 18};
    res.set('Content-Type', 'application/json;charset=UTF-8');
    res.send(JSON.stringify(msg));
});

// get demo
router.get('/pageinfo', function (req, res) {
    console.log("page: " + req.query.page + " " + typeof req.query.page);
    console.log("size: " + req.query.size + " " + typeof req.query.size);
    var code;
    if (req.query.page === undefined || req.query.size === undefined) {
        code = 0;
        res.json({
            code: code
        });
        return;
    }
    code = 1;
    res.json({
        code: code
    });
});


// post demo
router.post('/user', function (req, res) {
    console.log("name: " + req.body.name + " " + typeof req.body.name);
    console.log("age: " + req.body.age + " " + typeof req.body.age);

    var name = req.body.name;
    var age = parseInt(req.body.age) + 10;
    console.log(name + "|" + age);

    res.set('Content-Type', 'application/json;charset=UTF-8');

    if (name.toString().trim() === "" || isNaN(age)) {
        res.json({
            code: 0,
            msg: 'sign in failed',
            data: {}
        });
        return;
    }

    res.json({
        code: 1,
        msg: 'sign in success',
        data: {
            name: name,
            age: age
        }
    });
});

module.exports = router;
