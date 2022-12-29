const fs = require('fs');
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('demerit')
        .setDescription('demerits the mentioned person')
        .addSubcommand(subcommand =>
            subcommand
                .setName('add')
                .setDescription('add demerits')
                .addUserOption(option => option.setName('target').setDescription('The member give a demerit to').setRequired(true)))
        .addSubcommand(subcommand =>
            subcommand
                .setName('check')
                .setDescription('check demerits')
                .addUserOption(option => option.setName('target').setDescription('The member give a demerit to').setRequired(true))),
    async execute(interaction, client) {
        const tohack = interaction.options.getMember('target');
        const channel = client.channels.cache.get('1056634339875635260');
        const demerits = JSON.parse(fs.readFileSync("demerits.json", "utf-8") || "");
        switch (interaction.options._subcommand) {
            case 'add':
                demerits.push(tohack.displayName);
                fs.writeFileSync("demerits.json", JSON.stringify(demerits));
                interaction.reply('Demerit Given')

                const embed = new MessageEmbed()

                 .setAuthor({ name: `${interaction.user.tag}` })
                .setTitle(`gave a demerit to ${tohack.displayName}`)
                .setColor('#03fc2c')
                .setTimestamp()
                channel.send({ embeds: [embed] });
                break;
            case 'check':
                interaction.reply('Not setup if u want it to be ping @ari and @shmuli morgenstern')
                const embed1 = new MessageEmbed()

                 .setAuthor({ name: `${interaction.user.tag}` })
                .setTitle(`checked ${tohack.displayName}s demerits`)
                .setColor('#03fc2c')
                .setTimestamp()
                channel.send({ embeds: [embed1] });
            break;
        }

    }
}