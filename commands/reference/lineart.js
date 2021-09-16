const { Message, Client, MessageEmbed } = require("discord.js");
const { pagination } = require("reconlx");

module.exports = {
  name: "lineart",
  aliases: ['line'],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    
    const embed1 = new MessageEmbed()
      .setTitle('Hair')
      .setImage('https://imgur.com/UC8vhNw.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed2 = new MessageEmbed()
      .setTitle('Hair')
      .setImage('https://imgur.com/htxWQvB.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed3 = new MessageEmbed()
      .setTitle('Hair')
      .setImage('https://imgur.com/UzWY8Ve.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed4 = new MessageEmbed()
      .setTitle('Hair')
      .setImage('https://imgur.com/BlhBIIb.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
     const embed5 = new MessageEmbed()
      .setTitle('Head')
      .setImage('https://imgur.com/DhRs5bD.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embeds = [
        embed1,
        embed2,
        embed3,
        embed4,
        embed5
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