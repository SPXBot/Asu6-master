let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'JOIN')).buffer(), `
╭━━•›ꪶ ۪۪⸙ ━ ━ ━ ━ ꪶ ۪۪⸙‹•━━╮ 
┃╭┈─────────────⩵꙰ཱི࿐ 
┃╰──*LIST JOIN*──➤ ↶↷* 
╰•͙✩̣̣
⁙┃ ુོ #joinfree (Masukin Bot Ke Grup Gratis)
⁙┃ ુོ #join1 (+1 Minggu)
⁙┃ ુོ #join2 (+2 Minggu)
⁙┃ ુོ #join30 (+30 Hari)
⁙┃ ુོ #join60 (+60 Hari)
⁙┃ ુོ #join90 (+90 Hari)
⁙┃ ુོ #join120 (+120 Hari)
⁙┃ ુོ #joinpermanent (Masukin Bot Ke Grup Permanent)>OWNER
⁙┃ 
⁙╰•°°°🕊°°°°°🕊°°°°°°🕊°°°°°°°°
`.trim(), '© XsvsH', 'Cara Menggunakan?', '#joingratis', m)
handler.tags = ['', 'update']
handler.command = /^(join)$/i
handler.help = ['join']


module.exports = handler