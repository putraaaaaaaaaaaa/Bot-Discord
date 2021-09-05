const { Message, Client, MessageEmbed, MessageActionRow, MessageSelectMenu, } = require("discord.js");

module.exports = {
  name: "help",
  description: "Informasi tentangku",
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const emojis = {
      info: "<:orang:821250056312586250>",
    }; 
    const directories = [
            ...new Set(client.commands.map((cmd) => cmd.directory)), ];

    const formatString = (str) =>
      `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;

    const categories = directories.map((dir) => {
      const getCommands = client.commands
        .filter((cmd) => cmd.directory === dir)
        .map((cmd) => {
          return {
            name: cmd.name || "masih proyek",
            description: cmd.description || "masih proyek",
          }
        })
      return {
        directory: formatString(dir),
        commands: getCommands,
      }
    });


    const embed = new MessageEmbed()
      .setAuthor(
        `&{client.user.username} Help Menu • Requested by ${message.author.username}`,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setURL(message.author.displayAvatarURL({ dynamic: true }))
      .addFields(
      {
        name: `${client.user.username}`,
        value: `${client.user.username} adalah Bot Discord fungsional yang bertujuan mempermudah user-user dalam menggunakan Bot Discord`
      },
      {
        name: `Help Menu`,
        value: `Dibawah ini adalah Help Menu Box, kalian bisa memilih category commands yang ingin kalian cari secara mudah`
      },
       {
          name: `Support Me`,
          value: `[Saweria](https://saweria.co/Putradesu)\n[Trakteer](https://trakteer.id/Putraaaaa/tip)`
        })
      .setFooter("Menu otomatis akan dihapus dalam 5 menit")
      .setColor("FE00FF");


    const components = (state) => [
      new MessageActionRow().addComponents(
        new MessageSelectMenu()
        .setCustomId("Help Menu Box")
        .setPlaceholder("Pilih Salah Satu Kategori")
        .setDisabled(state)
        .addOptions(
          categories.map((cmd) => {
            return {
              label: cmd.directory,
              value: cmd.directory.toLowerCase(),
              description: `Klik untuk melihat`,
              emoji:
              emojis[cmd.directory.toLowerCase()] || null,
            }
          }))
      )
      ]


    const intialMessage = await message.channel.send({
      embeds: [embed],
      components: components(false)
    })

    const filter = (interaction) =>
      interaction.user.id === message.author.id;

    const collector = message.channel.createMessageComponentCollector({
      filter,
      componenType: "SELECT_MENU",
      time: 300000,
    })

    collector.on("collect", (interaction) => {

      const [directory] = interaction.values;
      const category = categories.find(
        (x) => x.directory.toLowerCase() === directory
      )

      const categoryEmbed = new MessageEmbed()
        .setTitle(`Kategori ${directory}`)
        .setDescription(`Berikut adalah list commands untuk kategori ${directory}. Commands harus diawali dengan prefix(!) atau Slash(/)\nContoh menggunakan commands : \`\`\`!ping\`\`\``)
        .setColor("FE00FF")
        .addFields(
          category.commands.map((cmd) => {
            return {
              name: `**${cmd.name}**`,
              value: cmd.description,
              inline: true,
            }
          })
        )
        .addFields(
        {
          name: `Support Me`,
          value: `[Saweria](https://saweria.co/Putradesu)\n[Trakteer](https://trakteer.id/Putraaaaa/tip)`
        })

      interaction.update({ embeds: [categoryEmbed] })

    })

    collector.on("end", () => {
      intialMessage.edit({ components: components(true) })
    })


  }
};