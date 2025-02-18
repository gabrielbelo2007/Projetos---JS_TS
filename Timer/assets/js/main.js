const timer = document.querySelector(".timer");
const iniciar = document.querySelector("#start");
const pausar = document.querySelector("#pause");
const zerar = document.querySelector("#reset");

function getTime(segundos) {
    const contarTempo = new Date(segundos * 1000);
    return contarTempo.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone: 'UTC',
    });
};

let sec = 0;
let contando;

function updateTime() {
    contando = setInterval(function() {
        sec++;
        timer.innerHTML = `<p>${getTime(sec)}</p>`;
    }, 1000);
};

iniciar.addEventListener('click', function(event){
    clearInterval(contando);
    timer.style.color = 'black';
    updateTime();
});

pausar.addEventListener('click', function(event){
    timer.style.color = 'red';
    clearInterval(contando);
});

reset.addEventListener('click', function(event){
    clearInterval(contando);
    timer.style.color = 'black';
    timer.innerHTML = `<p>00:00:00</p>`;
    sec = 0;
});
