const Discord = module.require("discord.js");
const { MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clap')
		.setDescription('Clap between words')
    .addStringOption(option => 
    option.setName('words')
    .setDescription('The words to make clappy')
    .setRequired(true)),
		
	async execute(interaction) {
    const fg = interaction.options.getString("words")
    console.log(`${interaction.user.tag} ran clap`)
    return interaction.reply(fg.replace(/ /g, " 👏 "));
    
  },
};
