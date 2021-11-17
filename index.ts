import { Client, Intents } from "discord.js";
import WCommands from "wokcommands";
import path from "path";
const config = require('./config.json')

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_PRESENCES
    ]
})

client.once('ready', () => {
    client.user!.setPresence({
        status: 'online',
        activities: [{
            name: "Geometry Dash"
        }]
    })
    
    console.log("Bot is ready")

    new WCommands(client, {
        commandsDir: path.join(__dirname, "commands"),
        featuresDir: path.join(__dirname, "features"),
        testServers: ["849513566692442112", "881714420408000512"],
        typeScript: true,
        botOwners: ["717224587951079445"],
        mongoUri: config.mongoUri
    })
})

client.login(config.token)