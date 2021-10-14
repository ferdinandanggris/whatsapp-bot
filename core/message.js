const {MessageMedia} = require('whatsapp-web.js');
const https = require('https')
const fs = require('fs');
const imageAsSticker = require('../lib/imageAsSticker');
const bolaStand = require('../lib/bolaStand');
const help = require('../lib/help');
const phoneSearch = require('../lib/phoneSearch');

module.exports = messageHandler=function(bot,msg){
    const{body,type,hasMedia}=msg;
    const{pushname}=bot;
    const command = body.split(" ")[0];
    const param = body.split(" ")[1];
    const params = body.split(" ");
    let parameter = params.splice(1,params.length);
    
        if((command == '/sticker') || (command == "/stiker") && (type=='image')){
            imageAsSticker(bot,msg);
        }else if(command == '/bola'){
            bolaStand(msg,param);
        }else if(command == '/help'){
            help(msg);
        }else if(command == '/sm'){
            phoneSearch(msg,parameter);
        }

}