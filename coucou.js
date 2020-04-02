const fs = require('fs')
const path = require('path')
let r = fs.readdirSync('./')
console.log(r)
console.log(r.length)
for (let i = 0; i < r.length; i++) {
    let g = path.extname(r[i])
    console.log(g)
}
console.log(process.argv)


