// addEventListner is the third way of handlying events in javacript.

// addEventListner
// Specify the event type and a callBack to run.

// Note down one thing is that we dont have more then one event on the 2 way onlcick. 
// addEventLsitner will resolve this problem now you can add many events as you want.


         const imgAll = document.querySelector('img');
          imgAll.addEventListener('click',function() {
            alert('Download me from Unsplash');
          });


          const btn = document.querySelector('button');
          btn.addEventListener('dblclick',function(){
            alert('Hey How are you ..??')
          });



          const btn = document.querySelector('button');

          function single(){
            alert('Welcome to our website');
          };

          function double(){
            alert('Hey How are you ..??')
          };
                    
          btn.addEventListener('click', single);
          btn.addEventListener('click', double);




