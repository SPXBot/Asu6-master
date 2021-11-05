let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'FREE')).buffer(), `
Cara Memasukkan Bot Ke Grup.
Pake Command #joinfree <link>
Contoh>

#joinfree https://chat.whatsapp.com/L508viIjjPwHpYEqgTxqj6

*JANGAN LUPA BACA PERATURAN BOT NYA*
`.trim(), '© XsvsH', 'Peraturan', '#rules', m)
handler.help = ['joingratis']
handler.command = /^joingratis$/i

module.exports = handler