const banco = require('../banco');
const stages = require('../stages');

function execute(user,msg){
    if(msg === '1'){
        banco.db[user].stage = 0;
        return ['Deslize a tela para baixo.']
    }
    if(msg === '2'){
        banco.db[user].stage = 0;
        return ['Clique no *+* e aguarde.']
    }
    if(msg === '3'){
        banco.db[user].stage = 0;
        return ['Deslize o BO para esquerda e clique em *Visualizar*.']
    }
    if(msg === '4'){
        banco.db[user].stage = 0;
        return ['Deslize para a direita e clique em *Compartilhar*.']
    }
    if(msg === '5'){
        banco.db[user].stage = 0;
        return ['Deslize a tela para a direita ou clique no ícone *=* e clique em *Sair*']
    }
    if(msg === '6'){
        banco.db[user].stage = 0;
        return ['Deslize o BO em elaboração para a direita e clique em *Excluir*']
    }
    if(msg === '7'){
        banco.db[user].stage = 0;
        return ['Deslize o BO em elaboração para a direita e clique em *Editar*']
    }
    if(msg === '8'){
        banco.db[user].stage = 0;
        return ['Deslize o BO em elaboração para a direita e clique em *Finalizar*']
    }
    if(msg === '0'){
        banco.db[user].stage = 5;
        return ["Certo! Me diz em qual das telas abaixo está sua dúvida:\n\n 1- Na tela inicial/final\n 2- Na transcrição do fato\n 3- Nos envolvidos\n 4- Nos objetos envolvidos\n 5- Nos responsáveis"];
    }
    else{
        banco.db[user].stage = 6;
        return ['Opção inválida!']
    }
}


exports.execute = execute;