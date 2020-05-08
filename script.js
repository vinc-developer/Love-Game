window.onload = function (){
    let formulaire2 = document.getElementById('formulaire2').style.display = "none";
    let formulaire3 = document.getElementById('formulaire3').style.display = "none";
    let formulaire4 = document.getElementById('formulaire4').style.display = "none";
    let formulaire5 = document.getElementById('formulaire5').style.display = "none";
    let formulaire6 = document.getElementById('formulaire6').style.display = "none";
    let message ="";
    let image = "";

    document.getElementById("formulaire1").addEventListener("change", function(event){
        let jour = form1.elements.jour.value;
        let mois = form1.elements.mois.value;
        let année = form1.elements.année.value;
            if ((jour == 7 ) && (mois == 6) && (année == 2015)) { 
                    message = "Qu'elle merveilleuse soirée";
                    formulaire2 = document.getElementById('formulaire2').style.display = "block";
                    document.getElementById("formulaire2").addEventListener("change", function(event){  
                        let value = event.target.value;    
                        if (value === "rose1"){ 
                            formulaire3 = document.getElementById('formulaire3').style.display = "none";
                            formulaire4 = document.getElementById('formulaire4').style.display = "none";
                            formulaire5 = document.getElementById('formulaire5').style.display = "none";
                            formulaire6 = document.getElementById('formulaire6').style.display = "none";
                            document.getElementById('form3').reset();
                            document.getElementById('form4').reset();
                            document.getElementById('form5').reset();
                            document.getElementById('form6').reset();
                            message = " Ce n'était pas cette rose la !";
                        }else if(value === "rose2"){
                            formulaire3 = document.getElementById('formulaire3').style.display = "block";
                            message = " C'était bien celle la ! ";
                            document.getElementById("formulaire3").addEventListener("change", function(event){
                                    let value1 = event.target.value;
                                        if (value1 === "oui1"){ 
                                            message = " Ca me fait drolement plaisir alors !";
                                            formulaire4 = document.getElementById('formulaire4').style.display = "block";
                                                document.getElementById("formulaire4").addEventListener("change", function(event){
                                                    let value2 = event.target.value;
                                                        if (value2 === "oui2"){ 
                                                            message = " Aucun probleme tu en aura autant que tu le souhaite !";
                                                            formulaire5 = document.getElementById('formulaire5').style.display = "block";
                                                                document.getElementById("formulaire5").addEventListener("change", function(event){
                                                                    let value3 = event.target.value;
                                                                        if (value3 === "oui3"){ 
                                                                            message = " D'accord, je vais faire des éffort pour passer plus de temps avec toi ! ";
                                                                            formulaire6 = document.getElementById('formulaire6').style.display = "block";    
                                                                            document.getElementById("formulaire6").addEventListener("change", function(event){
                                                                                    let value4 = event.target.value;
                                                                                        if (value4 === "amical"){ 
                                                                                            message = " Ca me fend le coeur...";
                                                                                            image = "../jeux-js/images/coeur2.png";
                                                                                    }   else if(value4 === "amour"){
                                                                                            message = " Aimons nous jusqu'à la fin de nos jours !";
                                                                                            image = "../jeux-js/images/infinity.png";
                                                                                        }else if(value4 === "sex"){
                                                                                            message = " Grrr Grrr !";
                                                                                            image = "../jeux-js/images/grr.png";
                                                                                        }                                                                           
                                                                                        document.getElementById("message").textContent = message;
                                                                                        document.getElementById("img").src = image;
                                                                                });
                                                                    }   else if(value3 === "non3"){
                                                                        formulaire6 = document.getElementById('formulaire6').style.display = "none";
                                                                        document.getElementById('form6').reset();                                                           
                                                                            message = " Mais moi je veux......!!!! ";
                                                                        }
                                                                        document.getElementById("message").textContent = message;
                                                                }); 
                                                    }   else if(value2 === "non2"){
                                                        formulaire5 = document.getElementById('formulaire5').style.display = "none";
                                                        formulaire6 = document.getElementById('formulaire6').style.display = "none";
                                                        document.getElementById('form5').reset();
                                                        document.getElementById('form6').reset();
                                                            message = " Daccord, c'est toi qui choisis ! ";
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
                                            message = " Je suis decus...! ";
                                        }
                                        document.getElementById("message").textContent = message;
                                });          
                        }else if(value === "rose3"){
                            formulaire3 = document.getElementById('formulaire3').style.display = "none";
                            formulaire4 = document.getElementById('formulaire4').style.display = "none";
                            formulaire5 = document.getElementById('formulaire5').style.display = "none";
                            formulaire6 = document.getElementById('formulaire6').style.display = "none";
                            document.getElementById('form3').reset();
                            document.getElementById('form4').reset();
                            document.getElementById('form5').reset();
                            document.getElementById('form6').reset();  
                            message = "Ce n'était pas cette rose la !"
                        }else if(value === "rose4"){
                            formulaire3 = document.getElementById('formulaire3').style.display = "none";
                            formulaire4 = document.getElementById('formulaire4').style.display = "none";
                            formulaire5 = document.getElementById('formulaire5').style.display = "none";
                            formulaire6 = document.getElementById('formulaire6').style.display = "none";
                            document.getElementById('form3').reset();
                            document.getElementById('form4').reset();
                            document.getElementById('form5').reset();
                            document.getElementById('form6').reset();
                            message = "Ce n'était pas un bouquet de rose !";
                        }
                document.getElementById("message").textContent = message;   
                });
            }else if ((jour == 23 ) && (mois == 6) && (année == 2018)) {
            }else{
                formulaire2 = document.getElementById('formulaire2').style.display = "none";
                formulaire3 = document.getElementById('formulaire3').style.display = "none";
                formulaire4 = document.getElementById('formulaire4').style.display = "none";
                formulaire5 = document.getElementById('formulaire5').style.display = "none";
                formulaire6 = document.getElementById('formulaire6').style.display = "none";
                document.getElementById('form2').reset();
                document.getElementById('form3').reset();
                document.getElementById('form4').reset();
                document.getElementById('form5').reset();
                document.getElementById('form6').reset();
                message = " Ce n'était pas ce jour la!";
                }
                document.getElementById("message").textContent = message;         
    });
};