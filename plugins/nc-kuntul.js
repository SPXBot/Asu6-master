let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants }) => {
let zero = fs.readFileSync('./audio/kuntul.m4a')
conn.sendMessage(m.chat, zero, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
}

handler.customPrefix = /^(kuntul|kuntull|kuntulll|kkuunnttuull|kuntul)$/i 
handler.command = new RegExp

module.exports = handler