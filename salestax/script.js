var quantity = Number(prompt("Enter the amount of item(Quantity): "));
var unitPrice = Number(prompt("Enter unit price of the item:"));
//const taxRate = 0.095;
var taxRate= 0.095;
var totalPriceBeforeTax = quantity *unitPrice;
var taxAmount = (quantity *unitPrice)* taxRate;
var totalPriceAfterTax = totalPriceBeforeTax + taxAmount;
alert("Your orderd quantity="+quantity+"\nThe unit price= $"+unitPrice+"\nPrice of the item before tax=$"+totalPriceBeforeTax+"\nTax amount =$"+taxAmount+"\nPrice of the item after tax= $"+totalPriceAfterTax);