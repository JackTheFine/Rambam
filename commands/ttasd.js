const Discord = module.require("discord.js");
const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const ms = require('ms')
module.exports = {
  data: new SlashCommandBuilder()
    .setName('ttasd')
    .setDescription('its a secret lol')
    .addIntegerOption(option =>
      option.setName('password')
        .setDescription('password')
        .setRequired(true)),
  async execute(interaction, client) {
    const psw = interaction.options.getInteger('password')
    if ("1252" == `${psw}`) {

      let time = "5s";
      await interaction.reply('https://www.youtube.com/watch?v=h1-f9p4kmbg').then(setTimeout(function () {
        interaction.deleteReply()
      }, ms(time))
      )
      const channel = client.channels.cache.get('1056634339875635260');
      const embed = new MessageEmbed()

        .setAuthor({ name: `${interaction.user.tag}` })
        .setTitle('Ran ttasd with the right password')
        .setColor('#03fc2c')
        .setTimestamp()
      channel.send({ embeds: [embed] });
    }
    else {
      const eh = new MessageEmbed()
        .setAuthor({ name: 'Discord.JS (node V.8.2)' })
        .setTitle('Command not set up.')
        .setDescription('Contact the bot hoster to resolve this issue.')
      interaction.reply({ embeds: [eh] })
      const channel = client.channels.cache.get('1056634339875635260');
      const embed = new MessageEmbed()

        .setAuthor({ name: `${interaction.user.tag}` })
        .setTitle('Ran ttasd with the wrong password')
        .setColor('#03fc2c')
        .setTimestamp()
      channel.send({ embeds: [embed] });
      return
    };

  }
}

