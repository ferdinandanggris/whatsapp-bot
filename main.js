const fs = require('fs');
const https = require('https');
const cheerio = require('cheerio');
const axios =require('axios');

    let leagues="";
axios.get("https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2021&sort=asc")
        .then(function (response) {
            if(response.status === 200){
                const html = response.data;
                const data = JSON.stringify(html);
                const json = JSON.parse("["+data+"]");
                // fs.writeFileSync("coba.json",json);
                let tampil = function(){
                    let temp="";
                    for (let i = 0; i < 10; i++) {
                        const obj = json[0].data.standings[i];
                        temp+= `${obj.stats[8].value}.${obj.team.name}\n  -Main : ${obj.stats[3].value}  -Menang : ${obj.stats[0].value}  -Point : ${obj.stats[6].value}\n  -Kalah : ${obj.stats[1].value}  \ -Seri : ${obj.stats[2].value}  \n\n`;
                    }
                    return temp;
                }



                    console.log(`\n${json[0].data.name} (${json[0].data.season})\n`)
                    console.log(`\tNama Klub`);
                    console.log(tampil());
                // console.log(json[0].data.standings.forEach(function(obj) {
                //     console.log(`${obj.stats[8].value}. ${obj.team.abbreviation}\t    ${obj.stats[3].value}  ${obj.stats[0].value}  ${obj.stats[1].value}  ${obj.stats[2].value}  ${obj.stats[6].value}`);
                // }));
            }
        })


        // Data = name
        // season 2021
        // standing = team[] = name
        //                        stats = name[0,1,2,3,6]
        //                                    = value
                           
                               
