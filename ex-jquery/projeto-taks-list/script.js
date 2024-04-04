$(document).ready(function() {
    // Função para adicionar tarefa ao formulário
    $("#formulario-tarefa").submit(function(e) {
        e.preventDefault();
        var taskName = $("#input-tarefa").val();
        if(taskName.trim() !== "") {
            $("#lista-tarefas").append("<li>" + taskName + "</li>");
            $("#input-tarefa").val(""); // Limpa o campo de entrada
        }
    });

    // Função para marcar tarefa como concluída ao clicar nela
    $("#lista-tarefas").on("click", "li", function() {
        $(this).toggleClass("completed");
    });
});