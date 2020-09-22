const banco = require('../banco');
const stages = require('../stages');

function execute(user,msg){
if(msg === '1'){
    banco.db[user].stage = 6;
    return ['Legal! Qual dessas opcões te atende melhor?\n 1- A página não atualiza?\n 2- Quer iniciar novo BO?\n 3- Quer visualizar BO já finalizado?\n 4- Quer compartilhar BO já finalizado?\n 5- Quer sair do aplicativo?\n 6- Quer excluir BO não concluido?\n 7- Quer retomar/editar BO em elaboração?\n 8- Quer finalizar o BO pronto?','Digite 0 para retornar o menu'];
}
if(msg === '2'){
    banco.db[user].stage = 0;
    return ['Dúvidas sobre qual natureza preencher?!\n A lista de Natureza da Ocorrência está de acordo com a INFOPOL. Se você não estiver seguro sobre qual Natureza deve selecionar, pode entrar em contato com o CIODS/COPOM ou com o oficial de operações de sua Unidade']
}
if(msg === '3'){
    banco.db[user].stage = 7;
    return ['Ok! Escolhe a opção que representa tua dúvida:\n 1- Quer adicionar envolvido?\n 2- Quer editar envolvido?\n 3- Quer excluir envolvido?','Digite 0 para retornar o menu'];
}
if(msg === '4'){
    banco.db[user].stage = 8;
    return ['Entendi! Agora me diz qual dessas opções representa tua dúvida:\n 1- Quer adicionar objeto?\n 2- Quer editar objeto?\n 3- Quer excluir objeto?\n 4- Quer relacionar objeto à envolvido?','Digite 0 para retornar o menu'];
}
if(msg === '5'){
    banco.db[user].stage = 9;
    return ['Legal! Qual das opções melhor te atende?\n 1- Quer adicionar efetivo que participou da ocorrência?\n 2- Quer editar tipo de envolvimento de PM na ocorrência?\n 3- Quer excluir efetivo da ocorrência?','Digite 0 para retornar o menu'];
}
if(msg === '0'){
    banco.db[user].stage = 1;
    return["Como posso te ajudar?","*1-Problemas com o aplicativo*\n*2-Dúvidas de uso* ? "];
}
else{
    banco.db[user].stage = 5;
    return ['Digite uma opção válida!']
    }
}

exports.execute = execute;