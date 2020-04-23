//setup day
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];

//declare variable
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand;

//setup hour 
if (hour >= 12)
{
   prepand = " PM ";
   hour = hour - 12;
}
else
{  
   prepand = " AM ";
}

if (hour === 0 && prepand === " AM ")
{
	hour = 12;
}

if (hour === 0 && prepand === " PM ") 
{
	hour = 12;
}

if (minute < 10)
{
	minute = '0' + minute;
}

if (second < 10)
{
	second = '0' + second;
}

document.getElementById("dayandtime").innerHTML = "Today is: " + daylist[day] + "." + "<br>" + "Current time is: " + hour + prepand + ": " + minute + " : " + second;