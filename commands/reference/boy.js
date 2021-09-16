const { Message, Client, MessageEmbed } = require("discord.js");
const { pagination } = require("reconlx");

module.exports = {
  name: "boy",
  aliases: ['boyHead'],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    
     
     const embed1 = new MessageEmbed()
      .setTitle('Head')
      .setImage('https://imgur.com/9EDYw8D.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embeds = [
        embed1
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