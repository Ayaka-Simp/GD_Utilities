import axios from "axios"
import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: "geometry-dash",
    description: "Takes a level id, fetches it through colon's api (https://gdbrowser.com/api), and returns the level.",

    expectedArgs: "<id>",

    aliases: ["id", 'level'],
    
    options: [
        {
            name: "id",
            description: "The id of the level to find on the api.",
            type: "INTEGER",
            required: true,
        },
    ],

    slash: "both",
    testOnly: true,
    guildOnly: false,

    callback: async ({ message, interaction, args }) => {
        const levelID = args.shift()
        const { data } = await axios.get(`https://gdbrowser.com/api/${levelID}`)
        if (data===-1) {
            const messageEmbed = new MessageEmbed()
                .setTitle("Error fetching level")
                .setDescription(`The level with id ${levelID} does not exist.`)
            return {
                embeds: [messageEmbed],
                ephemeral: true
            }
        }
        const embed = new MessageEmbed()
            .setTitle("Your level")
            .addFields([
                {
                    name: "Name",
                    value: data.name,
                    inline: true
                },
                {
                    name: "id",
                    value: data.id,
                    inline: true
                },
                {
                    name: "description",
                    value: data.description,
                    inline: true
                },
                {
                    name: "author",
                    value: data.author,
                    inline: true
                },
                {
                    name: "playerID",
                    value: data.playerID,
                    inline: true
                }
            ])
    }
} as ICommand