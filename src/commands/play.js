const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Play the song on the URL.')
		.addUserOption(option => option.setName('url').setDescription('The song to play')),
	async execute(interaction) {

    console.log('GITDI', interaction);
		const url = interaction.options.getUser('url'); // APTAL
		if (url) return interaction.reply(`Playing ${url}.`);
		return interaction.reply('URL gir kucuk beyinli orospu evladi');
	},
};
