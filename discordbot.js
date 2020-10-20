const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content.includes('cringe')) {
		message.channel.send(':rotating_light: WARNING WARNING BEN IS CURRENTLY RAGING PLEASE FIND THE NEAREST SHELTER :rotating_light:', {
            files: [
                "./image-to-send.png"
            ]
        });
	}
});

client.login('NzY1MjQzOTU1NDQ4NTEyNTIz.X4R--A.nSLmMopBQK_r6h65r_b5s02mvEg');