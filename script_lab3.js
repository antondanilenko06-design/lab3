let r = Math.random();
let num1 = parseInt(r*20);
r = Math.random();
let num2 = parseInt(r*20);
let right_result = num1+num2;
let result = prompt(num1 + " + "+ num2 + " = "," ");
let num_result = parseInt(result);
if(right_result == num_result)
{
	alert("Cool!!!");
}
else
{
	alert("Durak");
}