document.getElementById("valider").addEventListener("click", () =>{
    let math =  () => {
        const shoeSize = document.getElementById("pointure").value;
        const birthYear = document.getElementById("annee").value;
        const doubleShoe = (shoeSize * 2 + 5) * 50;
        const resultat = doubleShoe - birthYear + 1766;
        
        return(resultat)
    };
    alert(math())
});