document.querySelector('.img__btn').addEventListener('click', function() {
    document.querySelector('.cont').classList.toggle('s--signup');
  });

  function printError(elemId, hintMsg) {
    
    document.getElementById(elemId).innerHTML = hintMsg;
    document.getElementById(elemId).style.fontSize="x-small";
    document.getElementById(elemId).style.fontFamily="Times New Roman";
    document.getElementById(elemId).style.color="red";
}
var nameErr = emailErr = phoneErr =pinErr=dobErr=passErr=  true;

  function validatePhoneNumber(){
    
    var phone= document.getElementById("phone");
    var name = document.getElementById("name");
    var mail = document.getElementById("email");
    var pincode = document.getElementById("pin");
    var dob = document.getElementById("dob");
    var pass = document.getElementById("pass");
    
    if(phone.value==""){
      printError("phoneErr", "Please enter your phone number.");

    }
   
    else{
      var regex = /^\d{10}$/;

      if(regex.test(phone.value) === false) {
         
          printError("phoneErr", "Please enter a valid phone number");
          
    }
  else
      {
  printError("phoneErr", "");

  phoneErr = false;
    }

    }



    if(name.value==""){
      printError("nameErr", "Please enter your name.");

    }
   
    else{


       var regex = /^[A-Z]([a-z]*)(\s)[A-Z]([a-z]*)$/; 

      if(regex.test(name.value) === false) {
          printError("nameErr", "Please enter a valid name");
          
    }

  else{

  printError("nameErr", "");

  nameErr = false;
      }
    }


    if(mail.value == "") {
        
      printError("emailErr", "Please enter your email address");
      
      
  } 
  else {
 
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
      
     if(regex.test(mail.value) === false) {
         
          printError("emailErr", "Please enter a valid email address(Can have alphabets, numbers, underscores and dots\n Should start with a letter and end with a letter or a number.Cannot start or end with underscores and dots.");
        
      } 


      else {
          
          
           printError("emailErr", "");
           
          emailErr = false;
      }
     
  }


    
if(pass.value==""){
  printError("passErr", "Please enter your password.");

}

else {
  var regex= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  console.log(regex.test(pass.value));

      if(regex.test(pass.value) == false){
        printError("passErr", "Password should have minimum eight characters, at least one letter and one number ,no special characters.");
      }
        
      else{

  printError("passErr", "");
  
 passErr = false;
      }

}


  if(pincode.value==""){
    printError("pinErr", "Please enter your pin number.");

  }

  else {
          
          
    printError("pinErr", "");
    
   pinErr = false;
}

if(dob.value==""){
  printError("dobErr", "Please enter your date of birth number.");

}

else {
        
        
  printError("dobErr", "");
  
 dobErr = false;
}



console.log(nameErr, emailErr ,phoneErr ,pinErr,dobErr,passErr);
if(!nameErr && !emailErr && !phoneErr && !pinErr && !dobErr && !passErr){
       window.location.href='login.html';
}


  }

 