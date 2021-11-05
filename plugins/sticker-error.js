const { MessageType } = require("@adiwajshing/baileys")
let axios = require("axios");
let fs = require("fs");
let handler = async(m, { conn, args, text, usedPrefix: _p }) => {
//if(args.length == 0) return m.reply(`Cara Penggunaan: Reply Foto, Ketik *${_p}faketroli* <TextMessage> | <OrderMessage> | <OrderTitle>\nContoh: *${_p}faketroli* Hai Wibu | ZEROBOT | 10k Bang?`) 
let stc = fs.readFileSync('./sticker/error.webp')
	//let [poop, tytyd] = text.split("|")
  //let [ tytyd] = text.split("|")
	//if(!poop) return m.reply("Masukkan Teks Utama")
	let tytyd = "TESCUK"
	//if(!kecil) return m.reply("Masukkan Teks Title Order!")
  try{
//let q = m.quoted ? m.quoted : m
//let mime = (q.msg || q).mimetype || ''
   // if (!/image\/(jpe?g|png)/.test(mime)) return m.reply("Foto Aja Om :)")
    //let img = await q.download()
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
			"title": "Aca Cans", //Kasih namalu 
			"description": "SELF BOT", 
			"currencyCode": "USD",
			"priceAmount1000": "999000",
			"retailerId": "Ghost",
			"productImageCount": 10
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
handler.customPrefix = /^(eror|err|error)$/i
handler.command = new RegExp

module.exports = handler