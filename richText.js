// RESGATANDO O ELEMENTO A PARTIR DA CLASS BTN
const elements = document.querySelectorAll(".btn");

// RESGATANDO O ELEMENTO E PASSANDO UM FOREACH PARA REPETIÇÃO DA AÇÃO
elements.forEach(element => {

    // O ELEMENTO HERDA TODOS OS OBJETOS E TRABALHA COM A FUNÇÃO QUE FOR ATRIBUÍDA
    element.addEventListener("click", () => {

        // DECLARANDO O VALOR DO DATA QUE VEM DO HTML
        let command = element.dataset['element'];

        // CASO O ELEMENTO RETORNAR UMA DAS DUAS OPÇÕES UM INPUT URL IRÁ APARECER
        if(command == 'createLink' || command == 'insertImage'){

            // DECLARANDO O VALOR A SER INSERIDO NO PROMPT
            let url = prompt('Enter the link here:', 'http://')

            // PASSANDO PARA A FUNÇÃO execCommand() A MESMA É PRIMITIVA E EXIGE DETERMINADOS VALORES PARA DETERMINADAS DATAS DO HTML
            document.execCommand(command, false, url);

        // CASO O ELEMENTO RETORNAR COR
        } else if(command == "foreColor") {

            /* var cor_texto = document.getElementById("cor").value;
            console.log(cor_texto);
            document.execCommand(command, false, cor_texto); */

        } else {

            // AS DEMAIS OPÇÕES DE TEXT NÃO PRECISAM DE OUTROS PARÂMETROS APENAS O QUE VEM DA DATA DO HTML
            document.execCommand(command, false, null);

        }
    });
});