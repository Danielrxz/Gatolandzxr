import moment from 'moment-timezone'

const tagsMap = {
  main: '💗 Información',
  jadibot: '🌟 Sub Bot',
  downloader: '📥 Descargas',
  game: '🎮 Juegos',
  gacha: '🎲 Gacha RPG',
  rg: '🔰 Registro',
  group: '👥 Grupos',
  nable: '🎛️ Funciones',
  nsfw: '🔞 NSFW +18',
  buscadores: '🔎 Buscadores',
  sticker: '🌈 Stickers',
  econ: '💰 Economía',
  convertidor: '🌀 Convertidores',
  logo: '🎀 Logos Kawaii',
  tools: '🧰 Herramientas',
  randow: '🎁 Random',
  efec: '🎶 Efectos de Audio',
  owner: '👑 Creador'
}

let handler = async (m, { conn }) => {
  const userId = m.mentionedJid?.[0] || m.sender
  const user = global.db.data.users[userId] || {}
  const name = await conn.getName(userId)
  const botname = conn.user?.name || 'NinoBot 🌸'
  const fecha = moment.tz('America/Lima').format('DD/MM/YYYY')
  const hora = moment.tz('America/Lima').format('HH:mm:ss')
  const uptime = clockString(process.uptime() * 1000)
  const totalreg = Object.keys(global.db.data.users).length
  const limit = user.limite || 0

  const botTag = conn.user?.jid?.split('@')[0] || 'bot'
  const isBotOfc = conn.user?.id === global.conn?.user?.id
  const botStatus = isBotOfc
    ? `💫 *Bot Oficial:* wa.me/${botTag}`
    : `🔗 *Sub Bot de:* wa.me/${global.conn?.user?.jid?.split('@')[0]}`

  const plugins = Object.values(global.plugins).filter(p => !p.disabled)
  const grouped = {}

  for (const plugin of plugins) {
    const cmds = Array.isArray(plugin.command) ? plugin.command : [plugin.command]
    const tagList = Array.isArray(plugin.tags) ? plugin.tags : []
    const tag = tagList[0] || '__otros__'
    if (!grouped[tag]) grouped[tag] = []
    for (const cmd of cmds) {
      if (typeof cmd === 'string') grouped[tag].push(`🌸 .${cmd}`)
    }
  }

  let text = `╭━〔 *🧾 LISTA DE COMANDOS* 〕━⬣\n`
for (const tag of Object.keys(grouped)) {
  let section = ''
  switch (tag) {
    case 'main':
      section = '⚙️ SERBOT'
      break
    case 'downloader':
      section = '📥 DESCARGAS'
      break
    case 'econ':
      section = '💰 ECONOMÍA'
      break
    case 'owner':
      section = '👑 OWNER'
      break
    case 'tools':
      section = '🧰 TOOLS'
      break
    case 'gacha':
      section = '🎮 GACHA'
      break
    default:
      section = '📚 Otros'
  }
  text += `╭─〔 ${section} 〕\n`
  for (const cmd of grouped[tag]) {
    text += `│ • ${cmd}\n`
  }
  text += '╰───────────────\n'
}
text += `〽️ *✦ 𝐆𝐚𝐭𝐨𝐋𝐚𝐧𝐝 ✦ MD* — El mejor bot para tu grupo ✨`
╰───────────────╯\n`

  for (const tag of Object.keys(grouped)) {
    const section = tagsMap[tag] || '📚 Otros'
    text += `\n╭─🎀 *${section}* 🎀─╮\n`
    for (const cmd of grouped[tag]) {
      text += `💫 ${cmd}\n`
    }
    text += '╰───────────────☁️\n'
  }

  const channelRD = {
    id: '1234567890@newsletter',
    name: 'Gatolamd☁️'
  }

  await conn.sendMessage(m.chat, {
    video: { url: 'https://cdn.russellxz.click/48178c53.mp4' },
    caption: text,
    contextInfo: {
      mentionedJid: [m.sender, userId],
      isForwarded: false,
      forwardedNewsletterMessageInfo: {
        newsletterJid: channelRD.id,
        newsletterName: channelRD.name,
        serverMessageId: -1
      },
      forwardingScore: 999,
      externalAdReply: {
        title: botname,
        body: textbot,
        thumbnailUrl: banner,
        sourceUrl: redes,
        mediaType: 1,
        showAdAttribution: false,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']
export default handler

function clockString(ms) {
  let h = Math.floor(ms / (1000 * 60 * 60))
  let m = Math.floor((ms / (1000 * 60)) % 60)
  let s = Math.floor((ms / 1000) % 60)
  return `${h}h ${m}m ${s}s`
}