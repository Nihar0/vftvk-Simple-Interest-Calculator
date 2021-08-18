//Function to compute the simple interest
function compute()
{
    var principal = document.getElementById("amount").value;
	
	//Check if principal is positive 
	if (principal <= 0){
		alert("Enter a positive number");
		amount.focus();
		return false;
	}
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
	var interest = principal * rate * years / 100;
	
	//To convert the 'No of Years' into the actual year in the future.
	var year = new Date().getFullYear()+parseInt(years);
	
	//Reference to the element named 'result'
	document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
}

//Function to update rate next to the slider
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}       
