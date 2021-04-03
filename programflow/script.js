// var ageAsString=prompt("What is your age?");
// var age= Number(ageAsString);
// if ( age<40) 
// {
//     alert("Oh You're so young....");
//     // alert("and 40 is drag....");
// }
// else if (age ==40)
// {
//     alert("You are 40.")
// }
// else 
// {
//     alert("Don't worry, you're young at heart!");
// }
// alert("Thank you!");

//Using while loop
// var age = Number(prompt("What is your age? ",""));
// var string ="";
// while (age>0)
// {
//     string += "Happy Birthday! \n";
//     age -= 1;
// }
// alert(string);

//Using do while loop
// var age = Number(prompt("What is your age? ",""));
// var string ="";
// do 
// {
//     string += "Happy Birthday! \n";
//     age -= 1;
// }while (age>0)
// alert(string);


//Using for loop
// var age = Number(prompt("What is your age? ",""));
// var string ="";
// for (var theAge =age ; theAge > 0; theAge -=1)
// {
//     string += "Happy Birthday! \n";  
// }
// alert(string);

// //Using for loop and if statement 
// var age = Number(prompt("What is your age?"));
// var string = "";
// for (var counter =1 ; counter < age; counter += 1 )
// {
//     string += "Happy Birthday! \n";  
//     if (counter % 7 == 0)
//         break;
// }
// alert(string);

//Switch case statement
// var animal ="dog";
// switch (animal) 
// {
//     case "cat":
//         alert("meow");
//     case "dog":
//         alert("woof");
//     case "horse":
//         alert("whinny");
//     default:
//         alert("Unkown animal!");
//         break;    
// }

//Boolean values and operators
// var isMale=true;
// var isOld = true;
// var isOldMan = isMale && isOld;
// alert (isOldMan);

// var isFemale=false;
// var isOld = true;
// var isOldManorFemale = isFemale && isOld;
// alert (isOldManorFemale);

// var isFemale=false;
// var isOld = true;
// var isOldManorFemale = isFemale || isOld;
// alert (isOldManorFemale);

// var isFemale=false;
// var isOld = true;
// var isMale =! isFemale ; //unary operator
// var isOldManorFemale = isFemale || isOld;
// alert (isOldManorFemale);
// alert(isMale)

// alert (0==false) // result is true

// alert (0===false) //result is false

// alert (1===false) //result is false
// alert (1==false) //result is false
// alert(1==true) // result is true
// alert(1===true)  //result is false

// var x=5;
// x++ ; // unary operator
// alert(x);

// var x=5 ;
// var y=6 ;
// var z= x+y; // binary  operator
// alert(z)

var x = 5 ;
var y = x < 10 ? x : 10 ;// ternary operator
alert(y);// conditional or ternary operator
// first turn is condition x<10 , the second turn is return x if condition is true , the third turn is 10 if condition is false.exaclty same as if else statement
// same thing using if else statement 
// if (x < 10) 
// {
//     y = x;
// }
// else 
// {
//     y = 10;
// }