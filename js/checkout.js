
// Exercise 6
document.getElementById("errorName").style.display = "none";
document.getElementById("errorEmail").style.display = "none";  
document.getElementById("errorAddress").style.display = "none";
document.getElementById("errorLastN").style.display = "none";
document.getElementById("errorPassword").style.display = "none";
document.getElementById("errorPhone").style.display = "none";
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
	

	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value.length <= 2 || /[^a-zA-Z]/.test(fName.value) === true ){
		fName.style.border = "2px solid red";
		document.getElementById("errorName").style.display = "block";
		document.getElementById("errorName").style.color = "red";
		error = 1;
	}else{
		fName.style.border = "2px solid green";
		document.getElementById("errorName").style.display = "none";
	}

	if(fEmail.value.length <= 2){
		fEmail.style.border = "2px solid red";
		document.getElementById("errorEmail").style.display = "block";
		document.getElementById("errorEmail").style.color = "red";
		error = 1;
	}else{
		fEmail.style.border = "2px solid green";
		document.getElementById("errorEmail").style.display = "none";
	}

	if(fAddress.value.length <= 2){
		fAddress.style.border = "2px solid red";
		document.getElementById("errorAddress").style.display = "block";
		document.getElementById("errorAddress").style.color = "red";
		error = 1;
	}else{
		fAddress.style.border = "2px solid green";
		document.getElementById("errorAddress").style.display = "none";
	}

	if(fLastN.value.length <= 2 || /[^a-zA-Z]/.test(fLastN.value) === true){
		fLastN.style.border = "2px solid red";
		document.getElementById("errorLastN").style.display = "block";
		document.getElementById("errorLastN").style.color = "red";
		error = 1;
	}else{
		fLastN.style.border = "2px solid green";
		document.getElementById("errorLastN").style.display = "none";
	}

	if(/^(?=.*\d)(?=.*[a-zA-Z]).{4,8}$/.test(fPassword.value) !== true){
		fPassword.style.border = "2px solid red";
		document.getElementById("errorPassword").style.display = "block";
		document.getElementById("errorPassword").style.color = "red";
		error = 1;
	}else{
		fPassword.style.border = "2px solid green";
		document.getElementById("errorPassword").style.display = "none";
	}

	if(fPhone.value.length < 9 || fPhone.value.length > 9 || fPhone.value === Number){
		fPhone.style.border = "2px solid red";
		document.getElementById("errorPhone").style.display = "block";
		document.getElementById("errorPhone").style.color = "red";
		error = 1;
	}else{
		fPhone.style.border = "2px solid green";
		document.getElementById("errorPhone").style.display = "none";
	}

	if(error == 0){
		document.getElementById("myForm").submit();
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
