var numOne = Number(prompt("Enter the first number: "));
var numTwo = Number(prompt("Enter the second number: "));
function add(numOne,numTwo)
{
    var addition = numOne + numTwo;
    return addition;  
}
function subtract(numOne,numTwo)
{
    var subtraction = numOne - numTwo;
    return subtraction;
}
function product(numOne,numTwo)
{
    var multiplication = numOne * numTwo;
    return multiplication;
}
function divide(numOne,numTwo)
{
    var division = numOne / numTwo;
    return division;
}
function remainder(numOne,numTwo)
{
    var remaindenum = numOne % numTwo;
    return remaindenum;
}
alert("The sum of two numbers= "+add(numOne,numTwo)+"\nThe difference between two numbers= "+subtract(numOne,numTwo));