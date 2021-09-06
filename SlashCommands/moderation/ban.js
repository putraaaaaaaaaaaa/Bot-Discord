const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
  
    ...new SlashCommandBuilder()
      .setName("ban")
      .setDescription("Allows the admin or owner to ban the member.")
      .addUserOption((option) => option.setName('user').setDescription('The person who you want to ban').setRequired(true))
      .addStringOption(option => option.setName('reason').setDescription('Reason to ban member').setRequired(true)),
   
    run: async (client, interaction, args) => {
        
        if (!interaction.member.permissions.has("BAN_MEMBERS")) return interaction.followUp({ content: "Kamu tidak punya izin untuk menggunakan ini", ephemeral: true })
        
        const user = interaction.options.getUser('user')
        const member = interaction.guild.members.cache.get(user.id) || await interaction.guild.members.fetch(user.id).catch(err => {})
        
        if (!member) return interaction.followUp("beep boop - eror terdeteksi 😵");
        const reason = interaction.options.getString('reason')
        
        if (!member.bannable || member.user.id === client.user.id)
          return interaction.followUp("beep boop - eror terdeteksi 😵");
        
        if (interaction.member.roles.highest.position <= member.roles.highest.position)
          return interaction.followUp('Member yang ingin kamu ban mempunyai role lebih tinggi atau sama dengan kamu')
        
        const embed = new MessageEmbed()
          .setDescription(`**${member.user.tag}** TerBanned karena  \`${reason}\``)
          .setColor("GREEN")
          .setFooter("Ban Member")
          .setTimestamp()
        
        await member.user.send(`You are banned from **\`${interaction.guild.name}\`** for \`${reason}\``).catch(err => {})
        member.ban({ reason })
        
        return interaction.followUp({ embeds: [embed] })
        
    },
};
