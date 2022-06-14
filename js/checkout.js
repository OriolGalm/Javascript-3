
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");


	if(fName.value.length && fAddress.value.length <= 2){
		fName.style.border = "2px solid red";
		fAddress.style.border = "2px solid red";
	}else{
		fName.style.border = "2px solid green";
		fAddress.style.border = "2px solid green";
	}
	if(fEmail.value.length <= 2){
		fEmail.style.border = "2px solid red";
	}else{
		fEmail.style.border = "2px solid green";
	}

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	
	// Validate fields entered by the user: name, phone, password, and email
	/* if(fName.value == ""){
		error++;
	}

	if(fEmail.value == ""){
		error++;
	}
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	} */

}
