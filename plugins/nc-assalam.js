let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

    conn.send2ButtonLoc(m.chat, await(await fetch("https://telegra.ph/file/f5a51e97315d8ab8413e9.jpg")).buffer(), `وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\nWa\'alaikumussalam Warahmatullahi Wabarakatuh`.trim(), '© XyZ666x', 'Menu', '.?', 'Ban', '#ban', m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
handler.command = new RegExp

module.exports = handler