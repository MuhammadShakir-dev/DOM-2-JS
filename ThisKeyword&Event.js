// for this lets do a mini project using the same concept as our random color genterator has so without wasting our time lets get start the code
// the mein challenge is do this wihtout writing a single shit of HTML and css.

// Without This keyword.
            const div = document.querySelector("#container");
            for(var i = 0; i<100; i++){
                    const btn =  document.createElement('button');
                     btn.innerText = 'Click Me';
                     container.append(btn);
                     btn.style.padding = '10px';
            };

            function colorize(){
                const r = Math.floor(Math.random() * 255);
                const g = Math.floor(Math.random() * 255);
                const b = Math.floor(Math.random() * 255);
                return `rgb(${r},${g},${b})`;
            }
            
            const btns = document.querySelectorAll('button');

            for(let buttons of btns){
                 buttons.addEventListener('click',function(){
                    buttons.style.backgroundColor = colorize();
                 });
            }

// Using this keyword

            const div = document.querySelector("#container");
            for(var i = 0; i<100; i++){
                    const btn =  document.createElement('button');
                     btn.innerText = 'Click Me';
                     container.append(btn);
                     btn.style.padding = '10px';
            };

            function colorize(){
                const r = Math.floor(Math.random() * 255);
                const g = Math.floor(Math.random() * 255);
                const b = Math.floor(Math.random() * 255);
                return `rgb(${r},${g},${b})`;
            }
            
            const btns = document.querySelectorAll('button');

            for(let buttons of btns){
                 buttons.addEventListener('click',function(){
                    this.style.backgroundColor = colorize();
                    this.style.color = colorize();
                 });
            }

// using this keyword in a seperate function and then call it inside and eventListener.

            const div = document.querySelector("#container");
            for(var i = 0; i<100; i++){
                    const btn =  document.createElement('button');
                     btn.innerText = 'Click Me';
                     container.append(btn);
                     btn.style.padding = '10px';
            };

            function colorize(){
                const r = Math.floor(Math.random() * 255);
                const g = Math.floor(Math.random() * 255);
                const b = Math.floor(Math.random() * 255);
                return `rgb(${r},${g},${b})`;
            }
            
            const btns = document.querySelectorAll('button');

            for(let buttons of btns){
                 buttons.addEventListener('click',newColors)
            }
       
             function newColors(){
                this.style.backgroundColor = colorize();
                this.style.color = colorize();
             }
