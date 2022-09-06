const { Client } = require('discord.js-selfbot-v13');
const client = new Client();
require('dotenv').config();

client.on('ready', async () => {
    console.log(`${client.user.username} is ready!`);
})

client.on('messageCreate', async (message) => {
    const mainAccount = await client.users.fetch(process.env.MAIN_ID)

    if ((message.channel.type === 'DM') && (message.author.id !==process.env.ALT_ID) && (message.author.id !== process.env.MAIN_ID)) {
        mainAccount.send(message.content)
    }
})

client.login(process.env.ALT_TOKEN);