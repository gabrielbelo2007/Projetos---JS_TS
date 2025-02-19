function listTasks () {
    let task = document.querySelector("#tarefa");
    let list = document.querySelector(".lista");

    function criarTarefa (tarefa) {
        list.innerHTML += `<li class="item">${tarefa}<button class="apagar">Apagar</button></li>`;
        limparTarefa();
        salvarTarefas();
    };

    function limparTarefa () {
        task.value = '';
        task.focus();
    }

    function apagarTarefa (indice) {
        indice.remove();
        salvarTarefas();
    };
    
    document.addEventListener('click', function(event){
        let idBotao = event.target;

        if (idBotao.classList.contains("adicionar")){
            if (task.value){
                criarTarefa(task.value);
            } else{
                alert('É necessário informar um valor!')
            };
        } else if (idBotao.classList.contains("apagar")){
            apagarTarefa(idBotao.parentElement);
        };
    });

    task.addEventListener('keypress', function(tecla){
        if (tecla.keyCode === 13){
            if (task.value){
                criarTarefa(task.value);
            } else{
                alert('É necessário informar um valor!')
            };
        };
    });

    function salvarTarefas() {
        const liTarefas = list.querySelectorAll('li');
        const listaDeTarefas = [];

        for (let tarefa of liTarefas){
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('Apagar','');
            listaDeTarefas.push(tarefaTexto);
        };

        const tarefasJSON = JSON.stringify(listaDeTarefas);
        localStorage.setItem('tarefas', tarefasJSON);
    };

    function tarefasSalvas(){
        const tarefas = localStorage.getItem('tarefas');
        listaDeTarefas = JSON.parse(tarefas);

        for (let tarefa of listaDeTarefas){
            criarTarefa(tarefa);
        };
    };

    tarefasSalvas();
};

listTasks();
