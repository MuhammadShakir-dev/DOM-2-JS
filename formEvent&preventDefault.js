//forms events occurs when a user submit a form.
// when you submit a form and hit the submit button then it take you the that you have set in the action of html 
//form element but to prevent this we have function called 
// "e.peventDefault()."


//HTML
/*
          <h1>Muhammad Shakir Dev</h1>
          <h2>Hello Folks Subscribe to My NewsLetter</h2>
          <p>To get latest update about my newsletters</p>
          <form action="">
            <input type="text" placeholder="Enter your Email" required>
            <button>Subscribe</button>
          </form>

*/

//CSS
/*
          body{
                font-family:Georgia, 'Times New Roman', Times, serif;
                
               }

               h1{
                text-align: center;
                margin-top: 150px;
               }

               h2{
                text-align: center;
                font-weight: lighter;
               }

               p{
                text-align: center;
               }

               form{
                 margin-left: 38%;
             } 
               input{
                height: 50px;
                width: 250px;
                text-align: center;
                
               }

               button{
                padding: 10px;
                width:130px;
                background-color: black;
                color: white;
                
               }


*/

//JS
                const form = document.querySelector('form');
                form.addEventListener('submit',function(e){
                    e.preventDefault();
                    alert('Thanks for Subscribing My news Letter');
                })
