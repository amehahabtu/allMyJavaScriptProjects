var FirstName=prompt("Enter your first name:");
alert("Welcome "+FirstName+"! This is a guessing Number Game. You have 3 trials in a single session.")
for ( var i=1 ; i<=3; i++)
{
    var userNum = Number(prompt("Enter your guess number between 0 and 10: "));
    //const generatedNum = Math.floor(Math.random() * 11);
    //from random import randint //if userNum==radom.randint(0,10)

    if (userNum == Math.floor(Math.random() * 11))
    {
        alert("Congratulation "+FirstName+"!!! You got it.");
        break;
    }
    else 
    {
        alert("Sorry! You didn't get it. Keep trying...");
    }
}
alert("Thank you "+FirstName+" for playing the game!!!");