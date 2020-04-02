const fs = require('fs')
const path = require('path')
const extension = '.' + process.argv[3]

fs.readdir(process.argv[2], (err, data) => {
    if (err) {
        console.log(err);
    } else {
        data.map(el => path.extname(el) === extension && console.log(el))

    }
})