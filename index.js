const { Client } = require('discord.js-selfbot-v13');
const client = new Client();
require('dotenv').load();

client.on('ready', async () => {
    console.log(`${client.user.username} is ready!`);
})

client.login(proces.env.ALT_TOKEN);