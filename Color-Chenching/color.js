const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener("click", function(e){
        console.log(e);
        console.log(e.target);

        if(e.target.id === "green"){
            body.style.backgroundColor = "green";      // ya fir yha par mai e.target.id bhi likh sakte hai.
        }

         if(e.target.id === "white"){
            body.style.backgroundColor = "white";   
        }
         if(e.target.id === "yellow"){
            body.style.backgroundColor = "yellow";      
        }

         if(e.target.id === "blue"){
            body.style.backgroundColor = "blue";      
        }
        
        

    });
})
