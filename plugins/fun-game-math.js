global.math = global.math ? global.math : {}
let handler  = async (m, { conn, args, usedPrefix, command }) => {
let mat =`ββ±πππππππΌπΎππΜπ | πππππππΌππππβ±β\n\nβ¨ ππππΏπ πππΌπ πππ π½ππππππ π πππΎπππ½ππ ππΌ πΏππππΎππππΌπΏ\nβ¨ 

πππππ πΏπ πΏππππΎππππΌπΏ | πΏπππππΎππππ 
${Object.keys(modes).join('  |  ')}

πππππππ | πππΌππππ
${usedPrefix + command} noob
${usedPrefix + command} impossible2
`.trim()
if (args.length < 1) return conn.sendHydrated(m.chat, wm, mat, null, null, null, null, null, [
['πππππ ππππ πππ', `${usedPrefix + command} easy`], 
['πππππππ πππππππππ', `${usedPrefix + command} hard`], 
['πππππππ πππππππ ', `${usedPrefix + command} extreme`]], m) 
  
let mode = args[0].toLowerCase()
if (!(mode in modes)) return conn.sendHydrated(m.chat, wm, mat, null, null, null, null, null, [
['πππππ ππππ πππ', `${usedPrefix + command} easy`], 
['πππππππ πππππππππ', `${usedPrefix + command} hard`], 
['πππππππ πππππππ ', `${usedPrefix + command} extreme`]], m) 
  
let id = m.chat
if (id in global.math) return conn.reply(m.chat, `${ag} ππΌπ ππππππππΌπ πππ πππππππΏππ ππ ππ πΎππΌπ!!\n\nπππππ πΌππ πππππππππ πππππππ πΌππππππππ ππ πππ πΎππΌπ!!`, global.math[id][0])
//let ii = global.db.data.users[m.sender].limit += 10 math.dia
let math = genMath(mode)
global.math[id] = [
await conn.reply(m.chat, `
βββγπΦΌ αΉππ―πππππ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γβ
ββπΎπͺππ‘ ππ¨ π§ππ¨πͺπ‘π©πππ€ ππ *${math.str} = ?*
ββππππ’π₯π€ | πππ’π
ββπ§­ *${(math.time / 1000).toFixed(0)} ππππππππ*
ββπππ¨π₯π€π£ππ π ππ¨π©π π’ππ£π¨πππ π? πππ£π 
ββπ *${math.bonus} ππ*
βββββΧβΧβΧβΧβββ
`, m),
math, 4,
  
await conn.sendHydrated(m.chat, `β¬οΈβ¬οΈβ¬οΈβ¬οΈβ¬οΈβ¬οΈβ¬οΈβ¬οΈβ¬οΈβ¬οΈβ¬οΈ`, `πππππππΏπΌ πΌπ πππππΌππ πΏπ πΌππππ½πΌ πΎππ ππΌ πππππππππΌ\n\nπΌπππππ πππ πππππΌππ πΌπ½πππ ππ ππππ ππππ πΌπππππ`, null, md, 'πππππ_πππ_ππ', null, null, [ 
['ππππ', `${usedPrefix}top`],
['ππππΜ', `${usedPrefix}menu`]
], m), math, 4,
  
setTimeout(() => { 
if (global.math[id]) conn.sendButton(m.chat, `${ag}ππ πΌπΎπΌπ½π ππ ππππππ!!\nππΌ πππππππππΌ ππ *${math.result}*\n\nππππ ππ ππ!!\nπππ πΌπππππ ππ *${math.result}*`, wm, null, [['ππππππππ ππ πππππ', `${usedPrefix + command} ${math.mode}`], ['π?ππππ', `/juegosdelgrupo`]], global.math[id][0])
delete global.math[id]
}, math.time)
]}
handler.help = ['math <mode>']
handler.tags = ['game']
handler.command = /^math|mates|matemΓ‘ticas/i
handler.limit = 1
export default handler

let modes = {
noob: [-3, 3,-3, 3, '+-', 15000, 30], 
easy: [-10, 10, -10, 10, '*/+-', 20000, 50],
medium: [-40, 40, -20, 20, '*/+-', 40000, 200],
hard: [-100, 100, -70, 70, '*/+-', 60000, 500],
extreme: [-999999, 999999, -999999, 999999, '*/', 25000, 2500],
impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 20000, 5500],
impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 15000, 8500]
} 

let operators = {
'+': '+',
'-': '-',
'*': 'Γ',
'/': 'Γ·'
}

// XP
function genMath(mode) {
let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
let a = randomInt(a1, a2)
let b = randomInt(b1, b2)
let op = pickRandom([...ops])
let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
if (op == '/') [a, result] = [result, a]
return {
str: `${a} ${operators[op]} ${b}`,
mode,
time,
bonus,
result
}}

function randomInt(from, to) {
if (from > to) [from, to] = [to, from]
from = Math.floor(from)
to = Math.floor(to)
return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
