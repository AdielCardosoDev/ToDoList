var inputNovaTarefa = document.querySelector('#inputNovaTarefa');
var btnAddTarefa = document.querySelector('#btnAddTarefa');
var listaTarefas = document.querySelector('#listaTarefas');

inputNovaTarefa.addEventListener('keypress', (e) =>{
    if(e.keyCode == 13){
        var tarefa = {
            nome: inputNovaTarefa.value,
            id: '',
        }
        adicionarTarefa(tarefa);
    }
});

btnAddTarefa.addEventListener('click', (e)=>{    
        var tarefa = {
            nome: inputNovaTarefa.value,
            id: '',
        }   
        adicionarTarefa(tarefa);
});

function gerarId(){
    return Math.floor(Math.random() * 3000);
}

function adicionarTarefa(tarefa){
    var li = criarTagLi(tarefa);
    listaTarefas.appendChild(li)

    inputNovaTarefa.value = "";
}

function criarTagLi(tarefa){
    var li = document.createElement('li');

    var span = document.createElement('span');
    span.classList.add('textoTarefa');
    span.innerHTML = tarefa.nome;

    var div = document.createElement('div');

    var btnEditar = document.createElement('button');
    btnEditar.classList.add('btnAcao');
    btnEditar.innerHTML = '<i class="fa fa-pencil"></i>';
    btnEditar.setAttribute('onClick', 'editar('+tarefa.id+')');
    
    var btnExcluir = document.createElement('button');
    btnExcluir.classList.add('btnAcao');
    btnExcluir.innerHTML = '<i class="fa fa-trash"></i>';
    btnExcluir.setAttribute('onClick', 'excluir('+tarefa.id+')');
    div.appendChild(btnEditar);
    div.appendChild(btnExcluir);

    li.appendChild(span);
    li.appendChild(div);
    return li;
}

function editar(idTarefa){
    alert(idTarefa);
}

function excluir(idTarefa){
    alert(idTarefa);
}