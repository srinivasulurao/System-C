function valueChangeHandler(value){
  var donation_field=document.getElementById('donation_value');  
  var error_notifier=document.getElementById('error_notifier');
  if((parseInt(value)>0) && Number(value) != NaN){ 
       donation_field.style.border='1px solid #ccc';  
       error_notifier.innerHTML="";  
  }
  else{
       donation_field.style.border='1px solid red';
       error_notifier.innerHTML="Please enter a valid donation value";
  }
}
