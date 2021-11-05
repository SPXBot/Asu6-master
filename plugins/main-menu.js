;let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const defaultMenu = {
  before: `
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── %me ──➤ ↶↷*
╰•͙✩̣̣̣̣ Hai, %name!
⁙┃〲 Tersisa *%limit Limit*
⁙┃〲 Role *%role*
⁙┃〲 Level *%level (%exp / %maxexp)* [%xp4levelup]
⁙┃〲 %totalexp XP secara Total
⁙┃〲 
⁙┃〲 Tanggal: *%week %weton, %date*
⁙┃〲 Tanggal Islam: *%dateIslamic*
⁙┃〲 Waktu: *%time*
⁙┃〲
⁙┃〲 Uptime: *%uptime (%muptime)*
⁙┃〲 Database: %rtotalreg dari %totalreg
⁙┃〲 Anu?:
⁙┃〲 %github
⁙╰•°°°🕊°°°°°🕊°°°°°°🕊°°°°°°°°
%readmore`.trimStart(),
  header: '╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮\n┃╭┈─────────────⩵꙰ཱི࿐\n┃╰── %category ──➤ ↶↷\n╰•͙✩̣̣̣̣ ',
  body: '⁙┃〲 %cmd %islimit %isPremium',
  footer: '⁙╰•°°°🕊°°°°°🕊°°°°°°🕊°°°°°°°°\n',
  after: `
*%npmname@^%version*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'rpg', 'jadian', 'xp', 'stiker', 'kerangajaib', 'quotes', 'admin', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'jadibot', 'info', 'dewasa', 'update', 'anu', 'videomaker', 'tanpakategori', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'Utama',
    'game': 'Game',
    'rpg': 'Rpg',
    'jadian': 'Jadian',
    'xp': 'Exp & Limit',
    'sticker': 'Stiker',
    'kerang': 'Kerang Ajaib',
    'quotes': 'Quotes',
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': 'Grup',
    'premium': 'Premium',
    'internet': 'Internet',
    'anonymous': 'Anonymous Chat',
    'nulis': 'MagerNulis & Logo',
    'downloader': 'Downloader',
    'tools': 'Tools',
    'fun': 'Fun',
    'database': 'Database',
    'vote': 'Voting',
    'absen': 'Absen',
    'quran': 'Al Qur\'an',
    'audio': 'Pengubah Suara',
    'jadibot': 'Jadi Bot',
    'info': 'Info',
    'dewasa': 'Dewasa',
    'anu': 'Anu',
    'videomaker': 'Videomaker',
    'update': 'Update',
    '': 'Tanpa Kategori',
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Rpg'
  }
  if (teks == 'jadian') tags = {
    'jadian': 'Jadian'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`
  }
  if (teks == 'grup') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al Qur\'an'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'dewasa') tags = {
    'dewasa': 'Dewasa'
  }
  if (teks == 'update') tags = {
    'update': 'Update'
  }
  if (teks == 'anu') tags = {
    'anu': 'Anu'
  }
  if (teks == 'videomaker') tags = {
    'videomaker': 'Videomaker'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'Tanpa Kategori'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
        "listMessage": {
          "title": `${ucapan()}, ${name}`.trim(),
          "description": "Terimakasih Atas Kunjungan Anda\n\nJangan lupa jaga kesehatan ya...\n\nTetap patuhi prokes dan ikuti vaksinasi\nMari mendukung program pemerintah dalam menanggulangi COVID-19 di Indonesia🇲🇨\n\nAda keperluan dengan owner bot?\nketik *#report* pesan kamu",
          "buttonText": "Klik Disini",
          "listType": "SINGLE_SELECT",
          "sections": [
            {
              "rows": [
                {
                  "title": `Semua Perintah`,
                  "description": "",
                  "rowId": ".? all"
                }, {
                  "title": "Game",
                  "description": "",
                  "rowId": ".? game"

                }, {
                  "title": "Rpg",
                  "description": "Belum Di Tambahin, Sabar",
                  "rowId": ".? rpg"
                }, {
                  "title": "Jadian",
                  "description": "",
                  "rowId": ".? jadian"
                }, {
                  "title": "XP",
                  "description": "",
                  "rowId": ".? xp"

                }, {
                  "title": "Stiker",
                  "description": "",
                  "rowId": ".? stiker"
                }, {
                  "title": "Kerang Ajaib",
                  "description": "",
                  "rowId": ".? kerangajaib"
                }, {
                  "title": "Quotes",
                  "description": "",
                  "rowId": ".? quotes"
                }, {
                  "title": "Admin",
                  "description": "",
                  "rowId": ".? admin"
                }, {
                  "title": "Grup",
                  "description": "",
                  "rowId": ".? grup"
                }, {
                  "title": "Premium",
                  "description": "",
                  "rowId": ".? premium"
                }, {
                  "title": "Internet",
                  "description": "",
                  "rowId": ".? internet"
                }, {
                  "title": "Anonymous",
                  "description": "",
                  "rowId": ".? anonymous"
                }, {
                  "title": "Nulis & Logo",
                  "description": "",
                  "rowId": ".? nulis"
                }, {
                  "title": "Downloader",
                  "description": "",
                  "rowId": ".? downloader"
                }, {
                  "title": "Tools",
                  "description": "",
                  "rowId": ".? tools"
                }, {
                  "title": "Fun",
                  "description": "",
                  "rowId": ".? fun"
                }, {
                  "title": "Database",
                  "description": "",
                  "rowId": ".? database"
                }, {
                  "title": "Vote & Absen",
                  "description": "",
                  "rowId": ".? vote"
                }, {
                  "title": "Al-Qur\'an",
                  "description": "",
                  "rowId": ".? quran"
                }, {
                  "title": "Pengubah Suara",
                  "description": "",
                  "rowId": ".? audio"
                }, {
                  "title": "Jadi Bot",
                  "description": "",
                  "rowId": ".? jadibot"
                }, {
                  "title": "Info",
                  "description": "",
                  "rowId": ".? info"
                }, {
                  "title": "Dewasa",
                  "description": "",
                  "rowId": ".? dewasa"
                }, {
                  "title": "Update",
                  "description": "",
                  "rowId": '.? update'
                }, {
                  "title": "Anu",
                  "description": "Ntah Apa Buka Aja",
                  "rowId": ".? anu"
                }, {
                  "title": "Videomaker",
                  "description": "",
                  "rowId": ".? videomaker"
                }, {
                  "title": "Tanpa Kategori",
                  "description": "",
                  "rowId": ".? tanpakategori"
                }, {
                  "title": "Owner",
                  "description": "",
                  "rowId": ".? owner"
                }
              ]
            }
          ], "contextInfo": {
            "stanzaId": m.key.id,
            "remoteJid": "status@broadcast",
            "participant": '628881212888@s.whatsapp.net',
            "quotedMessage": { conversation: 'List Menu Bot' }
          }
        }
      }, {}), { waitForAck: true })
    }
    // gunakan ini jika kamu menggunakan whatsapp bisnis
    //   throw `
    // ┌〔 DAFTAR MENU 〕
    // ├ ${_p + command} all
    // ├ ${_p + command} game
    // ├ ${_p + command} xp
    // ├ ${_p + command} stiker
    // ├ ${_p + command} kerang
    // ├ ${_p + command} quotes
    // ├ ${_p + command} admin
    // ├ ${_p + command} group
    // ├ ${_p + command} premium
    // ├ ${_p + command} internet
    // ├ ${_p + command} anonymous
    // ├ ${_p + command} nulis
    // ├ ${_p + command} downloader
    // ├ ${_p + command} tools
    // ├ ${_p + command} fun
    // ├ ${_p + command} database
    // ├ ${_p + command} vote
    // ├ ${_p + command} quran
    // ├ ${_p + command} audio
    // ├ ${_p + command} jadibot
    // ├ ${_p + command} info
    // ├ ${_p + command} tanpa kategori
    // ├ ${_p + command} owner
    // └────  
    //     `.trim()
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '✨' : '')
                .replace(/%isPremium/g, menu.premium ? '🐣' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.send2ButtonLoc(m.chat, await (await fetch(yamete)).buffer(), text.trim(), 'Thanks to:\n•Allah swt\n•Irwan(Pelunis Ulang)\n•Nurutomo\n•Ariffb\n•Aca Mirabel\n•Penyedia Layanan API\n•Orang-orang yang Berdonasi\n•Wifi Tetangga\n\nJika menemukan bug atau request fitur dan join bot harap chat owner dengan cara:\n*-report* [pesan].\n\n(Bot join group NOT FREE!)\nPrice:\n10K untuk 1 bulan\nUntuk 1 group\n\nNb:bot ini masih terus dikembangkan.', 'Rules', '.rules', 'Sewa Bot', '.sewa', m)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari"
  if (time >= 4) {
    res = "Selamat pagi"
  }
  if (time > 10) {
    res = "Selamat siang"
  }
  if (time >= 15) {
    res = "Selamat sore"
  }
  if (time >= 18) {
    res = "Selamat malam"
  }
  return res
}
