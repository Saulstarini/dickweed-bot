const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('iloveyou')
        .setDescription('-'),
    async execute(interaction) {
        await interaction.reply('HA! GAAAYYYYYYYYY!!!')
    },
};