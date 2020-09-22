const banco = require('../banco');
const stages = require('../stages');

function execute(user,msg){
    if (msg === '1') {
        banco.db[user].stage = 3;
          return ["Vamos lá! Confere se o aparelho está conectado à VPN, por gentileza", "Digite *SIM* ou *NÃO*"];
    }
    if(msg === '2'){
       banco.db[user].stage = 0;
        return ["Sinto muito, estamos trabalhando para que erros desse tipo não aconteçam. Por favor, nos ajude tirando uma foto e nos enviando, através dos grupos de Whatsapp, relatando o momento em que o erro aconteceu." , "Você pode tentar reiniciar o aplicativo, mas caso ainda não consiga, troque o aparelho celular."];
    }
    if(msg ==='3'){
        banco.db[user].stage = 0;
        return ['Tente fechar o aplicativo e abrir novamente. \n\n Caso não consiga, troque o aparelho celular']
    }
    if(msg ==='4'){
        banco.db[user].stage = 0;
        return ['Tente fechar o aplicativo e abrir novamente. \n\n Caso não consiga, troque o aparelho celular']
    }
    if(msg === '0'){
        banco.db[user].stage = 1;
        return ["Como posso te ajudar?","*1-Problemas com o aplicativo*\n*2-Dúvidas de uso* ? "];
    }
    else{
        banco.db[user].stage = 2;
        return ['Digite uma opção válida!']
    }
}

exports.execute = execute;