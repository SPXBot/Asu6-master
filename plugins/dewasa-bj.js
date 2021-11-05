let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/blowjob?apikey=8c5e652994c697c0`
  conn.sendFile(m.chat, res, 'blowjob.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['blowjob'].map(v => v + ' ')
handler.tags = ['dewasa', 'update']

handler.command = /^(blowjob)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler