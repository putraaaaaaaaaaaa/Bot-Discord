const { Message, Client, MessageEmbed } = require("discord.js");
const { pagination } = require("reconlx");

module.exports = {
  name: "lightning",
  aliases: ['shadow'],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    
     const embed1 = new MessageEmbed()
      .setTitle('Ambient Shadow')
      .setImage('https://imgur.com/l9vbgQj.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed2 = new MessageEmbed()
      .setTitle('Lightning Shadow')
      .setImage('https://imgur.com/EeGiFaH.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
     
     const embed3 = new MessageEmbed()
      .setTitle('Lightning')
      .setImage('https://imgur.com/xfSCJGi.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed4 = new MessageEmbed()
      .setTitle('Lightning')
      .setImage('https://imgur.com/kd6sd0O.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed5 = new MessageEmbed()
      .setTitle('Shadow')
      .setImage('https://imgur.com/TGSKTwZ.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed6 = new MessageEmbed()
      .setTitle('Shadow')
      .setImage('https://imgur.com/VOBSE3A.png')
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