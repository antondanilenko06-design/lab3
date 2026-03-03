let flag = true
let str_nums = " " 
while(flag)
{
let num = prompt("Введите число", " ")
let num_num = parseInt(num)
if(num_num%2==0)
{
str_nums+=num_num + " "
}
if(num == null)
{
flag = false
}
}
alert("Числа: "+ str_nums)
