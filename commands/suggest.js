const { MessageEmbed } = require('discord.js');
const Discord = module.require("discord.js");
const { Snake } = require("discord-gamecord")

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('suggest')
    .setDescription('suggest somthing')
    .addStringOption(option =>
      option.setName('suggestion')
        .setDescription('thing to suggest')
        .setRequired(true)),
  async execute(interaction) {
    const tte = interaction.options.getString('suggestion')
    const exampleEmbed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Suggestion')
      .setURL('')
      .setAuthor({ name: `<@${interaction.user.id}>`, iconURL: `${interaction.user.displayAvatarURL({ format: 'png' })}` })
      .setThumbnail(`${interaction.user.displayAvatarURL({ format: 'png' })}`)
      .setDescription(`${tte}`)
      .setTimestamp()
      .setFooter({ text: 'Rambam Bot', });
    interaction.guild.channels.cache.get('1011835704206184519').send({ embeds: [exampleEmbed] }).then(exampleEmbed => {
      exampleEmbed.react("✅").then(exampleEmbed.react("❌"));
    })
    return interaction.reply('Sent to suggestions.')

  }
}
