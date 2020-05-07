window.onload = function (){
   // let formulaire2 = document.getElementById('formulaire2').style.display = "none";
    let formulaire3 = document.getElementById('formulaire3').style.display = "none";
    let formulaire4 = document.getElementById('formulaire4').style.display = "none";
    let formulaire5 = document.getElementById('formulaire5').style.display = "none";
    let formulaire6 = document.getElementById('formulaire6').style.display = "none";

    document.getElementById("formulaire2").addEventListener("change", function(event){
        let value = event.target.value;
        let message ="";
        let image = "";
            if (value === "rose1"){ 
                message = " ce n'est pas ca !";
                formulaire3 = document.getElementById('formulaire3').style.display = "none";
                formulaire4 = document.getElementById('formulaire4').style.display = "none";
                formulaire5 = document.getElementById('formulaire5').style.display = "none";
                formulaire6 = document.getElementById('formulaire6').style.display = "none";
                document.getElementById('form3').reset();
                document.getElementById('form4').reset();
                document.getElementById('form5').reset();
                document.getElementById('form6').reset();
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
                                                                                message = " soyons amis !";
                                                                                image = "../images/PseudoCode.JPG";
                                                                        }   else if(value4 === "amour"){
                                                                                message = " vive l'amour !";
                                                                                image = "../images/PseudoCode.JPG";
                                                                            }else if(value4 === "sex"){
                                                                                message = " Grrr Grrr !";
                                                                                image = "../images/PseudoCode.JPG";
                                                                            }
                                                                            document.getElementById("message").textContent = message;
                                                                            document.getElementById("img").src = image;
                                                                    });
                                                        }   else if(value3 === "non3"){
                                                            formulaire6 = document.getElementById('formulaire6').style.display = "none";
                                                            document.getElementById('form6').reset();
                                                                message = " pas de probleme je comprend ! ";
                                                            }
                                                            document.getElementById("message").textContent = message;
                                                    }); 
                                        }   else if(value2 === "non2"){
                                            formulaire5 = document.getElementById('formulaire5').style.display = "none";
                                            formulaire6 = document.getElementById('formulaire6').style.display = "none";
                                            document.getElementById('form5').reset();
                                            document.getElementById('form6').reset();
                                                message = " pas de probleme je comprend ! ";
                                            }
                                            document.getElementById("message").textContent = message;
                                    }); 
                        }   else if(value1 === "non1"){
                            formulaire4 = document.getElementById('formulaire4').style.display = "none";
                            formulaire5 = document.getElementById('formulaire5').style.display = "none";
                            formulaire6 = document.getElementById('formulaire6').style.display = "none";
                            document.getElementById('form4').reset();
                            document.getElementById('form5').reset();
                            document.getElementById('form6').reset();
                                message = " pas de probleme je comprend ! ";
                            }
                            document.getElementById("message").textContent = message;
                    });          
        }   else if(value === "rose3"){
                formulaire3 = document.getElementById('formulaire3').style.display = "none";
                formulaire4 = document.getElementById('formulaire4').style.display = "none";
                formulaire5 = document.getElementById('formulaire5').style.display = "none";
                formulaire6 = document.getElementById('formulaire6').style.display = "none";
                document.getElementById('form3').reset();
                document.getElementById('form4').reset();
                document.getElementById('form5').reset();
                document.getElementById('form6').reset();
                message = "ce n'est pas ca !"
        }   else if(value === "rose4"){
                formulaire3 = document.getElementById('formulaire3').style.display = "none";
                formulaire4 = document.getElementById('formulaire4').style.display = "none";
                formulaire5 = document.getElementById('formulaire5').style.display = "none";
                formulaire6 = document.getElementById('formulaire6').style.display = "none";
                document.getElementById('form3').reset();
                document.getElementById('form4').reset();
                document.getElementById('form5').reset();
                document.getElementById('form6').reset();
                message = "ce n'est pas ca !";
        }
        document.getElementById("message").textContent = message;   
});
};