var fs = require('fs')

var filePath = 'C:\\Users\\kzdatd\\Desktop\\tmp.txt'

fs.readFile(filePath, 'utf-8', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
