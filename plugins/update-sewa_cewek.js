const { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')
let handler = async (m, { conn }) => {
  sumberImg = fs.readFileSync(`./src/logo.jpg`)
  image = (await conn.prepareMessage('0@s.whatsapp.net', sumberImg, MessageType.image, { thumbnail: Buffer.alloc(0) })).message.imageMessage
  res = await conn.prepareMessageFromContent(m.chat, {
    "productMessage": {
      "product": {
        "productImage": image,
        "productId": "4639411602805436",
        "title": "SEWA BOT",
        "description": `Apa saja keuntungan premium?\n〲 ✅Dapatkan fitur khusus premium.\n〲 ✅Masukkan bot ke group anda.\n〲 ✅Limit UNLIMITED (Tidak Terbatas)\n\nAyo gabung bersama mereka yang sudah Premium dan mendapatkan banyak keuntungan dengan akses semua fitur bot.\n\nPembayaran:\nSaweria: https://saweria.co/irwanxyans (+5.000)\nDana: 08882611841\nOVO: 08882611841\n\nSyarat dan Ketentuan\n1. Bot akan keluar jika sudah waktu nya keluar\n2. Jangan di kick\n3. Mematuhi syarat dan ketentuan bot pada #rules\n4. Di larang mengirimkan sesuatu yang mengganggu, contoh: virtex, berbagai macam bug.\n5. Di larang spam dalam penggunaan\n\nSelengkapnya Di Bawah Ini`,
        "retailerId": "XyZ666xx",
        "descriptionCount": "999999999",
        "productImageCount": "1",
      },
      "businessOwnerJid": "628882611841@s.whatsapp.net",
      "contextInfo": {
        "forwardingScore": 9999,
        "isForwarded": true
      }
    }
  },
    { quoted: m })
  conn.relayWAMessage(res)
}
handler.command = /^(sewa1)$/
handler.help = ['sewa1']
handler.tags = ['main', 'update', 'info']

module.exports = handler
