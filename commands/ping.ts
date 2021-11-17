import { ICommand } from "wokcommands";

export default {
    category: "testing",
    description: "Pings the bot and then sends the ping back",

    slash: "both",
    testOnly: true,
    guildOnly: false,

    callback: ({ interaction, message, client }) => {
        if (interaction) {
            interaction.reply({
                content: `It took ${Date.now() - interaction.createdTimestamp}ms to ping the bot.`,
                ephemeral: false
            })
        } else {
            message.reply(`It took ${Date.now() - message.createdTimestamp}ms to ping the bot.`)
        }
    }
} as ICommand