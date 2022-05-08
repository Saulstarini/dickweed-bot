const { SlashCommandBuilder } = require('@discordjs/builders');
const { execute } = require('./urgay');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ronigay')
        .setDescription('-'),
    async execute(interaction) {
        await interaction.reply('I know right!?!')
    },
};