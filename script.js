window.onload = function (){
    let formulaire4 = document.getElementById('formulaire4').style.display = "none";
    let formulaire5 = document.getElementById('formulaire5').style.display = "none";

document.getElementById("formulaire3").addEventListener("change", function(event){
    let value = event.target.value;
    if (value === "oui"){
        formulaire4 = document.getElementById('formulaire4').style.display = "block";
        formulaire5 = document.getElementById('formulaire5').style.display = "none";
    }else if(value === "non"){
        formulaire5 = document.getElementById('formulaire5').style.display = "block";
        formulaire4 = document.getElementById('formulaire4').style.display = "none";
    }
});
}
