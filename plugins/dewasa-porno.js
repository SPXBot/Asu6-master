let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async (m, {
    conn,
    text
}) => {
    let str = `
TOBAT BANG, NANTI DOSA LOH
`.trim()
    await m.reply('Searching...')
    axios.get('https://freerestapi.herokuapp.com/api/v1/randomp')
        .then((res) => {
            imageToBase64(res.data.url)
                .then(
                    (ress) => {
                        let buf = Buffer.from(ress, 'base64')
                        conn.sendFile(m.chat, buf, 'porno.jpg', str, m)
                    })
        })
}
handler.help = ['porno (-5 Limit)']
handler.tags = ['dewasa', 'update']
handler.command = /^(porno)$/i

handler.private = true
handler.limit = 5

module.exports = handler
