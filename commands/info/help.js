const { Message, Client, MessageEmbed, MessageActionRow, MessageSelectMenu, } = require("discord.js");

module.exports = {
  name: "help",
  description: "Help Menu",
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const directories = [
            ...new Set(client.commands.map((cmd) => cmd.directory)), ];

    const formatString = (str) =>
      `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;

    const categories = directories.map((dir) => {
      const getCommands = client.commands
        .filter((cmd) => cmd.directory === dir)
        .map((cmd) => {
          return {
            name: cmd.name || "no name",
            description: cmd.description || "no description",
          }
        })
      return {
        directory: formatString(dir),
        commands: getCommands,
      }
    });


    const embed = new MessageEmbed().setDescription("Please choose a category")

    const components = (state) => [
      new MessageActionRow().addComponents(
        new MessageSelectMenu()
        .setCustomId("Help-Menu")
        .setPlaceholder("Please Select Category")
        .setDisabled(state)
        .addOptions(
          categories.map((cmd) => {
            return {
              label: cmd.directory,
              value: cmd.directory.toLowerCase(),
              description: `Commands from ${cmd.directory} category`,
            }
          }))
      )
      ]



    const intialMessage = await message.channel.send({
      embeds: [embed],
      components: components(false),
    })

    const filter = (interaction) =>
      interaction.user.id === message.author.id;

    const collector = message.channel.createMessageComponentCollector({
      filter,
      componenType: "SELECT_MENU",
    })

    collector.on("collect", (interaction) => {

      const [directory] = interaction.values;
      const category = categories.find(
        (x) => x.directory.toLowerCase() === directory
      )

      const categoryEmbed = new MessageEmbed()
        .setTitle(`${directory} commands`)
        .setDescription("Here are the list")
        .addFields(
          category.commands.map((cmd) => {
            return {
              name: `\`${cmd.name}\``,
              value: cmd.description,
              inline: true,
            }
          })
        )

      interaction.update({ embeds: [categoryEmbed] })
    })

    collector.on("end", () => {
      intialMessage.edit({ components: components(true) })
    })


  }
};