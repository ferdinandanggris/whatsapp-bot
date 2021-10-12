const {MessageMedia} = require('whatsapp-web.js');
module.exports = ImageAsSticker= async function (bot,msg) {
    try {
    msg.reply("Perintah sedang dijalankan ...");
            const attachmentData = await msg.downloadMedia();
            const media =new MessageMedia(attachmentData.mimetype,attachmentData.data,"data.png");
            bot.sendMessage(msg.from,media,{sendMediaAsSticker:true});
        } catch (error) {
            console.log(error);
        }
}