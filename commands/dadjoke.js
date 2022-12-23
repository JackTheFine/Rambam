const giveMeAJoke = require('discord-jokes');
const { MessageEmbed } = require('discord.js')
 const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dadjoke')
		.setDescription('gives you a dadjoke'),
		
	async execute(interaction) {
     // To get a random dad joke
giveMeAJoke.getRandomDadJoke (function(joke) {
	console.log(`${interaction.user.tag} ran dadjoke`)
  return interaction.reply({ content: `${joke}`})
});
       
   }
 }
