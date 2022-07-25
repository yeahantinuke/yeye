const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'about',
  aliases: ['botinfo', 'credits', 'abt', 'info'],
  run: async (client, message, args) => {

    const everyGuild = client.guilds.cache.map((guild) => guild.memberCount);
    const users = everyGuild.reduce((x, y) => x + y);

    
    const credits = new MessageEmbed()
      .setThumbnail(`${client.user.avatarURL({ dynamic: true })}`)
      .setColor('#2C2F33')
      .setDescription(`**__credits__**\n﹒shows some bot information\n﹒also tells about the developer\n\n>>> **bot info**\n﹒developer: antisocial#6666\n﹒database: MongoDB\n﹒language: node.js\n﹒library: discord.js\n﹒host: heroku\n\n**bot stats**\n﹒users: ${users}\n﹒servers: ${client.guilds.cache.size}\n﹒ping: ${client.ws.ping}ms\n\n**contributors**\n﹒jawms#0001`);

    message.channel.send({ embeds: [credits] });
  }
}
