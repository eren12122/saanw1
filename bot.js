const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Bot Aktif Bot ${client.user.tag} adı ile giriş yaptı!`);
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('Aleyküm Selam Kardeşim!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Börü Davet Link') {
    msg.reply('**Buyur Sunucunun Davet Linki Gelirsen Seviniriz :heart: ** ; \n https://discord.gg/uJ7brj');
  }
});

client.on('message', msg => {
  if (msg.content === 'Bay Bay') {
    msg.reply('Görüşürüz Kardeşim Gene Gel :fingers_crossed:  ');
  }
});

client.login('NTEwNDUzOTQwNDIxMzk0NDMy.DtXn-A.yxFO5i5gMnBEzTfTL9kdX7pRLFI');