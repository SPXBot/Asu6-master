let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*SLOT GAME*

${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])} | ${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])} | ${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])}
${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])} | ${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])} | ${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])} <===
${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])} | ${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])} | ${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])}

Coba Lagi!
`.trim(), m)
    global.db.data.users[m.sender].exp += 100
}
handler.help = ['slot']
handler.tags = ['game', 'update']
handler.command = /^slot/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
