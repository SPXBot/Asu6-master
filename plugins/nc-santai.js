const { MessageType } = require("@adiwajshing/baileys")
let axios = require("axios");
let fs = require("fs");
let handler = async(m, { conn, args, text, usedPrefix: _p }) => {
let stc = fs.readFileSync('./sticker/Sante.webp')
	let tytyd = "TESCUK"
  try{
          let img = "./src/logo.jpg"
	const xixi = {
	                  key : {
                                participant : '0@s.whatsapp.net'
                               },
                    message: {
	"productMessage": {
		"product": {
			"productImage":{
				"mimetype": "image/jpeg",
				"jpegThumbnail": fs.readFileSync(`./src/logo.jpg`) //Gambarnye
			},
			"title": "JAN TOXIC HM", 
			"description": "SELF BOT", 
			"currencyCode": "USD",
			"priceAmount1000": "2",
			"retailerId": "Ghost",
			"productImageCount": 1
		},
			"businessOwnerJid": `0@s.whatsapp.net`
}
}
          }
          conn.sendMessage(m.chat, stc, MessageType.sticker, {quoted: xixi})
      }catch (e){
      	m.reply("```ERROR```")
      console.log(e)
      }
}
handler.customPrefix = /anjink|anjg|ajg|anjk|bajingan|bangsat|bgst|memek|memeq|pepek|meki|titit|titid|tytyt|tytyd|peler|tetek|toket|goblok|blok|blog|idiot|ngentot|kentod|kektot|jembut|dajjal|jancok|jancuk|pantek|puki|pukimak|kimak|kampang|lonte|coli|colmek|pelacur|henceut|nigga|fuck|dick|bitch|tits|bastard|asshole/i
handler.command = new RegExp
handler.disabled = true

module.exports = handler