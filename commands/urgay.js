const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('urgay')
        .setDescription('-'),
    async execute(interaction) {
        await interaction.reply(`That's why I visit ur dad instead of ur mom ;)`)
    },
};