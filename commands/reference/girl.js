const { Message, Client, MessageEmbed } = require("discord.js");
const { pagination } = require("reconlx");

module.exports = {
  name: "girl",
  aliases: ['girlHead'],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
     
     const embed1 = new MessageEmbed()
      .setTitle('Hair')
      .setImage('https://imgur.com/YR1BIgA.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed2 = new MessageEmbed()
      .setTitle('Hair')
      .setImage('https://imgur.com/7F03gGR.png')
      .setColor('RANDOM')
      .setFooter('Credit: @sutera.sea')
      
      const embed3 = new MessageEmbed()
      .setTitle('Hair')
      .setImage('https://imgur.com/zr4iAET.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed4 = new MessageEmbed()
      .setTitle('Head')
      .setImage('https://imgur.com/kbCi0te.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed5 = new MessageEmbed()
      .setTitle('hair')
      .setImage('https://imgur.com/OCDwhji.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed6 = new MessageEmbed()
      .setTitle('Head')
      .setImage('https://imgur.com/bQQlamQ.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed7 = new MessageEmbed()
      .setTitle('Head')
      .setImage('https://imgur.com/KOL9ofH.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed8 = new MessageEmbed()
      .setTitle('Head')
      .setImage('https://imgur.com/S6HTsfF.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed9 = new MessageEmbed()
      .setTitle('Head')
      .setImage('https://imgur.com/zkXYRFb.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embeds = [
        embed1,
        embed2,
        embed3,
        embed4,
        embed5,
        embed6,
        embed7,
        embed8,
        embed9
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