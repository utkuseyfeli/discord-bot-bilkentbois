const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wb')
		.setDescription('writes back!')
		.addStringOption( option => 
			option.setName('input').setDescription("The input to echo back").setRequired(true)),
	async execute(interaction) {
		const input = interaction.options.getString('input');
		// console.log(`input is `, input);
		await interaction.reply(`You wrote ${input}`); 
	},
};