function strcmp()
{
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

    var i;
    var index=-1;
   	//input from text field
    //value from input drop down options 

    for(i=0;i<2;i++)  
    {
        if(word===arr[i])
        {
			index=i;
        } 
    }

    if(index!=-1){      //output   
		var para = document.getElementById('output-html'); //output
		para.innerHTML ='<h2>'+arrOutDisplay[index]+'</h2>';
	}	


}