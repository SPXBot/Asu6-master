let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants }) => {
let zero = fs.readFileSync('./audio/nyanyi.mp3')
conn.sendMessage(m.chat, zero, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
}

handler.customPrefix = /^(bisa ?nyanyi|nyanyi|singing|sing|bisa ?nyanyica)$/i
handler.command = new RegExp

module.exports = handler