import yts from 'yt-search';

var handler = async (m, { text, conn, args, command, usedPrefix }) => {

  if (!text) {
    return conn.reply(m.chat, `☁️⚡ escribe algo para buscar en *YouTube* 💬`, m);
  }

  await conn.reply(m.chat, '⏳ *Espera un momento estoy buscando*...', m);

  let results = await yts(text);
  let tes = results.all;

  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video':
        return `╭──────⊹꙳✧༚
📃 *Título:* ${v.title}
🗡️ *Canal:* ${v.author.name}
🕓 *Duración:* ${v.timestamp}
📆 *Fecha:* ${v.ago}
👀 *Vistas:* ${v.views}
🔗 *Link:* ${v.url}
╰───────────────✦`;
    }
  }).filter(v => v).join('\n\n');

  await conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', `🚀 *Aqui tienes tus resultados:* “${text}”\n\n${teks}`, fkontak, m);
};

handler.help = ['ytsearch'];
handler.tags = ['buscador'];
handler.command = ['ytbuscar', 'ytsearch', 'yts'];
handler.register = true;
handler.coin = 1;

export default handler;