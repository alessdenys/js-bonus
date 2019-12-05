document.getElementById("valider").addEventListener("click", () => {
    let getAge = document.getElementById("age").value;
    if (getAge > 17) {
        alert("vous êtes majeur")
    }
    else{alert("vous êtes mineur")}
})