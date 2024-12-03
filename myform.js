 
       
           function formValidate()
           {
            let fname=document.getElementById("fname").value;
            let password=document.getElementById("password").value;
            let email=document.getElementById("email").value;
            let contact=document.getElementById("contact").value;
            let gender=document.getElementById("gender").value;
            let regex=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
            let regex1=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            let regex2=/^[0-9]{10}$/;
            let genderRegex = /^(Male|Female|transgender)$/i;
            if(fname.trim()===""){
            window.alert("you cannot leave firstname blank");
            document.getElementById("fname").focus();
            return false;
            }
            if(!password.trim().match(regex)){
                window.alert("password must contain atleast min-8 characters");
                document.getElementById("password").focus();
                return false;
            }
            
            if(!email.trim().match(regex1)){
                window.alert("email allows only uppercase,lowercase,0-9,_+-% and must @");
                document.getElementById("email").focus();
                return false;

            }
            if(!contact.trim().match(regex2)){
                window.alert("contact no. must contain 10 digits");
                document.getElementById("contact").focus();
                return false;

            }
            if(!gender.trim().match(genderRegex)){
                window.alert("gender is invalid");
                document.getElementById("gender").focus();
                return false;
            }
            
                return true;
        }
  
