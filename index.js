const button=document.querySelectorAll('.button')
const body=document.querySelector("body")

button.forEach( function(btn){
    
    btn.addEventListener('click',function(e){
        
        if(e.target.id==='grey')
        document.body.style.backgroundColor="grey";
        else if(e.target.id==='blue')
        document.body.style.backgroundColor="blue"
        else if(e.target.id==='white')
        document.body.style.backgroundColor="white"
        else if(e.target.id==='yellow')
        document.body.style.backgroundColor="yellow"

    })

})
 