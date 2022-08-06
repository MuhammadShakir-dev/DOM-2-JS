
// i have create a mini key name and code identifier project for this topic.

//HTML
/*
       <h1>Enter a Key</h1>
       <p>Enter any key and get you key name and key code</p>
       <input type="text">

       <ol>
        <li>Enter only one key at a time.</li>
        <li>First your key name will show afte it your key code is shown.</li>
        <li>Press Esc to cancel</li>
       </ol>

*/

//css
/*

             body{
                padding: 0%;
                margin: 0%;

              }

              h1{
                margin-top: 200px;
                text-align: center;
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

              }

              p{
                text-align: center;
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

              }

              input{
                width: 250px;
                height: 50px;
                margin-left: 42%;
              }
             
              ol{
                margin-left: 30%;
                margin-top: 100px;
              }


*/

//js

               const input = document.querySelector('input');
               input.addEventListener('keydown',function(e){
                alert('Your Key Name is : ' + e.key);
                alert('Your Key Code is  : ' + e.keyCode)
               });
