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
      .setDescription("You can check all our theme in this menu box")
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
					]),
      )


    await interaction.followUp({ embeds: [embed], ephemeral: true, components: [row] });

  },
};