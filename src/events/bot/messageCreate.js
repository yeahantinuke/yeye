const client = require('../../index'),
  st = require('../../core/settings'),
  db = require('../../core/db');

client.on('messageCreate', async (message) => {
  const prefix = st.bot.info.prefix;
  if (message.author.bot || !message.guild || !message.content.toLowerCase().startsWith(prefix)) return;

  const [cmd, ...args] = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);

  const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

  if (!command) {
    message.reply({ content: `:warning: this command is invalid, try ${prefix}help` }).then((msg) => {
      setTimeout(() => { msg.delete() }, 3000)
    })
  }
  await command.run(client, message, args);
});