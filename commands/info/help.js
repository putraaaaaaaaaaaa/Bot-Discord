const { Message, Client, MessageEmbed, MessageButton, MessageActionRow, MessageSelectMenu, } = require("discord.js");

module.exports = {
  name: "help",
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {

    const embed = new MessageEmbed()
      .setAuthor(`Kalki Help Menu • Requested by ${message.author.username}`,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setURL(message.author.displayAvatarURL({ dynamic: true }))
      .addFields(
      {
        name: `${client.user.username}`,
        value: `${client.user.username} is a program to make it easier for Digital Artists to find references. You can find reference with (prefix)theme. Check our theme with (/)`
      })
      .setColor("FE00FF");


    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setStyle("LINK")
        .setLabel("Donate")
        .setURL(`https://saweria.co/Putradesu`),
        new MessageButton()
        .setStyle("LINK")
        .setLabel("Submit Reference")
        .setURL(`https://forms.gle/m7xSvrwgVWXzZ75J9`),
      );

    await message.channel.send({ embeds: [embed], components: [row] });
  }
};