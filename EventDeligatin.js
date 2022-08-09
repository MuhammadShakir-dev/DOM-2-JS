// lets have a look on our last part of javascript DOM called event Delegation.
// its a stratergy for writing our code.

                    li.addEventListener('click',function(e){
                     e.target.nodeName === 'LI' && e.target.remove();  
                  })
