const { Message, Client, MessageEmbed } = require("discord.js");
const { pagination } = require("reconlx");

module.exports = {
  name: "pose",
  aliases: ['poses'],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {

    const embed1 = new MessageEmbed()
      .setTitle('Superhero Pose')
      .setImage('https://i.imgur.com/5JedzeN.png')
      .setColor('RANDOM')
      .setFooter("Credit: ");

    const embed2 = new MessageEmbed()
      .setTitle('Sword Fighting')
      .setImage('https://i.imgur.com/x3pkWky.png')
      .setColor('RANDOM')
      .setFooter("Credit: ")

    const embed3 = new MessageEmbed()
      .setTitle('Dodge Pose')
      .setImage('https://imgur.com/ZszLqEG.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed4 = new MessageEmbed()
      .setTitle('Superhero Pose')
      .setImage('https://imgur.com/6ckHWbi.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed5 = new MessageEmbed()
      .setTitle('Easy Pose')
      .setImage('https://imgur.com/NDNr7Zo.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed6 = new MessageEmbed()
      .setTitle('Sword Pose')
      .setImage('https://imgur.com/5GwrOSd.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')

    const embeds = [embed1, embed2, embed3, embed4, embed5, embed6]


    pagination({
      embeds: embeds,
      channel: message.channel,
      author: message.author,
      pageTravel: true,
      time: 180000,
      button: [
        {
          name: 'next',
          emoji: '<:kanan:886854524562722857>',
          style: 'SUCCESS',
        },
        {
          name: 'previous',
          emoji: '<:kiri:886854576303665202>',
          style: 'SUCCESS',
        },
        {
          name: 'number',
          emoji: '<:pesawat:886854458930241546>',
          style: 'SECONDARY',
        }
        
      ]

    })
  }
}