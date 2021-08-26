const { SlashCommandBuilder } = require('@discordjs/builders');
const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('join')
		.setDescription('joins to voice channel'),
	async execute(interaction) {
        const connection = joinVoiceChannel({
            channelId: "880341424451776536",
            guildId: interaction.channel.guild.id,
            adapterCreator: interaction.channel.guild.voiceAdapterCreator,
            debug: true,
        });

        console.log(connection);
        // console.log(interaction.channel.id);
	},
};