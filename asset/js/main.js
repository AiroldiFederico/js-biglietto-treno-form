

const prckm = 0.21;

function getUserInput() {

    let InputNameLastname = document.getElementById("InputNameLastname").value;
    let Inputkm = document.getElementById("Inputkm").value;
    let Inputage = document.getElementById("Inputage").value;

    document.getElementById('OutName').innerHTML = InputNameLastname


    document.getElementById('priceresult').innerHTML = (prckm * Inputkm ).toFixed(2);
    if (Inputage < 18) {
        document.getElementById('priceresult').innerHTML = ((prckm * Inputkm) * 0.8).toFixed(2);
        document.getElementById('ticket').innerHTML = `Biglietto ridotto`;
    } else if (Inputage > 65) {
         document.getElementById('priceresult').innerHTML = ((prckm * Inputkm) * 0.6).toFixed(2);
         document.getElementById('ticket').innerHTML = `Biglietto ridotto`;
    }


    document.getElementById('carriage').innerHTML = Math.floor(Math.random() * 10 + 1);
    document.getElementById('code').innerHTML = Math.floor(Math.random() * 100000 + 1);

    document.getElementById('DivOutput').classList.toggle('d-none');
}

function clearArea() {

    document.getElementById("InputNameLastname").value = "";
    document.getElementById("Inputkm").value = "";
    document.getElementById("Inputage").value = ""; 
    document.getElementById('DivOutput').classList.add('d-none');
}