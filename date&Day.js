const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            
var myDate=new Date();  
var date=myDate.getDate();  
var month=myDate.getMonth()+1;  
var year=myDate.getFullYear();  
var day=myDate.getDay();
var day = days[myDate.getDay()];

document.getElementById("date").innerHTML = date+"/"+month+"/"+year+"("+day+")"
/*

 * MAKE BY Er. Vineet K. gupta(B.tech)
 * Email - vineetkrishnagupta@gamil.com.
 * Phone - +91 63945-12899, +91 98397-60815.

 */