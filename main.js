var Java = ["fun()","hello"]; //function list 
var Python = ["function()","hi"]; //coresponing function list
function strcmp()
{
    var i;
    var index=-1;
    var word ; //input from text field
    var arr ;  //value from input drop down options 

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
    	document.alet(Python[index]);  
		var para = document.querySelector('#output-html'); //output
		para.innerHTML='<h2>this works</h2>';
}	


