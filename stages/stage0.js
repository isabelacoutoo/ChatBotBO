const banco = require('../banco');
const stages = require('../stages');

function execute(user){
    banco.db[user].stage = 1;
    return ["Olá, bem-vind@ ao Assitente Virtual BOEPM no Whatsapp. \nEste canal é oficial e verificado.✅",
    "Como posso te ajudar?","*1-Problemas com o aplicativo*\n*2-Dúvidas de uso* ? "];
    
}

exports.execute = execute;