const { Client } = require('discord.js-selfbot-v13');
const client = new Client();
require('dotenv').config();

let mainAccount;

client.on('ready', async () => {
    console.log(`${client.user.username} is ready!`);
    mainAccount = await client.users.fetch(process.env.MAIN_ID)
})

client.on('messageCreate', async (message) => {
    if ((message.channel.type === 'DM') && (message.author.id !== process.env.ALT_ID)) {
        mainAccount.send(message.content)
    }
})

client.login(process.env.ALT_TOKEN);
