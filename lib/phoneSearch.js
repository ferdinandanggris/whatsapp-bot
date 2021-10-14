module.exports = phoneSearch = function (msg,params) {
    const axios =require('axios');
    const cheerio = require('cheerio');
    console.log(params);
    axios.get('https://www.gsmarena.com/res.php3?sSearch='+params)
            .then(function (res) {
                if(res.status===200){
                    const html = res.data;
                    const $ = cheerio.load(html)
                    const smList = [];
                    let response='';
                    $('.makers li').each(function (i,el) {
                        smList[i] = {
                            produk : $(this).find('strong').text().trim(),
                            spec : $(this).find('img').attr('title'),
                            detail : "https://www.gsmarena.com/"+$(this).find('a').attr('href'),
                            img : $(this).find('img').attr('src'),
                        }
                    })
                    if(smList==""){
                        msg.reply("Data Tidak Ditemukan...");
                    }else{
                    for(i in smList){
                        response +=`Nama Produk : ${smList[i].produk}\nDeskripsi : ${smList[i].spec}\nGambar : ${smList[i].img}\nDetail : ${smList[i].detail}\n\n`;
                    }
                    msg.reply(response);
                    }
                }
            }).catch((err)=>console.log(err))
}