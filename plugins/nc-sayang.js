let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants }) => {
let zero = fs.readFileSync('./audio/halosyg.mp3')
conn.sendMessage(m.chat, zero, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
}

handler.customPrefix = /^(sayang|ayang|bebep|dear|beb|bebeb|saayang|syg|syng|aynk|syk|synk|synx|ayanx|ayank)$/i
handler.command = new RegExp

module.exports = handler
