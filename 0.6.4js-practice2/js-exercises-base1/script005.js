document.getElementById("valider").addEventListener("click", () => {
    let getNum1 = document.getElementById("premier_nombre").value;
    let getNum2 = document.getElementById("deuxieme_nombre").value;
    let num1 = parseInt(getNum1);
    let num2 = parseFloat(getNum2);
    window.alert(num1 * num2)

})


