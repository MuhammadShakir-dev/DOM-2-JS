// Lets have a look on how to buble an event in javascript 
// lets get started.

// HTML
/*

<body>

<section onclick = 'alert('Section Clicked')'>
<p onclick = 'alert('paragraph clicked')'>
<button onclick="alert('button CLicked')">Click me</button>
</p>
</section>

</body>

*/

// When you click on the button it will first alert you that the button is clicked and after then paragraph is clicked and after that section clicked means
// it will not run the oder or step by step one any event is called it triggers all the remeaning events. and this is called event bubbling.


const button = document.querySelector('button');
button.addEventListener('click',function(e){
       e.stoppropogration();      
});


// to stop bubbling you should use event object called = "stoppropogation()"

