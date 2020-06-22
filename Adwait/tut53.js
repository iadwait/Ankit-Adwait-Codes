console.log('Welcome to tutorial 53')


function greet(name,welcome = "Default values if paarameter not passed")
{
	console.log(welcome + " " + name);
	console.log(name + " is a Good Boy");
}

function sum(num1,num2,num3)
{
	let result = num1 + num2 + num3;
	return result;
	console.log("Statements after return do not execute");
}


function compare(num1,num2)
{
	if(num1>num2)
	{
		console.log(num1 + " is greater than " + num2);
	}
	else if(num1 == num2)
	{
		console.log("Both numbers are same");
	}
	else
	{
		console.log(num2 + " is greater than "  + num1)
	}
}



let name = "Adwait";
let name1 = "Ankit";
let name2 = "Ajith";
let name3 = "Pushpa";

let welcome = "Good Morning";
// console.log(name + " is a Good Boy")
// console.log(name1 + " is a Good Boy")
// console.log(name2 + " is a Good Boy")
// console.log(name3 + " is a Good Boy")



greet(name,welcome);
greet(name1,welcome);
greet(name2,welcome);
greet(name3);

let val = sum(1,2,3);
console.log(val);

compare(10,20);
compare(10,10);
compare(20,10);

