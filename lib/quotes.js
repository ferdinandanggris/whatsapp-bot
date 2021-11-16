module.exports = quotes =async function(msg,parameter,user){
    const {MessageMedia} = require('whatsapp-web.js');
    const Jimp = require("jimp");
    const axios = require("axios");
    const cheerio = require("cheerio");
    const fs = require("fs");
    
        // GetImage
            var config = {
                responseType: 'stream'
            };
            let url = 'https://source.unsplash.com/1080x1350/?lowlight';
            async function getImage() {
                let resp = await axios.get(url, config);
                resp.data.pipe(fs.createWriteStream('image.jpg'));
            }
            getImage();
        // ImageEdit
    Jimp.read('image.jpg', (err, image) => {
        if (err) throw err;
        var authorFont;
        async function font(){
             authorFont= await Jimp.loadFont("font/Raleway-Medium/Raleway-Medium.ttf.fnt");
        }
        font();

        Jimp.loadFont("font/Raleway-Medium.ttf/Raleway-Medium.ttf.fnt", (err, font) => {
            var w = image.bitmap.width;
            var h = image.bitmap.height;
            let text = parameter.join(" ");
            let s =text.split('$');
            let panjang = s.length;
            image
            .blur(2);

            // Quotes
            s.map(function(val,i,arr){
                var textWidth = Jimp.measureText(font, val);
                var textHight = Jimp.measureTextHeight(font, val);
                var net = Math.floor(arr.length/2); 
                        image
                    .print(font, w/2 - textWidth/2, h/2+textHight*(i-net-1) - textHight/2,
                        {   
                        text: val,
                        }, textWidth, textHight)
                });
                msg.reply("proses");
                console.log("hampir jadi"); 
                    
            });

            // Autor
            Jimp.loadFont("font/Raleway-Medium/Raleway-Medium.ttf.fnt", (err, font) => {

                            var w = image.bitmap.width;
                            var h = image.bitmap.height;
                            let text = parameter.join(" ");
                            let s =text.split('$');
                            let panjang = s.length;
                            let author = "- " +user + " -";
                            var textWidth = Jimp.measureText(font, author);
                            var textHeight = Jimp.measureTextHeight(font, author);
                            var net = Math.ceil(panjang/2);
                                    image
                                .print(font, w/2 - textWidth/2, h/2+textHeight*(net) - textHeight/2,
                                    {   
                                    text: author,
                                    }, textWidth, textHeight)
                                .write('hasil.jpg'); // save
                                setTimeout(function(){
                                    const media = MessageMedia.fromFilePath("hasil.jpg");    
                                    msg.reply(media);
                                },5000);
            });
            })
}