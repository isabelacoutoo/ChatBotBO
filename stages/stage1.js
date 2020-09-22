const banco = require('../banco');
const stages = require('../stages');

function execute(user,msg){
    if (msg === '1') {
        banco.db[user].stage = 2;
        return ["Certo! Me diz em qual das opções abaixo está o erro:\n\n 1- Não consegue logar?\n 2- Aparece alguma tela com mensagem de erro?\n 3- Aplicativo travou?\n 4- A lista com as opções não foi carregada?",'Digite 0 para retornar o menu'];
            
    }
    if(msg === '2'){
        banco.db[user].stage = 5;
        return ["Certo! Me diz em qual das telas abaixo está sua dúvida:\n\n 1- Na tela inicial/final\n 2- Na transcrição do fato\n 3- Nos envolvidos\n 4- Nos objetos envolvidos\n 5- Nos responsáveis",'Digite 0 para retornar o menu'];
    }
    else{
        banco.db[user].stage = 1;
        return ['Opção inválida! Digite 1 ou 2']
    }
}


exports.execute = execute;