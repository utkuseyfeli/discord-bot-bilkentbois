const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Play the song on the URL.')
		.addStringOption( option => 
			option.setName("play").setRequired(true).setDescription("Playing an url")),
	async execute(interaction) {

		console.log('GITDI', interaction);

		const url = interaction.options.getString('play');
		if (url) return interaction.reply(`Playing ${url}.`);
		return interaction.reply('URL gir kucuk beyinli orospu evladi');
	},
};
	