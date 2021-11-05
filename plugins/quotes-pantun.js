let fetch = require('node-fetch')

let handler = async(m, { conn, usedPrefix, command }) => {
  fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/pantun.txt').then(res => res.text()).then(body => {
    let splitbijak = body.split('\n')
    let randombijak = splitbijak[Math.floor(Math.random() * splitbijak.length)]
    randombijak = randombijak.replace('aruga-line','\n')
    randombijak = randombijak.replace('aruga-line','\n')
    randombijak = randombijak.replace('aruga-line','\n')
    randombijak = randombijak.replace('aruga-line','\n')
   await conn.sendbutton(m.chat, randombijak, '© XsvsH', 'Lanjut', `${usedPrefix + command}`, { quoted: m })
  }).catch(() => {
    m.reply(error)
  })
}
handler.help = ['pantun']
handler.tags = ['quotes', 'update']
handler.command = /^(pantun)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
