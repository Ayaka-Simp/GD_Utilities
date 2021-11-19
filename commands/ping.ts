import { ICommand } from "wokcommands";

export default {
    category: "testing",
    description: "Pings the bot and then sends the ping back",

    slash: "both",
    testOnly: true,
    guildOnly: false,

    callback: ({ interaction, message }) => {
        if (interaction) {
            interaction.reply({
                content: `It took ${Date.now() - interaction.createdTimestamp}ms to ping RobTop to finish 2.2.`,
                ephemeral: false
            })
        } else {
            message.reply(`It took ${Date.now() - message.createdTimestamp}ms to ping RobTop to finish 2.2.`)
        }
    }
} as ICommand