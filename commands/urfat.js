const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('urfat')
        .setDescription('-'),
    async execute(interaction) {
        await interaction.reply('Not as fat as ur mom :)')
    },
};