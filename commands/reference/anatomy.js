const { Message, Client, MessageEmbed } = require("discord.js");
const { pagination } = require("reconlx");

module.exports = {
  name: "anatomy",
  aliases: ['anatomi'],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    
    const embed1 = new MessageEmbed()
      .setTitle('Body')
      .setImage('https://imgur.com/z4ty1Ns.png')
      .setColor('RANDOM')
      .setFooter('Credit: @manga_materials')
      
      const embed2 = new MessageEmbed()
      .setTitle('chest')
      .setImage('https://imgur.com/YpNm4HW.png')
      .setColor('RANDOM')
      .setFooter('Credit: @manga_materials')
      
      const embed3 = new MessageEmbed()
      .setTitle('Body')
      .setImage('https://imgur.com/p0NucyF.png')
      .setColor('RANDOM')
      .setFooter('Credit: @manga_materials')
      
      const embed4 = new MessageEmbed()
      .setTitle('Fingers')
      .setImage('https://imgur.com/LMamQKf.png')
      .setColor('RANDOM')
      .setFooter('Credit: @manga_materials')
      
      const embed5 = new MessageEmbed()
      .setTitle('Legs')
      .setImage('https://imgur.com/p5gCmxB.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed6 = new MessageEmbed()
      .setTitle('thigh')
      .setImage('https://imgur.com/LONzLBC.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      
      
      const embeds = [
        embed1,
        embed2,
        embed3,
        embed4,
        embed5,
        embed6
        ]
      
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