const { Client, Intents } = require('discord.js');
const client = new Client({
	intents: [Intents.FLAGS.GUILDS_MESSAGES, Intents.FLAGS.GUILD_MEMBER_ADD, Intents.FLAGS.GUILD_MEMBER_REMOVE]
});

client.once('ready', () => {
	console.log('Ready!');
});

client.on('messageCreate', async (message) => {
	if (message.content === '!ping') {
		message.channel.send('Pong.');
	}
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
	const guild = member.guild;
	// Send the message to a designated channel on a server:
	const channel = member.guild.channels.cache.find(ch => ch.id === 'Put your channel ID here');
	// Do nothing if the channel wasn't found on this server
	if (!channel) return;
	// Send the message, mentioning the member
	channel.send({ content: `Hey ${member.user.tag}, welcome to **${guild.name}!**` });
	member.send({ content: `Have a good time here in **${guild.name}**! Please make sure to read the rules before sending in #rules.` });
});


// Create an event listener for removed guild members
client.on('guildMemberRemove', member => {
	// Send the message to a designated channel on a server:
	const channel = member.guild.channels.cache.find(ch => ch.id === 'Put your channel ID here');
	// Do nothing if the channel wasn't found on this server
	if (!channel) return;
	// Send the message, mentioning the member
	channel.send({ content: `${member.user.tag} just left the server  :c` });
});


/* Made By K.K Designs 🙂 */
client.login('your-token-goes-here');
