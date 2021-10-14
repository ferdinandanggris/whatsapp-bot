module.exports = help = function (msg) {
    try {
        let menu ="*Bot v1.0*\nMenu Tersedia :"
        const stiker = "\n -Buat Stiker \n command: /stiker <gambar>";
        menu += stiker;
        const bola = "\n -Cek Klasemen Bola \n   command: /bola <state> \n  cth: /bola eng";
        menu += bola;
        const sm ="\n - Cari smartphone \n  command: /sm <brand>";
        menu += sm;
    msg.reply(menu);
    }catch (error) {
        console.log(error);
    }
}