let nomes = ["Ana Clara","Denise Mantis","Rayssa Giovanelly","Roger Alcantara"];

nomes.forEach(nome =>(
    console.log
));

/*
enquanto
enquantoa  condição for verdadeiro, o laço continuará se repetindo
let nome = prompt ("digite o nome do usuario")
while(nome !== ("Hiago"){
console.log("insira o nome correto:");
nome = prompt("digite o nome do usuario novamente")
}

*/

let tarefas = [
   "Estudar JavaScript",
    "Fazer exercícios",
    "Ler um livro",
    "Escreveer uma carta",
    "Ver um filme",
    "Comprar lanche",
    "Finalizar uma atividade",
    "Sair com as amigas",
    "Pintar um quadro",
    "Comprar frutas"
    
];

let opcao;
 {
    opcao = prompt(
        "===== MINHA TODO LIST =====\n\n"+
        "1 - Cadastrar tarefa\n" +
        "2 - Listar tarefas\n" +
        "3 - Buscar tarefa\n" +
        "4 - Atualizar tarefa\n" +
        "5 - Excluir tarefa\n" +
        "6 - Filtrar tarefas\n" +
        "7 - Adicionar tarefa no início\n" + 
        "8 - Remover primeira tarefa\n" +
        "9 - Remover última tarefa\n" +
        "0 - Sair\n\n" +
        "Escolha uma opção:"
    );

    switch (opcao) {

    
        case "1":
            let novaTarefa = prompt("Digite o nome da tarefa:");

            if (novaTarefa) {
                tarefas.push(novaTarefa);
                alert("Tarefa cadastrada com sucesso!");
            } else {
                alert("Digite uma tarefa válida.");
            }
            break;


       
        case "2":
            if (tarefas.length === 0) {
                alert("A lista de tarefas está vazia.");
            } else {
                let lista = "===== TAREFAS =====\n\n";

                tarefas.forEach(function(tarefa, indice) {
                    lista += (indice + 1) + " - " + tarefa + "\n";
                });

                alert(lista);
            }
            break;


        
        case "3":
            let busca = prompt("Digite o nome da tarefa que deseja buscar:");

            if (tarefas.includes(busca)) {
                let tarefaEncontrada = tarefas.find(function(tarefa) {
                    return tarefa === busca;
                });

                alert("Tarefa encontrada: " + tarefaEncontrada);
            } else {
                alert("Tarefa não encontrada.");
            }
            break;


        
        case "4":
            let tarefaAtual = prompt("Digite o nome atual da tarefa:");
            let novaTarefaNome = prompt("Digite o novo nome da tarefa:");

            let posicao = tarefas.indexOf(tarefaAtual);

            if (posicao !== -1) {
                tarefas[posicao] = novaTarefaNome;
                alert("Tarefa atualizada com sucesso!");
            } else {
                alert("Tarefa não encontrada.");
            }
            break;


        
        case "5":
            let tarefaExcluir = prompt("Digite o nome da tarefa que deseja excluir:");

            let indiceExcluir = tarefas.findIndex(function(tarefa) {
                return tarefa === tarefaExcluir;
            });

            if (indiceExcluir !== -1) {
                tarefas.splice(indiceExcluir, 1);
                alert("Tarefa excluída com sucesso!");
            } else {
                alert("Tarefa não encontrada.");
            }
            break;


        
        case "6":
            let palavra = prompt("Digite uma letra ou palavra para filtrar:");

            let tarefasFiltradas = tarefas.filter(function(tarefa) {
                return tarefa.toLowerCase().includes(palavra.toLowerCase());
            });

            if (tarefasFiltradas.length === 0) {
                alert("Nenhuma tarefa encontrada.");
            } else {
                let resultado = "===== TAREFAS FILTRADAS =====\n\n";

                tarefasFiltradas.forEach(function(tarefa, indice) {
                    resultado += (indice + 1) + " - " + tarefa + "\n";
                });

                alert(resultado);
            }
            break;


        
        case "7":
            let tarefaInicio = prompt("Digite a tarefa que deseja adicionar no início:");

            if (tarefaInicio) {
                tarefas.unshift(tarefaInicio);
                alert("Tarefa adicionada no início!");
            } else {
                alert("Digite uma tarefa válida.");
            }
            break;


        
        case "8":
            if (tarefas.length === 0) {
                alert("Não existem tarefas para remover.");
            } else {
                let removidaPrimeira = tarefas.shift();
                alert("Tarefa removida: " + removidaPrimeira);
            }
            break;


        
        case "9":
            if (tarefas.length === 0) {
                alert("Não existem tarefas para remover.");
            } else {
                let removidaUltima = tarefas.pop();
                alert("Tarefa removida: " + removidaUltima);
            }
            break;


        
        case "0":
            alert("Programa encerrado!");
            break;


        
        default:
            alert("Opção inválida!.");
    }

} while (opcao !== "0");