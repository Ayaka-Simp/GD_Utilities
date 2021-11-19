import { ICommand } from "wokcommands";

export default {
    category: "testing",
    description: "asdf",

    slash: true,
    testOnly: true,

    callback: ({ interaction }) => {
        console.log(interaction.id);
        interaction.reply('testing')
    }
} as ICommand