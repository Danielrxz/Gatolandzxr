import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'

//*─ׄ─ׅ─ׄ─⭒ CONFIG PRINCIPAL ─ׄ─ׅ─ׄ─⭒─*

// BETA: Si quieres evitar escribir el número que será bot en la consola
// Aplica para opción 2 (ser bot con código de texto de 8 dígitos)
global.botNumber = '' // Ejemplo: 573218138672

global.owner = [
  // <-- Número @s.whatsapp.net -->
  ['526242262017', 'Danielrxz', true],
  // <-- Número @lid -->
  ['184486729879638', 'Danielrxz', true],
  ['', '', true],
  ['', '', true]
]

global.mods = []
global.suittag = ['526242262017']
global.prems = []

global.libreria = 'Baileys'
global.baileys = 'V 6.7.17'
global.vs = '2.2.5'
global.nameqr = 'Gatoland'
global.namebot = '☁️◟Gato bot◞⚡'
global.sessions = 'sessions' // 🔥 corregido (minúsculas)
global.jadi = 'JadiBots'
global.yukiJadibts = true

global.packname = '⪛✰ GatolandV3✰⪜'
global.botname = 'Gatoland'
global.wm = '☁️◟Gato bot◞⚡'
global.author = '𝐌𝐚𝐝𝐞 𝐖𝐢𝐭𝐡 𝐁𝐲 Danielrxz'
global.dev = '© Powered by Danielrxz'
global.textbot = 'Gato, 𝐌𝐚𝐝𝐞 𝐖𝐢𝐭𝐡 𝐁𝐲 MD Gatolandrzx'
global.etiqueta = 'MD Gatolandrxz'

global.moneda = 'Gatocoins'
global.welcom1 = '❍ Edita Con El Comando setwelcome'
global.welcom2 = '❍ Edita Con El Comando setbye'
global.banner = 'https://files.catbox.moe/bvew26.jpg'
global.avatar = 'https://files.catbox.moe/syn9ao.jpg'

// Links
global.gp1 = 'https://chat.whatsapp.com/LYLiORNWzHkIsiecvCCdgK?mode=ac_t'
global.comunidad1 = 'https://chat.whatsapp.com/HeKcGyv2idq0tMFRFGN6qL?mode=ac_t'
global.channel = 'https://whatsapp.com/channel/0029Vaz6RTR0LKZIKwudX32x'
global.channel2 = 'https://whatsapp.com/channel/0029VapUpsT9mrGcypZy141s'
global.md = 'https://github.com/Angelithoxz/Nino-Nakano'
global.correo = 'angelithoxyz@gmail.com'

// Catálogo (con validación para no crashear si no existe)
try {
  global.catalogo = fs.readFileSync('./src/catalogo.jpg')
} catch {
  global.catalogo = null
}
global.estilo = {
  key: {
    fromMe: false,
    participant: `0@s.whatsapp.net`,
    ...(false ? { remoteJid: '5219992095479-1625305606@g.us' } : {})
  },
  message: {
    orderMessage: {
      itemCount: -999999,
      status: 1,
      surface: 1,
      message: global.packname,
      orderTitle: 'Bang',
      thumbnail: global.catalogo || undefined,
      sellerJid: '0@s.whatsapp.net'
    }
  }
}

global.ch = {
  ch1: '120363374826926142@newsletter'
}
global.multiplier = 60

// Librerías globales
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment

//*─ׄ─ׅ─ׄ─⭒ AUTO RELOAD ─ׄ─ׅ─ׄ─⭒─*
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})