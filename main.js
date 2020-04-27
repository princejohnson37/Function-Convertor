var Java = ["fun()","hello"]; //function list 
var Python = ["function()","hi"]; //coresponing function list
var word = document.getElementById("input-text").value;
var arrInp = document.getElementById("lang-select").value;
var arrOut = document.getElementById("output-dropdown").value;
var arrOutDisplay;
if(arrInp=="Java"){
	arr=Java;
}
else{
	arr = Python;
}
if(arrOut=="Java"){
	arrOutDisplay=Java;
}
else{
	arrOutDisplay = Python;
}
function strcmp()
{
    var i;
    var index=-1;
   	//input from text field
    //value from input drop down options 

    for(i=0;i<java_fun.length;i++)  
    {
        if(word===arr[i])
        {
         //document.alert("it will work");
         index=i;

        } 
        //document.alert("ello");

    }

    if(index!=-1){      //output   
    	document.alet(arrOutDisplay[index]);  
		var para = document.querySelector('#output-html'); //output
		para.innerHTML='<h2>this works</h2>';
	}	


}