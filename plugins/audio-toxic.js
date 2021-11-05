let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants }) => {
let zero = fs.readFileSync('./audio/IhOmKasar.ogg')
conn.sendMessage(m.chat, zero, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
}

handler.customPrefix = /anjink|anjeng|anjng|anjing|kontol|anjim|anjc|anjnc|anjg|ajg|anjk|bajingan|bangsat|bgst|memek|memeq|pepek|meki|titit|titid|tytyt|tytyd|peler|tetek|toket|goblok|blok|blog|idiot|ngentot|kentod|kektot|jembut|dajjal|jancok|jancuk|pantek|puki|pukimak|kimak|kampang|lonte|coli|colmek|pelacur|henceut|nigga|fuck|dick|bitch|tits|bastard|asshole/i
handler.command = new RegExp

module.exports = handler