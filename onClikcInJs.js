// let's have a look that you can handle events in javascript.
// and this is our second approch so let's crack it..

//js

          const btn =   document.querySelector('button');
           btn.onclick = () => {
             alert('Hello My friend its been nice to have you')
           };
           
           
       const imgAll =  document.querySelectorAll("img");
          for(let img of imgAll){
            img.onclick = () =>{
              alert('Download me From Unsplash') 
            } 
          };
          
          
          
          
