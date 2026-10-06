var choice = prompt("Welcome to Area Calculator. \n Please Enter your Choice. \n1.Perimeter of Rectangle. \n2.Perimeter of Triangle. \n3.Perimeter of Circle. \n4.Perimetre of Parallelogram");

if (choice == '1') {
    var l = prompt('Enter the Length')
    var w = prompt('Enter the width')
    var result = Number(l) * 2  Number(w) *2 Number(l) * Number(w)
    alert('The Perimeter is ' + result)
}

if (choice == '2') {
    var a = prompt('Enter the first side of the triangle')
    var b = prompt('Enter the second side of the triangle')
    var c = prompt('Enter the third side of the triangle')
    var result = Number(a) + Number(b) + Number(c)
    alert('The Perimeter is ' + result)
}

if (choice == '3') {
    var r = prompt('Enter the radius')
    var result = 2 * Math.PI * Number(r)
    alert('Perimeter is ' + result)
}

if (choice == '4') {
    var a = prompt(' Length of the first side (base)')
    var b = prompt(' Length of the adjacent side')
    var result = Number(a) * 2 Number(b)* 2
    alert('Perimeter is  ' + result)
}
