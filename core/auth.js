const fs = require("fs");
const { Client,Location,List,Button } = require('whatsapp-web.js');
const qrcode = require("qrcode-terminal");

module.exports = auth = function () {
    const SESSION_FILE_PATH = '../session.json';
    let sessionCfg;
    if (fs.existsSync(SESSION_FILE_PATH)) {
        sessionCfg = require(SESSION_FILE_PATH);
    }
    const client = new Client({ puppeteer: { headless: true,excutablePath:'/usr/bin/chromium-browser'}, session: sessionCfg });

    client.initialize();
    
    client.on('qr', (qr) => {
        // Generate and scan this code with your phone
        console.log('QR RECEIVED', qrcode.generate(qr));
    });
    
    
    
    client.on('qr', (qr) => {
        // NOTE: This event will not be fired if a session is specified.
        console.log(qrcode.generate(qr));
    });
    
    client.on('authenticated', (session) => {
        console.log('AUTHENTICATED', session);
        sessionCfg=session;
        fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), function (err) {
            if (err) {
                console.error(err);
            }
        });
    });
    
    client.on('auth_failure', msg => {
        // Fired if session restore was unsuccessfull
        console.error('AUTHENTICATION FAILURE', msg);
    });
    
    client.on('ready', () => {
        console.log('READY');
    });

    return client;
}

