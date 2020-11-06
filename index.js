const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
  client.user.setActivity(` !help | Serving ${client.guilds.cache.size} servers`, { type: 'LISTENING' });
});

client.on("message", async message => {
	if (message.content === '!ping') {
		message.channel.send('Pong.');
	}
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  const guild = member.guild;
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'Put your channel Name Here');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Hey ${member}, welcome to **${guild.name}!**`);
  member.send(`Have a good time here in **${guild.name}**! Please make sure to read the rules before sending in #rules. If you have a problem with this server, Dm @ModMail#5460 for help. `);
});


// Create an event listener for removed guild members
client.on('guildMemberRemove', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'Put your channel Name Here');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`${member} just left the server  :c`);
});


/*Made By K.K Designs 🙂*/
client.login('your-token-goes-here');
