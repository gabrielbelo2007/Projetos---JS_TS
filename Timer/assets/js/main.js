function timer () {
    const timer = document.querySelector(".timer");

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

    document.addEventListener('click', function(event){
        let idBotao = event.target;

        if (idBotao.classList.contains('start')) {
            clearInterval(contando);
            timer.style.color = 'black';
            updateTime();
        } else if (idBotao.classList.contains('pause')) {
            timer.style.color = 'red';
            clearInterval(contando);
        } else if (idBotao.classList.contains('reset')) {
            clearInterval(contando);
            timer.style.color = 'black';
            timer.innerHTML = `<p>00:00:00</p>`;
            sec = 0;
        };
    });
};

timer();
