const banco = require('../banco');
const stages = require('../stages');

function execute(user,msg){
    if(msg === 'sim'){
        banco.db[user].stage = 4;
        return ['Fecha o aplicativo e entra novamente.','Caso não consiga, troque o aparelho celular.'];
    }
    if(msg === 'nao'){
        banco.db[user].stage = 4;
        return ['Devolva o aparelho ao armeiro e solicite outro.']
    }
    else{
         return ['Digite uma opção válida!']
    }
}


exports.execute = execute;