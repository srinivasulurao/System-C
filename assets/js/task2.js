var total_buttons=5;
function createDynamicButtons(){
     for(var i=0;i<total_buttons;i++){
         var button_number=i+1;
         var button=document.createElement('button'); 
         button.setAttribute('class','btn'); 
         button.style.marginRight="20px"; 

         button.setAttribute('id',i); 
         button.setAttribute('name',"Button "+button_number);
         button.innerHTML="Click Button "+button_number;
         var dyanamic_area=document.getElementById('dynamic_button_area');
         dyanamic_area.appendChild(button);  
     }

     //Now add the event handlers for the buttons.

     var buttons=document.getElementsByClassName('btn');
    
     for(var j=0;j<buttons.length;j++){
         buttons[j].addEventListener('click',function(event){
            console.log(event);
            var message="Button Name : "+ event.target.name+"<br>"; 
            message+="Button Index : "+event.target.id; 
            document.getElementById('button_response_area').innerHTML=message; 
         }); 
     }
}  //function ends here.

