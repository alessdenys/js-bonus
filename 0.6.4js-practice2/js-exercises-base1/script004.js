
    document.getElementById("valider").addEventListener("click", () => {
        let name = "Nom : " + document.getElementById("nom").value
    let lastName = "Prénom : " + document.getElementById("prenom").value
    let city = "Ville : " + document.getElementById("ville").value
    window.alert(name + "\n" + lastName + "\n" + city)
    });
    
