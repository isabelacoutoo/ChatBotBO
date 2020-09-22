const banco = require('../banco');
const stages = require('../stages');

function execute(user,msg){
    if (msg.toLowerCase() === 'sim') {
        banco.db[user].stage = 0;
          return ['Fecha o aplicativo e entra novamente.\n\n Caso não consiga, troque o aparelho celular.'];
    }
    if(msg.toLowerCase() === 'não'){
       banco.db[user].stage = 0;
        return ['Devolva o aparelho ao armeiro e solicite outro.'];
    }
    if(msg.toLowerCase() === 'nao'){
        banco.db[user].stage = 0;
         return ['Devolva o aparelho ao armeiro e solicite outro.'];
    }
    else{
        banco.db[user].stage = 3;
        return ['Digite uma opção válida!']
    }
}

exports.execute = execute;