let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants }) => {
let zero = fs.readFileSync('./audio/mwah.mp3')
conn.sendMessage(m.chat, zero, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
}

handler.customPrefix = /^(sun ?sek|cium|mwah|mmwah)?$/i
handler.command = new RegExp

module.exports = handler