const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wb')
		.setDescription('writes back!'),
	async execute(interaction) {
 
	},
};