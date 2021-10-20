var principal = document.getElementById("principal").value;
if(principal<=0){ //Checks and sends an alert of the value of principal being less or equal to 0
   $.alert({  //then creates an alert an once it hits ok it focueses on the principal input field
      title: 'Alert!',
      content: 'Enter a positive number',
      onDestroy: function() {
        // here the button key 'hey' will be used as the text.
        $('#Principal').focus();
      }
})};
var rate = document.getElementById("rate").value //brings all the values from the html
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
 var year = new Date().getFullYear()+parseInt(years);
    function compute() //sets the inner html of result
{
    var principal = document.getElementById("principal").value;
if(principal<=0){ //Checks and sends an alert of the value of principal being less or equal to 0
   $.alert({  //then creates an alert an once it hits ok it focueses on the principal input field
      title: 'Alert!',
      content: 'Enter a positive number',
      onDestroy: function() {
        // here the button key 'hey' will be used as the text.
        $('#Principal').focus();
      }
})};
var rate = document.getElementById("rate").value //brings all the values from the html
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
 var year = new Date().getFullYear()+parseInt(years);
    p = document.getElementById("principal").value;
    var res= document.getElementById("result");
    res.innerHTML= "If you deposit <mark>"+ principal+ "</mark><br> at an interest rate of <mark>" + rate + "</mark>.<br> You will receive an amount of <mark>" + interest+ "</mark>,<br> in the year <mark>"+year+"</mark>.";
}
      
function updateRate() //function to keep the rate consistent
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}