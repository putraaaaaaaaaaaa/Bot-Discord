const { Message, Client, MessageEmbed } = require("discord.js");
const { pagination } = require("reconlx");

module.exports = {
  name: "colouring",
  aliases: ['colour'],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {

    const embed1 = new MessageEmbed()
      .setTitle('Upper Body')
      .setImage('https://imgur.com/QiFxQqf.png')
      .setColor('RANDOM')
      .setFooter("Credit: ");

    const embed2 = new MessageEmbed()
      .setTitle('Eyes Colouring')
      .setImage('https://imgur.com/1pKF9QC.png')
      .setColor('RANDOM')
      .setFooter("Credit: ")
      
      const embed3 = new MessageEmbed()
      .setTitle('Full Body')
      .setImage('https://imgur.com/YeAm2IB.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed4 = new MessageEmbed()
      .setTitle('Beach Suit')
      .setImage('https://imgur.com/VQXi90u.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed5 = new MessageEmbed()
      .setTitle('Skirt')
      .setImage('https://imgur.com/YUPjrlA.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed6 = new MessageEmbed()
      .setTitle('Skirt')
      .setImage('https://imgur.com/4eGq4xh.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed7 = new MessageEmbed()
      .setTitle('Hair')
      .setImage('https://imgur.com/ZgA5cLF.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed8 = new MessageEmbed()
      .setTitle('Ambient Style')
      .setImage('https://imgur.com/0WQwtZ8.png')
      .setColor('RANDOM')
      .setFooter('Credit: @HaginoKouta')
      
      const embed9 = new MessageEmbed()
      .setTitle('Hair')
      .setImage('https://imgur.com/t6pJlKZ.png')
      .setColor('RANDOM')
      .setFooter('Credit: Tiri')
      
      const embed10 = new MessageEmbed()
      .setTitle('Hair')
      .setImage('https://imgur.com/GZghnQp.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed11 = new MessageEmbed()
      .setTitle('Hair')
      .setImage('https://imgur.com/WSTKBQK.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed12 = new MessageEmbed()
      .setTitle('Head')
      .setImage('https://imgur.com/ueBbk8U.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed13 = new MessageEmbed()
      .setTitle('Ambient')
      .setImage('https://imgur.com/4Zr74A4.png')
      .setColor('RANDOM')
      .setFooter('Credit: @Celestalfang')
      
      const embed14 = new MessageEmbed()
      .setTitle('Body')
      .setImage('https://imgur.com/x4wNnIq.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed15 = new MessageEmbed()
      .setTitle('Hair')
      .setImage('https://imgur.com/U6Od9Em.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed16 = new MessageEmbed()
      .setTitle('Head')
      .setImage('https://imgur.com/hQDVK18.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')

    const embeds = [
      embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed8, embed9, embed10, embed11, embed12, embed13, embed14, embed15, embed16
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