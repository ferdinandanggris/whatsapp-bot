module.exports = help = function (msg) {
    try {
    msg.reply("*Bot v1.0*\nMenu Tersedia :\n -Buat Stiker \n command: /stiker <gambar> \n -Cek Klasemen Bola \n  -command: /bola <state> \n  cth: /bola eng");
    }catch (error) {
        console.log(error);
    }
}