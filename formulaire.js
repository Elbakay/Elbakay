
function Validation() {
    var adresse = document.getElementById("ADRESSE");
    var nom = document.getElementById("NOM");
    var prenom = document.getElementById("PRENOM");
    var mail = document.getElementById("MAIL");
    var resul = document.getElementById("RESUL");
    var date = document.getElementById("DATE");
    var tab=[nom,prenom,adresse,mail,date];
    var i=0;
    resul.textContent="";
    tab.forEach(element => {
        
        if (element.value.length<5 ){
         var p=document.createElement("p");
         p.textContent ="L'élément "+ element.id +" doit contenir plus de 5 caractères" ;
         resul.appendChild(p);
         resul.style.backgroundColor="red"
            i++;
        }


    });

    if (i===0){
   resul.style.backgroundColor="SpringGreen";
   resul.style.fontFamily="Verdana"
   resul.textContent="Bienvenue "+prenom.value+" "+nom.value;
    }

}