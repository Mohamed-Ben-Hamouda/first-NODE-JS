const fs = require('fs')
fs.readFile((process.argv[2]), 'utf8', (err, data) => {
    if (err) { console.log('errrrrrrrrrrrere') }

    else {
        let h = data.split('\n')
        console.log(h.length - 1)
    }
});

// console.log(a.length - 1.toString().split('\n'))