const { MessageEmbed } = require('discord.js')
const Discord = require("discord.js");

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('testreply')
    .setDescription('undefined'),
    async execute(interaction, client) {
client.messages.cache.get('1058161314935078995').reply("oogly boogly")
}
}