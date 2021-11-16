module.exports = gempa = function (msg) {
    const axios =require('axios');
    axios.get('https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json')
            .then(function (res) {
                if(res.status===200){
                    const data = res.data;
                    const tanggal = data.Infogempa.gempa.Tanggal;
                    const jam = data.Infogempa.gempa.Jam;
                    const magnitude = data.Infogempa.gempa.Magnitude;
                    const kedalaman = data.Infogempa.gempa.Kedalaman;
                    const wilayah = data.Infogempa.gempa.Wilayah;
                    const potensi = data.Infogempa.gempa.Potensi;
                    msg.reply("*"+tanggal +" "+ jam+"\n"+wilayah+"*\n\nMagnitude :" + magnitude +"\nKedalaman : "+ kedalaman+"\n"+potensi);
                }
            }).catch((err)=>console.log(err))
}