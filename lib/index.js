const fs = require('fs');

const tebakkimia = fs.readFileSync('./database/result/tebakkimia.json');
const asahotak = fs.readFileSync('./database/result/asahotak.json');
const susunkata = fs.readFileSync('./database/result/susunkata.json');
const tebakkalimat = fs.readFileSync('./database/result/tebakkalimat.json');
const tekateki = fs.readFileSync('./database/result/tekateki.json');
const caklontong = fs.readFileSync('./database/result/caklontong.json');
const tebakbendera = fs.readFileSync('./database/result/tebakbendera.json');
const tebakanime = fs.readFileSync('./database/result/tebakanime.json');
const tebakkabupaten = fs.readFileSync('./database/result/tebakkabupaten.json');
const tebaklagu = fs.readFileSync('./database/result/tebaklagu.json');
const tebaklirik = fs.readFileSync('./database/result/tebaklirik.json');
module.exports = { tebakkimia, asahotak, susunkata, tebakkalimat, tekateki, caklontong, tebakbendera, tebakanime, tebakkabupaten, tebaklagu, tebaklirik }
