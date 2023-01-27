


      let score = 0 


const rb1 = document.getElementById(`rb`)
    rb1.addEventListener(`click`, function(event){

            const rdmnm = Math.floor(Math.random() * 6) + 1;
            console.log(rdmnm)
        
                document.getElementById(`dice3`).style.display = "block";
                document.getElementById(`rg`).style.display = "none";
                
        
           
            document.getElementById(`dice3`).src = `./df${rdmnm}.png`;
            scorediv.textContent = (rdmnm)
            if (rdmnm === 1){
                scorediv.textContent = "lose" 
            }
            
           
            score += rdmnm
            scorediv.textContent = (score)
            if (score > 20){
                scorediv.textContent = "win" 
                document.getElementById(`rg`).style.display = "block";
            }

             });

            
             const rg  = document.getElementById(`rg`)
             rg.addEventListener(`click`, () => {
             document.getElementById("scorediv").textContent = 0;
             score = 0;
             document.getElementById(`dice3`).style.display = "none";
             console.log(rg)
             })



           
      
        
       
  
