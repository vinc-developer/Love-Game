window.onload = function (){
   // let formulaire2 = document.getElementById('formulaire2').style.display = "none";
    let formulaire3 = document.getElementById('formulaire3').style.display = "none";
    let formulaire4 = document.getElementById('formulaire4').style.display = "none";
    let formulaire5 = document.getElementById('formulaire5').style.display = "none";
    let formulaire6 = document.getElementById('formulaire6').style.display = "none";
    let image = "";
    

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
                        let value1 = event.target.value;
                            if (value1 === "oui1"){ 
                                message = " c'est genial !";
                                formulaire4 = document.getElementById('formulaire4').style.display = "block";
                                    document.getElementById("formulaire4").addEventListener("change", function(event){
                                        let value2 = event.target.value;
                                            if (value2 === "oui2"){ 
                                                message = " c'est genial !";
                                                formulaire5 = document.getElementById('formulaire5').style.display = "block";
                                                    document.getElementById("formulaire5").addEventListener("change", function(event){
                                                        let value3 = event.target.value;
                                                            if (value3 === "oui3"){ 
                                                                message = " c'est genial !";
                                                                formulaire6 = document.getElementById('formulaire6').style.display = "block";
                                                                    document.getElementById("formulaire6").addEventListener("change", function(event){
                                                                        let value4 = event.target.value;
                                                                            if (value4 === "amical"){ 
                                                                                message = " c'est genial !";
                                                                                image = "../images/PseudoCode.JPG";
                                                                        }   else if(value4 === "amour"){
                                                                                message = " c'est genial !";
                                                                                image = "../images/PseudoCode.JPG";
                                                                            }else if(value4 === "sex"){
                                                                                message = " c'est genial !";
                                                                                image = "../images/PseudoCode.JPG";
                                                                            }
                                                                    })
                                                        }   else if(value3 === "non3"){
                                                                formulaire6 = document.getElementById('formulaire6').style.display = "none";
                                                                message = " pas de probleme je comprend ! ";
                                                            }
                                                    }) 
                                        }   else if(value2 === "non2"){
                                                formulaire5 = document.getElementById('formulaire5').style.display = "none";
                                                message = " pas de probleme je comprend ! ";
                                            }
                                    }) 
                        }   else if(value1 === "non1"){
                                formulaire4 = document.getElementById('formulaire4').style.display = "none";
                                message = " pas de probleme je comprend ! ";
                            }
                    })          
        }   else if(value === "rose3"){
                formulaire3 = document.getElementById('formulaire3').style.display = "none";
                message = "ce n'est pas ca !"
        }   else if(value === "rose4"){
                formulaire3 = document.getElementById('formulaire3').style.display = "none";
                message = "ce n'est pas ca !";
        }
        document.getElementById("message").textContent = message;
        document.getElementById("img").src = image;
});
};