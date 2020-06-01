function valueChangeHandler(value){
  var donation_field=document.getElementById('donation_value');  
  var error_notifier=document.getElementById('error_notifier');
  if(isNaN(value)){ 
     donation_field.style.border='1px solid red';
     error_notifier.innerHTML="Please enter a valid donation value"; 
  }
  else{
     donation_field.style.border='1px solid #ccc';  
     error_notifier.innerHTML="";  
  }
}
