const { Client, CommandInteraction, MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js");

module.exports = {
  name: "theme",
  description: "Check Available Theme",
  type: 'CHAT_INPUT',
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {

    const embed = new MessageEmbed()
      .setTitle("Theme Reference")
      .setDescription("NOTE: keep in mind that this is just list theme, if the system says 'Interaction Failed' just ignore it. My reference can only stay for 3minute, after that the embed become freeze")
      .setFooter("i try my best to include the creator in every image")
      .setColor("RANDOM");

    const row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
        .setCustomId("Theme Menu Box")
        .setPlaceholder("Theme Menu")
        .addOptions([
          {
            label: 'Pose',
            description: '!pose to see reference',
            value: 'pose',
            emoji: '<:emoji_120:853442122190159872>',
						},
						{
						  label: 'Skrits',
						  description: '!skrits to see reference',
						  value: 'skrit',
						  emoji: '<:emoji_116:853441970911051777>',
						},
						{
						  label: 'Colouring',
						  description: '!colour to see reference',
						  value: 'colour',
						  emoji: '<:emoji_118:853442018344566815>',
						},
						{
						  label: 'Shadow and Lightning',
						  description: '!shadow or !lightning to see reference',
						  value: 'shadow',
						  emoji: '<:sokasoka:788850683196735531>',
						},
						{
						  label: 'Anatomy',
						  description: '!anatomy to see reference',
						  value: 'anatomy',
						  emoji: '<:nekothink:797312188036415498>',
						},
						{
						  label: 'Boy',
						  description: '!boy to see reference',
						  value: 'boy',
						  emoji: '<:wth:795805568173735967>',
						},
						{
						  label: 'Girl',
						  description: '!girl to see reference',
						  value: 'girl',
						  emoji: '<:shruug:795038251491524629>',
						},
						{
						  label: 'Lineart',
						  description: '!lineart to see reference',
						  value: 'lineart',
						  emoji: '<:klshrug:797312204402851850>',
						}
					]),
      )


    await interaction.followUp({ embeds: [embed], ephemeral: true, components: [row] });

  },
};