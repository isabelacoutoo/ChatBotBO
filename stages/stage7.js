const banco = require('../banco');
const stages = require('../stages');

function execute(user,msg){
    if(msg === '1'){
        banco.db[user].stage = 0;
        return ['Clique em *+*']
    }
    if(msg === '2'){
        banco.db[user].stage = 0;
        return ['Deslize o Envolvido para a direita e clique em *Editar*']
    }
    if(msg === '3'){
        banco.db[user].stage = 0;
        return ['Deslize o Envolvido para a esquerda e clique em *Excluir*']
    }
    if(msg === '0'){
        banco.db[user].stage = 5;
        return ["Certo! Me diz em qual das telas abaixo está sua dúvida:\n\n 1- Na tela inicial/final\n 2- Na transcrição do fato\n 3- Nos envolvidos\n 4- Nos objetos envolvidos\n 5- Nos responsáveis"];
    }
    else{
        banco.db[user].stage = 7;
        return ['Opção inválida!']
    }
}


exports.execute = execute;