let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {

    if (isBlocked) return
    if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return
    let setting = db.data.settings[this.user.jid]
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]

    // ketika ditag
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.send2Button(m.chat,
                isBanned ? 'Aku ga on' : banned ? 'kamu dibanned' : 'ape?',
                '© xyz',
                isBanned ? 'Unban' : banned ? 'Pemilik Bot' : 'Menu',
                isBanned ? '.unban' : banned ? '.owner' : '.?',
                m.isGroup ? 'Ban' : isBanned ? 'Unban' : 'Sewa Bot',
                m.isGroup ? '.ban' : isBanned ? '.unban' : '.sewa', m)
        }
    } catch (e) {
        return
    }

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        this.sendButton(m.chat, `╭━━•✵ ⃟  ⃟  ⃟✵
┃
┃ *SEWA BOT : ↷↷*
┃
┃ *⸙ Gratis 12 jam percobaan untuk grup! Agar bot tetap berada di grup anda dengan waktu lebih lama silahkan sewa bot dengan harga dibawah ini
┃ *⸙ ુོ➪ Info untuk Gabung premium :
┃ *〲 Rp. 5k = 1 minggu Premium
┃ *〲 Rp. 7k = 2 minggu Premium
┃ *〲 Rp. 10k = 1 bulan Premium
┃ *〲 Rp. 20k = 2 bulan Premium
┃ *〲 Rp. 30k = 3 bulan Premium
┃ *〲 Rp. 40k = 4 bulan Premium
┃ *〲 Rp. 50k = VIP PERMANEN
┃
╰•°°°🕊°°°°°🕊°°°°°°🕊°°°°°°°°
`.trim(), '© XsvsH', 'Sewa', '.sewa', m)
    }

    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        conn.send2Button(m.chat, `وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\nWa\'alaikumussalam Warahmatullahi Wabarakatuh`.trim(), '© XyZ666x', 'Menu', '.?', 'Ban', '#ban', m)
    }
    // trims
    let reg2 = /(makasi|trims|thank|terimakasih|maaciw|maci|maturs|suwun|snaky)/i
    let isThanks =  reg2.exec(m.text)
    if (isThanks && !m.fromMe) {
        m.reply(`You're Welcome, Semoga Bermanfaat😊`)
    }

    // Pagi
    let reg4 = /(pagi|siang|sore|malam|morning|night|midnight|aftern|noon|morn)/i
    let isKontol =  reg4.exec(m.text)
    if (isKontol && !m.fromMe) {
        m.reply(`*Y*`)
    }
   
    // backup db
    if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            this.sendFile(global.owner[0] + '@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json' })
            setting.backupDB = new Date() * 1
        }
    }

    // update status
    if (new Date() * 1 - setting.status > 1000) {
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        await this.setStatus(`Aktif selama ${uptime} | Mode: ${global.opts['self'] ? 'Private' : setting.groupOnly ? 'Hanya Grup' : 'Publik'} | This Bot By @irwan_x_yans`).catch(_ => _)
        setting.status = new Date() * 1
    }

}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}