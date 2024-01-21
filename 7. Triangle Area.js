function triangleArea(num1, num2, num3) {
    let s = (num1 + num2 + num3) / 2;
    let square = Math.sqrt(s * (s - num1) * (s - num2) * (s - num3));


    console.log(square);
}
triangleArea(2, 3.5, 4);
triangleArea(3, 5.5, 4);

