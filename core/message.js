const {MessageMedia} = require('whatsapp-web.js');
const {ClientInfo,Contact} = require("whatsapp-web.js");
const https = require('https')
const fs = require('fs');
const imageAsSticker = require('../lib/imageAsSticker');
const bolaStand = require('../lib/bolaStand');
const help = require('../lib/help');
const phoneSearch = require('../lib/phoneSearch');
const gempa = require('../lib/gempa');
const quotes = require('../lib/quotes');

module.exports = messageHandler= async function(bot,msg){
    const{body,type,hasMedia}=msg;
    const{pushname}=bot;
    const command = body.split(" ")[0];
    const param = body.split(" ")[1];
    const params = body.split(" ");
    let parameter = params.splice(1,params.length);
    var author=await msg.getContact().then(function(e){return e.pushname});
    
        if((command == '/sticker') || (command == "/stiker") && (type=='image')){
            imageAsSticker(bot,msg);
        }else if(command == '/bola'){
            bolaStand(msg,param);
        }else if(command == '/help'){
            help(msg);
        }else if(command == '/sm'){
            phoneSearch(msg,parameter);
        }else if(command == '/gempa'){
            gempa(msg);
        }else if(command == '/quotes'){
            quotes(msg,parameter,author);
        }

}