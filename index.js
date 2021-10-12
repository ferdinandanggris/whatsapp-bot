const { Location,List,Button } = require('whatsapp-web.js');
const auth = require("./core/auth");
const message = require("./core/message");
const client =auth();


client.on('message', msg => {
    setTimeout(function () {
        message(client,msg);
    },5000);
});
