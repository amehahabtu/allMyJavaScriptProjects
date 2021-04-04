var dog  ={
    name:"Charlie",
    breed:"Mix",
    weight:12,
    color:"Brown"
};
var dogweight=dog.weight;
//alert(dogweight);
dog.disposition="wonderful";
var disp = dog.disposition;
//alert(disp);
var height =dog.height;
//alert(height);
dog.weight =15;
var dogweight =dog.weight;
//alert(dogweight);

//arrays =>special kind of an object.it acts as collections. 
var empty =[];
empty[0]=1;
empty[1]=2;
//alert(empty);
var primes =[1,2,3,5,7,11];
var thirdPrime = primes[2];
//alert(thirdPrime);

var myArray =[1,"hello",false];
var truth =myArray[2];
//alert(truth);
var myarrylenth = myArray.length;
//alert(myarrylenth);

function range(max)
{
    var  retVal =[]
    for (var i=0; i<max; i++)
    {
        retVal[i] = i*2;
    }
    return retVal;
  }

//lert(range(5));

// samething using push method 

function range(max)
{
    var  retVal =[]
    for (var i=0; i<max; i++)
    {
        retVal.push(i*2); //retVal[i]= i*2
    }
    return retVal;
}
//alert(range(5));

// pop method 
function range(max)
{
    var  retVal =[]
    for (var i=0; i<max; i++)
    {
        retVal.push(i*2); //retVal[i]= i*2
    }
    var last= retVal.pop();
    //alert(last);
    return retVal;
}
//alert(range(5));
///////////
function range(max)
{
    var  retVal =[]
    for (var i=0; i<max; i++)
    {
        retVal.push(i*2); 
    }
    return retVal;
}
var myArray = range(5);
for (var i =0; i < myArray.length; i++)
{
    //alert(myArray[i]);
}
//////STRINGS
var string1="The quick brown fox jumps \n over the lazy dog.";
var string2="The quick brown fox jumps over the 'lazy' dog.";
var string3="The quick brown fox \"jumps\" over the lazy dog.";
// alert(string1);
// alert(string2);
// alert(string3);
// \n escape charcter 

//String methods avaiable 
        // charAt(index)
        //idexOf(string)
        //split cuts a string into array
        // slice copies a piece of the string 

var string1="The quick brown fox jumps over the \"lazy\" dog";
var string2=" and lived happily ever after.";
var newString = string1 + string2;
//alert(newString)

var myArray = newString.split(" ");
//alert(myArray);
var indexofbrown = myArray.indexOf("brown");
//alert(indexofbrown);
var indexofjumps = myArray.indexOf("jumps");
//alert(indexofjumps);
var myFox = myArray.slice(indexofbrown,indexofjumps);//from brown to fox it doesn't include jumps
//alert(myFox);

//Regular expression 
var MyString="The quick brown fox jumps over the lazy dog.";
//MyString.search(/quick/); /// regular expression is expressed interms of / /
// var offset = MyString.search(/[a-z]*/);  //* number of a-z b-refers to boundary
// alert(offset);

//var offset = MyString.search(/\b[a-z]{5}\b/);  //* number of a-z b-refers to boundary
//alert(offset);

// var myString = "My Zip is 01720-1234 What is yours ?";
// var offset=myString.search(/\b[0-9]{5}\b/); //* number of a-z b-refers to boundary
// alert(offset);

var myString = "My Zip is 01720-1234 What is yours ?";
var offset = myString.search(/\b[0-9]{5}(?:-[0-9]{4})?\b/); 
alert(offset);

/// Tool https://www.regexbuddy.com/javascript.html
