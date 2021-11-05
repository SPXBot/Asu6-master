const { MessageType } = require("@adiwajshing/baileys")
let axios = require("axios");
let fs = require("fs");
let handler = async(m, { conn, args, text, usedPrefix: _p }) => {
 let zero = fs.readFileSync('./audio/apasihmanggilmanggilmulu.mp3')
	let tytyd = "TESCUK"
	 try{
	 let img = "./src/logo.jpg"
	const xixi = { 
        key: {
        fromMe: false,
        participant: '0@s.whatsapp.net',
        remoteJid: 'status@broadcast'
        },
        message: {
        contactMessage: {
        displayName: 'Aca Cangtip',
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;WA;;;\nFN:WA\nTEL;type=CELL;type=VOICE;waid=62882005991227:+62 882-0059-91227\nEND:VCARD`
        }
        }
        }
          conn.sendMessage(m.chat, zero, MessageType.audio, { quoted: xixi, mimetype: 'audio/mp4', seconds: 99999, ptt:true })
      }catch (e){
      	m.reply("```kuntul```")
      console.log(e)
      }
}
handler.customPrefix = /^(bot|boot|bott|bboott|robot|robott|botttt|bottt)$/i //biar ga nyampur
handler.command = new RegExp
handler.enabled =  true

module.exports = handler
