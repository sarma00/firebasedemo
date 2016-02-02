function validateform(){
	var errorflag			= true;
	var email				= "";
	var name				= "";
	var message				= "";	
	 email=document.getElementById('txtemail').value;
	 name=document.getElementById('txtname').value;
	 message=document.getElementById('txtmessage').value;	
	 if(email=="" || name=="" || message==""){
		document.getElementById('error').innerHTML="Please enter the details";
		errorflag=false;
	}	 
	else if(email!=""){	
		var atpos = email.indexOf("@");
		var dotpos = email.lastIndexOf(".");
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
			document.getElementById('error').innerHTML="Please enter a valid email";
			errorflag= false;
		}
	}
	var namereg=/^[a-zA-Z][a-zA-Z\\s]+$/;
	 if(name!=""){
		if(!namereg.test(name)){
			document.getElementById('error').innerHTML="Name must have only alphabets";
			errorflag= false;
		}
	}
	if(email !="" && name!="" || message !=""){
		document.getElementById('success').innerHTML="Thank you for your reply.";
	}
	
	return errorflag;
}