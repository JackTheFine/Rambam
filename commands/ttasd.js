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
	async execute(interaction) {
    const psw = interaction.options.getInteger('password')
    if ("1252" == `${psw}`) {
      
      let time = "5s";
await interaction.reply('https://www.youtube.com/watch?v=h1-f9p4kmbg')
      setTimeout(function () {
      interaction.editReply(`You didnt see anything.`);
    }, ms(time));
    console.log(`${interaction.user.tag} ran ttasd with the correct password`)
    }
    else {
      const eh = new MessageEmbed()
      .setAuthor('Discord.Js (NPM V.8.2)')
      .setTitle('Command not set up.')
      .setDescription('Contact the bot hoster to resolve this issue.')
      interaction.reply({ embeds: [eh]})
      console.log(`${interaction.user.tag} ran ttasd with the wrong password`)
      return
    };
    
  }
}

