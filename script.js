

function calcularMontoTotal(){

    event.preventDefault()

    const montoTotal = +document.getElementById('montoTotal').value;
    const descuento = +document.getElementById('porcentaje').value;
    const  valorTotal = montoTotal * (1 + descuento / 100);

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `El valor total de la suma es ${valorTotal.toFixed(2)}`
}