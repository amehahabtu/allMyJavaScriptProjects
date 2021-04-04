
// Topic: Functions
// Naming Function
// Anonymous Fuction
// Parameters - Too many ? Ignored.- Too few ? Undefined.
// Return and returning  a value - No return value=undefined.

function add (x,y)
{
    var z = x+y ;
    return z;
}
var sum=add(5,7);
alert(sum);
var add=function(x,y) // functions declared as variable
{
    var z = x+y ;
    return z ; // if it is null return , it is undefined result.
}
var sum=add(5,7,6,8); //if one of parameter is missed it says NaN (Undefined).
var sum2 = add(8,9);
//if we give additional parameters, the additionals are ignored.
alert(sum);
//output.innerHTML = sum + " "+ sum2;

//Hoisting 
var z = add(3,5)  // it is hoisted on the top of function content
function add (x,y)
{
    var z = x+y ;
    return z;
}
//output.innerHTML = z

//Functions Scope 

var constant = 32 ; // global scope variable 
function celsiusToFarenheit(temperature)
{
    var multiplier =9 ;
    var divisor =5;
    var farenheitTemp = temperature * multiplier/divisor + constant ;
    return farenheitTemp;
}
//var z= multiplier; // it is not accessible since it is inside function.
//output.innerHTML =celsiusToFarenheit(100)

var x = 5;
if (x < 20)
{
    var y=x;  // y has same as global scope. 
}
var z = y;
//output.innerHTML = z;

//Nested function demo

function hypothenuse()
{
    var sideOne=3;
    var sideTwo=4;
    function squareSideone()
    {
        return sideOne * sideOne;
    }
    function squareSideTwo()
    {
        return sideTwo * sideTwo ;
    }
    return Math.sqrt(squareSideone()+squareSideTwo());
}

var area =hypothenuse();
//output.innerHTML = area;

function hypothenuse(a,b)
{
    function square(x)
    {
        return x*x;
    }
    return Math.sqrt(square(a)+square(b));
}
//output.innerHTML = hypothenuse(3,4);

//closure 

var scope ="global";
function testScope()
{
    var scope="Local";
    function innerFunc()
    {
        return scope;
    }
    return innerFunc();
}
var answer= testScope();
//output.innerHTML = answer;

//or 
var scope ="global";
function testScope()
{
    var scope="Local";
    function innerFunc()
    {
        return scope;
    }
    return innerFunc; // () is removed.
}
//var innerFunc=testScope();// var answer= innerFunc();
var answer= testScope()();
//output.innerHTML = answer;

//another example 
var x=50;
function someFunction()
{
    var y = 100;
    return x + y ;
}
//output.innerHTML=someFunction()

//recursion function -function that call itself
function funcOne(num,exp)
{
    if (exp ===0)
    {
        return 1;
    }
    return num * funcTwo(num,exp-1);
}
function funcTwo(num,exp)
{
    if (exp ===0)
    {
        return 1;
    }
    return num * funcThree(num,exp-1);
}
function funcThree(num,exp)
{
    if (exp ===0)
    {
        return 1;
    }
    return num*funcFour(num,exp-1);
}
function funcFour(num,exp)
{
    if (exp ===0)
    {
        return 1;
    }
    alert("exponent too big !");
}
var answer=funcOne(2,10);
//outputone.innerHTML = answer;

//same thing using recusion function 
function funcOne(num,exp)
{
    if (exp ===0)
    {
        return 1;
    }
    return num * funcOne(num,exp-1);
}
var answerOne=funcOne(2,10);
outputtwo.innerHTML = answerOne;

//same thing using nonrecursive function

function nonrecursiveFunc(num, exp)
{
    var retVal=1;
    for ( var i=0; i<exp; i++)
    {
        retVal *= num ;
    }
    return retVal;
}
var answerTwo= nonrecursiveFunc(2,10);
//outputthree.innerHTML = answerTwo ;