let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰──*🅡🅤🅛🅔🅢*──➤ ↶↷*
┃
╰•͙✩̣̣̣̣
⁙┃ XyZ666x BOT adalah Bot yg merupakan akronim dari kata Robot yang berarti sebuah sistem yang diprogram oleh komputer.
⁙┃ Sehingga respon atau balasan yang dilakukan oleh bot bukanlah dari Manusia.
⁙┃
⁙┃ *⸙ ુོ➪ Dengan menggunakan bot ini maka anda setuju dengan syarat dan kondisi sebagai berikut:
⁙┃
⁙┃ ુོ* Memberi jeda dari setiap perintah.
⁙┃ ુོ* Dilarang Memasukkan 2 Bot Dari XyZ666x, Ketahuan = Banned
⁙┃ ુོ* Dilarang Kick Bot Dari Grup
⁙┃ ુོ* Dilarang menelfon bot, atau kalian akan kena block otomatis.
⁙┃ ુོ* Dilarang keras melakukan spam. Ketahuan = auto banned.
⁙┃ ુོ* Bot tidak akan merespon curhatan kalian, kalau mau curhat sama #simi (teks)
⁙┃ ુོ* Bot tidak menyimpan gambar/media yang dikirimkan.
⁙┃ ુོ* Bot tidak menyimpan data pribadi anda di server kami.
⁙┃ ુོ* Bot tidak bertanggung jawab atas perintah anda kepada bot ini.
⁙┃ ુོ* Bot berjalan di server secara terpisah (Bukan dalam HP owner).
⁙┃ ુོ* Bot akan secara berkala dimonitoring oleh owner, jadi ada kemungkinan chat akan terbaca oleh owner.
⁙┃ ુོ* Bot akan dilakukan pembersihan setiap Hari/Seminggu atau saat dirasa diperlukan.
⁙┃ ુོ* Jika menemukan Bug/Error silahkan langsung lapor ke Owner.
⁙┃
⁙┃ *Jangan di baca doang, tapi di patuhi juga !*
⁙┃
⁙╰•°°°🕊°°°°°🕊°°°°°°🕊°°°°°°°°
`.trim()
  const button = {
        buttonText: 'Klik Di sini',
        description: kontol,
        sections:  [{title: "Silahkan di pilih gausah pilih yang gaada", rows: [
        {title: 'Menu Utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'Sewa Bot', description: "Untuk Berlangganan Ke XsvsH BOT", rowId:".sewa"},
        {title: 'Join', description: "Menampilkan List Join/Invit Bot Di Grup", rowId:".join"},
        {title: 'Cara Invit?', description: "Cara Memasukkan Bot Di GC", rowId:".joingratis"},
        {title: 'Nomor Owner', description: "CHAT *P* TIDAK DI BALAS", rowId:".owner"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(rules|rule)$/i
handler.help = ['rules']
module.exports = handler