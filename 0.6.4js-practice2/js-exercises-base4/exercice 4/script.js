document.getElementById("run").addEventListener("click", () => {
    const firstPsw = document.getElementById("motdepasse").value;
    const secondPsw = document.getElementById("confirmation").value;
    const check = () => {
        if (firstPsw === secondPsw) {
            document.getElementById('motdepasse').style.border = '3px solid green';
            document.getElementById('confirmation').style.border = '3px solid green';
        }
        else {
            document.getElementById('motdepasse').style.border = '3px solid red';
            document.getElementById('confirmation').style.border = '3px solid red';
        }
    }
    check();
});