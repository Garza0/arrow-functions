function sum(a, b) {
    return a + b
}

var a = 8, b = 5

sum(a, b)

function sumcl(a, b) {
    console.log(a + b)
}

sumcl(a, b)


function sumno() {
    return a + b
}

sumno()

function sumarg() {
    return arguments[0] + arguments[1]
}

sumarg()

function average() {
    var sum = 0
    for (i = 0; i < arguments.length; i++) 
        sum += arguments[i]
    console.log(sum / arguments.length)
}

average(1, 2, 4, 5)

function process(){
    return prodd(x, y) - z
}


------------------------------

typeof a
"number"
typeof typeof a
"string"
typeof min
"function"
typeof Math
"object"
typeof [1, 1]
"object"

move = point.move
ƒ (dim, num) {
	this[dim] += num 
}
jump = point.jump
ƒ (num) {
	point.y += num
	setTimeout(() => point.y -= num, 2000)
}
