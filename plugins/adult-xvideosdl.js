import db from '../lib/database.js'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[βππππβ] π»πΎπ π²πΎπΌπ°π½π³πΎπ +π·πΎ π΄πππ°π½ π³π΄ππ°π²ππΈππ°π³πΎπ π΄π½ π΄πππ΄ πΆπππΏπΎ, ππΈ π΄π π°π³πΌπΈπ½ π π³π΄ππ΄π° π°π²ππΈππ°ππ»πΎπ πππ΄ π΄π» π²πΎπΌπ°π½π³πΎ #enable modohorny*'
if (!args[0]) throw `*[βππππβ] πΈπ½πΆππ΄ππ΄ ππ½ π΄π½π»π°π²π΄ ππ°π»πΈπ³πΎ π³π΄ πππΈπ³π΄πΎπ, π΄πΉπ΄πΌπΏπ»πΎ: ${usedPrefix + command} https://www.xvideos.com/video70389849/pequena_zorra_follada_duro*`
try {
await conn.reply(m.chat, '[β] πΈπ π£ππππ ππ π‘π π πππππ ππππππ πππ, ππ ππππ π’π ππππππ‘π ππ ππ ππ’π ππ  πππ£ππππ..\n\nοΉ£ α΄Κ α΄Ιͺα΄α΄α΄α΄ α΄α΄ α΄Ι΄α΄ Ιͺα΄ α΄α΄α΄α΄Ι΄α΄α΄ α΄α΄Κ α΄α΄sα΄ Κ α΄α΄Κα΄α΄Ιͺα΄ΜΙ΄ α΄α΄Κ α΄ Ιͺα΄α΄α΄', m)
let res = await fetch(API('https://zenzapis.xyz', '/downloader/xvideos', { apikey: 'B2CB95861FBF', url: args[0] }))
let json = await res.json()
if (json.result?.message) throw json.result.message
let teks = `*β­ ππππππ:* ${json.result.title}`
conn.sendMessage(m.chat, { video: { url: json.result.files.high }, caption: teks }, { quoted: m })
} catch (e) {
m.reply('*[βππππβ] π΄πππΎπ, πΏπΎπ π΅π°ππΎπ πππ΄π»ππ° π° πΈπ½ππ΄π½ππ°ππ»πΎ*\n\n*- π²πΎπππΎπ±πΎππ΄ πππ΄ π΄π» π΄π½π»π°π²π΄ ππ΄π° ππΈπΌπΈπ»π°π π°:*\n*β https://www.xvideos.com/video70389849/pequena_zorra_follada_duro*')
console.log(e)
}}
handler.command = /^(xvideosdl)$/i
handler.limit = 2
export default handler
