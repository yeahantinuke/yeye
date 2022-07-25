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
      .setDescription(`**__CREDITS__**\n﹒shows some bot information\n﹒also tells about the developer\n\n>>> **bot info**\n﹒Developer: antisocial#6666\n﹒Database: MongoDB\n﹒Language: Node.JS\n﹒Library: Discord.JS\n﹒Host: Heroku\n\n**bot stats**\n﹒users: ${users}\n﹒servers: ${client.guilds.cache.size}\n﹒ping: ${client.ws.ping}ms\n\n**contributors**\n﹒jawms#0001`);

    message.channel.send({ embeds: [credits] });
  }
}
