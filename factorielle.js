function calcul_Factorielle(para) {
    let calculette = 1;
    if (!isNaN(para) && Number.isInteger(para)) {
        if (para < 0) {
            calculette = -Math.abs(para) * calcul_Factorielle(Math.abs(para) - 1);
        } else if (para == 0) {
            calculette = 1;
        } else {
            calculette = para * calcul_Factorielle(para - 1);
        }
        document.getElementById("resul").textContent = para + "! = ";
        document.getElementById("resultat").value = calculette;
        document.getElementById("erreur").textContent = "";
        document.getElementById("message").textContent = "";
        return calculette;
    } else {
        document.getElementById("resul").textContent = "";
        document.getElementById("resultat").value = "Error 2";
        document.getElementById("erreur").textContent = "Erreur : ";
        document.getElementById("message").textContent = "La valeur saisie n'est pas valide pour le calcul de factorielle";
        return "La valeur saisie n'est pas valide pour le calcul de factorielle";
    }
}
function ecouteur() {
    let argu = parseInt(document.getElementById("nombre").value);
    calcul_Factorielle(argu);
}

function restaurer() {
    document.getElementById("nombre").value = "";
    document.getElementById("erreur").textContent = "";
    document.getElementById("erreur").style.color="red";
    document.getElementById("message").textContent = "";
    document.getElementById("resul").textContent = "";
    document.getElementById("resultat").value = "";
}
document.getElementById("nombre").addEventListener("input", ecouteur);
document.getElementById("restaure").addEventListener("click", restaurer);
