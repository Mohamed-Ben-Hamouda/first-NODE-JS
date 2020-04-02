// console.log(process.argv)
let plus = 0
for (let i = 2; i < process.argv.length; i++) {
    plus = plus + parseInt(process.argv[i])
}
console.log(plus)

