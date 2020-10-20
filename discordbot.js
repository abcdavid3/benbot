const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content.includes('cringe')) {
        message.channel.send('https://i.imgur.com/RfGVTkW.png');
        message.channel.send(':rotating_light: WARNING WARNING BEN IS CURRENTLY RAGING PLEASE FIND THE NEAREST SHELTER :rotating_light:');
        message.channel.send('https://i.imgur.com/RfGVTkW.png');
	}
});
