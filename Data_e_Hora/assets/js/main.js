function meuEscopo () {
    const areaTexto = document.querySelector("#texto")

    const data = new Date();

    function pegarDia () {
        const dia = data.getDay();
        const dias = ["Domingo", "Segunda-Feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

        return dias[dia];

        // let diaSemana;
        
        // switch (dia) {
        //     case 0:
        //         diaSemana = "Domingo";
        //         return diaSemana;
        //     case 1:
        //         diaSemana = "Segunda-feira";
        //         return diaSemana;
        //     case 2:
        //         diaSemana = "Terça-feira";
        //         return diaSemana;
        //     case 3: 
        //         diaSemana = "Quarta-feira";
        //         return diaSemana;
        //     case 4:
        //         diaSemana = "Quinta-feira";
        //         return diaSemana;
        //     case 5:
        //         diaSemana = "Sexta-feira";
        //         return diaSemana;
        //     case 6:
        //         diaSemana = "Sábado";
        //         return diaSemana;
        // }
    }

    function pegarMes () {
        const mes = data.getMonth();
        const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

        return meses[mes];
        // let mesTexto;

        // switch (mes) {
        //     case 0:
        //         mesTexto = "Janeiro";
        //         return mesTexto;
        //     case 1:
        //         mesTexto = "Fevereiro";
        //         return mesTexto;
        //     case 2:
        //         mesTexto = "Março";
        //         return mesTexto;
        //     case 3: 
        //         mesTexto = "Abril";
        //         return mesTexto;
        //     case 4:
        //         mesTexto = "Maio";
        //         return mesTexto;
        //     case 5:
        //         mesTexto = "Junho";
        //         return mesTexto;
        //     case 6:
        //         mesTexto = "Julho";
        //         return mesTexto;
        //     case 7:
        //         mesTexto = "Agosto";
        //         return mesTexto;
        //     case 8:
        //         mesTexto = "Setembro";
        //         return mesTexto;
        //     case 9: 
        //         mesTexto = "Outubro";
        //         return mesTexto;
        //     case 10:
        //         mesTexto = "Novembro";
        //         return mesTexto;
        //     case 11:
        //         mesTexto = "Dezembro";
        //         return mesTexto;
        // }
    }

    function criaData () {
        const diaNumero = data.getDate();
        const ano = data.getFullYear();

        const textoData = `<h1>${pegarDia()}, ${diaNumero} de ${pegarMes()} de ${ano}</h1>`;
        areaTexto.innerHTML = textoData;
    }

    function criaHora () {
        const hora = data.getHours();
        const minuto = data.getMinutes();

        function formatarMinuto (num) {
            return minuto >= 10 ? num : `0${num}`
        }

        const textoHora = `<h2>${hora}:${formatarMinuto(minuto)}</h2>`;
        areaTexto.innerHTML += textoHora;
    }

    criaData();
    criaHora();
};

meuEscopo();

/* 
const areaTexto = document.querySelector("#texto");
const data = new Date();
const opcoes = {
    dateStyle: 'full';
    timeStyle: 'short';
};

areaTexto.innerHTML = data.toLocaleDateString('pt-BR', opcoes);
*/
