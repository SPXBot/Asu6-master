let fetch = require("node-fetch");

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text)
    throw `
*${usedPrefix}${command} <nama hewan>*
contoh:
*${usedPrefix}${command} <dog>*\n
╭━━•✵ ⃟  ⃟  ⃟✵•
┃
┃ *OPSI : ↷↷*
┃ *〲 dog
┃ *〲 cat
┃ *〲 panda
┃ *〲 fox
┃ *〲 red_panda
┃ *〲 koala
┃ *〲 birb
┃ *〲 raccoon
┃ *〲 kangaroo
┃ *─★‧ﾟ
╰━━━━━━━━⸙
`.trim();
  let res = await fetch(
    API("https://some-random-api.ml", "/animal/" + text, {})
  );
  if (!res.ok) throw `${res.status} ${res.statusText}`;
  let json = await res.json();
  if (json.image) await conn.sendFile(m.chat, json.image, "", `${json.fact}\n\n~fatur`, m);
  else throw json;
};
handler.help = ["animal"].map((v) => v + " <hewan>");
handler.tags = ["internet", "update"];
handler.command = /^(animal|animalfact)$/i;

module.exports = handler;
