function meuEscopo () {
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");

    function validos (peso, altura) {
        if (!peso) {
            resultado.innerHTML = '<p class="bad">Peso inválido</p>';
        } else if (!altura) {
            resultado.innerHTML = `<p class="bad">Altura inválida</p>`;
        } else {
            return true;
        };
    }
    
    function calculoImc (peso, altura) {
        const imcResultado = peso / altura ** altura;
        return imcResultado;
    };

    function situacaoImc (imc) {
        const nivel = ["Abaixo do peso", "Peso Normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"];

        if (imc >= 39.9) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) {
            return nivel[1];
        } else {
            return nivel[0];
        };
    };

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const inputPeso = form.querySelector(".peso");
        const inputAltura = form.querySelector(".altura");
        
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        const validado = validos(peso, altura);

        if (validado) {
            const imc = calculoImc(peso, altura);
            const situacao = situacaoImc(imc);

            resultado.innerHTML = `<p class="correct">Seu IMC: ${imc.toFixed(2)} || Resultado: ${situacao}.</p>` 
        };
    });
 };

meuEscopo();
