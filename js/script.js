function toggleMenu() {
    const menu =  document.getElementById('menu');
    menu.classList.toggle('active');
}

document.getElementById('formIMC').addEventListener('submit', function(e) {
    e.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const imc = peso / (altura * altura);
    const resultadoDiv = document.getElementById('resultado');
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }

    resultadoDiv.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}`;
});