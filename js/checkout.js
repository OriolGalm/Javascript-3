
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName").innerHTML;
	var errorEmail = document.getElementById("errorEmail");  
	var errorPassword = document.getElementById("errorPassword").innerHTML;

	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value.length <= 2 || /[^a-zA-Z]/.test(fName.value) === true ){
		fName.style.border = "2px solid red";
	}else{
		fName.style.border = "2px solid green";
	}
	if(fEmail.value.length <= 2){
		fEmail.style.border = "2px solid red";
	}else{
		fEmail.style.border = "2px solid green";
	}
	if(fAddress.value.length <= 2){
		fAddress.style.border = "2px solid red";
	}else{
		fAddress.style.border = "2px solid green";
	}
	if(fLastN.value.length <= 2 || /[^a-zA-Z]/.test(fLastN.value) === true){
		fLastN.style.border = "2px solid red";
	}else{
		fLastN.style.border = "2px solid green";
	}
	if(/^(?=.*\d)(?=.*[a-zA-Z]).{4,20}$/.test(fPassword.value) !== true){
		fPassword.style.border = "2px solid red";
		errorPassword = "Password must to have letters and numbers";
	}else{
		fPassword.style.border = "2px solid green";
	}
	if(fPhone.value.length <= 2 || fPhone.value === Number){
		fPhone.style.border = "2px solid red";
	}else{
		fPhone.style.border = "2px solid green";
	}

	
	
	
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
