import speed from 'performance-now'
import { exec } from 'child_process'

let handler = async (m, { conn }) => {
  let timestamp = speed()
  let sentMsg = await conn.reply(m.chat, '⌛🏓 *Calculando rapidez...*', m)
  let latency = speed() - timestamp

  exec('neofetch --stdout', (error, stdout, stderr) => {
    let child = stdout.toString('utf-8')
    let ssd = child.replace(/Memory:/, 'Ram:')

    let result = `🏓 ¡Pong! ⚡\n` +
                 `⚡*Velocidad:* ⏱️ ${latency.toFixed(4).split(".")[0]}ms\n\n` +
                 `💻 *Detalles del servidor:*\n\`\`\`${ssd}\`\`\`\n` +
                 `— BOT GATOLAND BY DANIELRXZ`

    conn.sendMessage(m.chat, { text: result, edit: sentMsg.key }, { quoted: m })
  })
}

handler.help = ['ping']
handler.tags = ['info']
handler.command = ['ping', 'p']

export default handler