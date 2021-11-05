let handler = async (m, { conn, text, usedPrefix, participants }) => {
    conn.vote = conn.vote ? conn.vote : {}
    let users = participants.map((u) => u.jid);
    let id = m.chat
    if (id in conn.vote) {
        await conn.sendButton(m.chat, '_Masih ada vote di chat ini!_', '© XsvsH', 'HAPUS VOTE', `${usedPrefix}hapusvote`, m)
        throw false
    }
    await conn.send2Button(m.chat, `Vote dimulai!
*${usedPrefix}upvote* - untuk ya
*${usedPrefix}devote* - untuk tidak
*${usedPrefix}cekvote* - untuk mengecek vote
*${usedPrefix}hapusvote* - untuk menghapus vote`, '© XsvsH', 'UPVOTE', `${usedPrefix}upvote`, 'DEVOTE', `${usedPrefix}devote`, m, { contextInfo: { mentionedJid: users }})
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['mulaivote [alasan]']
handler.tags = ['vote']
handler.command = /^(start|mulai)vote$/i
handler.limit = true
handler.group = true
handler.admin = true
handler.owner = true
module.exports = handler
