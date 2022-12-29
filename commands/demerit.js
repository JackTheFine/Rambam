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
                .addUserOption(option => option.setName('target').setDescription('The member to give a demerit to').setRequired(true)))
        .addSubcommand(subcommand =>
            subcommand
                .setName('remove')
                .setDescription('remove demerits')
                .addUserOption(option => option.setName('target').setDescription('The member to remove a demerit from').setRequired(true)))
        .addSubcommand(subcommand =>
            subcommand
                .setName('check')
                .setDescription('check demerits')
                .addUserOption(option => option.setName('target').setDescription('The member to check demerits of').setRequired(true))),
    async execute(interaction, client) {
        const tohack = interaction.options.getMember('target');
        const channel = client.channels.cache.get('1056634339875635260');
        const demerits = JSON.parse(fs.readFileSync("demerits.json", "utf-8") || "");
        switch (interaction.options._subcommand) {
            case 'add':
                if (demerits[tohack.user.tag]) demerits[tohack.user.tag].count++;
                else demerits[tohack.user.tag] = { name: tohack.displayName, count: 1 };

                fs.writeFileSync("demerits.json", JSON.stringify(demerits));
                interaction.reply(`Demerit Given to ${tohack.displayName}`)

                const embed = new MessageEmbed()

                 .setAuthor({ name: `${interaction.user.tag}` })
                .setTitle(`gave a demerit to ${tohack.displayName}`)
                .setColor('#03fc2c')
                .setTimestamp()
                channel.send({ embeds: [embed] });
                break;
            case 'check':
                interaction.reply(demerits[tohack.user.tag] ? `${tohack.displayName} has ${demerits[tohack.user.tag].count} demerit${demerits[tohack.user.tag].count != 1 ? "s" : ""}!` : "This user has no demerits.");

                const embed1 = new MessageEmbed()

                 .setAuthor({ name: `${interaction.user.tag}` })
                .setTitle(`checked ${tohack.displayName}s demerits`)
                .setColor('#03fc2c')
                .setTimestamp()
                channel.send({ embeds: [embed1] });
                break;
            case 'remove':
                if (demerits[tohack.user.tag].count == '0') return interaction.reply(`${tohack.displayName} needs a demerit before being able to remove one!`)
                if (demerits[tohack.user.tag]) demerits[tohack.user.tag].count--;
                else return interaction.reply(`${tohack.displayName} doesnt have any demerits.`)
    
                fs.writeFileSync("demerits.json", JSON.stringify(demerits));
                interaction.reply(`Demerit removed from ${tohack.displayName}`)

                const embed2 = new MessageEmbed()

                 .setAuthor({ name: `${interaction.user.tag}` })
                .setTitle(`removed a demerit from ${tohack.displayName}`)
                .setColor('#03fc2c')
                .setTimestamp()
                channel.send({ embeds: [embed2] });
                break;
        }

    }
}