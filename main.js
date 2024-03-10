const form=document.querySelector('#form');
const firstname=document.querySelector('#fisrtname');
const form=document.querySelector('#lastname');
const form=document.querySelector('#email');
const form=document.querySelector('#phone number');
const form=document.querySelector('#password');
const form=document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
                     e.preventDefault();
                     validateINOUTS();
})
 function validateInputs(){
    const firstnameval=firstname.value.trim();
    const lastnameval=lastname.value.trim();
    const emailval=email.value.trim();
    const phonenumberval=phonenumber.value.trim();
    const password=password.value.trim();
    const cpassword=cpassword.value.trim();
}

   if(firstnameVal==''){
    setError(firstname,'Firstname is required')
   }
   else{
    setsuccess(firstname)
   }
   
   
   if(lastnameVal==''){
    setError(lasttname,'Lastname is required')
   }
   else{
    setsuccess(lastname)
   }

   
   
   if(emailVal==''){
    setError(email,'Email is required')
   }
   else if(!validateEmail(emailVal))
   setError(email,email address must be in valid formate with @ symbol)
   else{
    setsuccess(email)
   }

   if(passwordVal.lenght<8){
    setError(password,'password must contain special character')
   }
   else{
    setsuccess(password)
   }

   if(cpasswordVal==''){
    setError(cpassword,' confirm password')
   }
   elseif(cpasswordVal!==passwordVal){
    setError(cpassword,'password dose not match')
   }
   else{
    setsuccess(password)
   }









function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.queryselector('.error')

    errorElement.innerText= message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setsuccess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.queryselector('.error')

    errorElement.innerText= '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail= (email)=>{
    return String(email)
     .toUpperCase()
     .match(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
     );
};











