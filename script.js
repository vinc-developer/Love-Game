window.onload = function (){
   // let formulaire2 = document.getElementById('formulaire2').style.display = "none";
    let formulaire3 = document.getElementById('formulaire3').style.display = "none";
    let formulaire4 = document.getElementById('formulaire4').style.display = "none";
    let formulaire5 = document.getElementById('formulaire5').style.display = "none";
    let formulaire6 = document.getElementById('formulaire6').style.display = "none";
    

    document.getElementById("formulaire2").addEventListener("change", function(event){
        let value = event.target.value;
        let message ="";
            if (value === "rose1"){ 
                message = " ce n'est pas ca !";
                formulaire3 = document.getElementById('formulaire3').style.display = "none";
         }  else if(value === "rose2"){
                formulaire3 = document.getElementById('formulaire3').style.display = "block";
                message = " c'est la bonne réponse! ";
                document.getElementById("formulaire3").addEventListener("change", function(event){
                    if (value === "oui1"){ 
                        message = " c'est genial' !";
                        formulaire4 = document.getElementById('formulaire4').style.display = "block";
                }   else if(value === "non1"){
                        formulaire4 = document.getElementById('formulaire4').style.display = "none";
                        message = " pas de probleme je comprend ! ";
                    }
                });          
        }   else if(value === "rose3"){
                formulaire3 = document.getElementById('formulaire3').style.display = "none";
                message = "ce n'est pas ca !"
        }   else if(value === "rose4"){
                formulaire3 = document.getElementById('formulaire3').style.display = "none";
                message = "ce n'est pas ca !";
        }
        document.getElementById("message").textContent = message;
});
/*document.getElementById("formulair3").addEventListener("change", function(event){
            let value = event.target.value;
            let message ="";
            if (value === "oui1"){ 
                message = " c'est genial' !"
               formulaire4 = document.getElementById('formulaire4').style.display = "block";
            }else if(value === "non1"){
                formulaire4 = document.getElementById('formulaire4').style.display = "none";
                message = " pas de probleme je comprend ! "
            }
            document.getElementById("message").textContent = message;
        });*/

};