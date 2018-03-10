const DiscordTNT = require("discord-tnt");

exports.run = (client, message, args) => {
	const m = message.channel_id;
	const fullEmWords = args.join(" ");
 const em = fullEmWords.split("|");
 if(em.length < 1) return client.sendMessage(m, "Use embed by splitting your things with | format is as follows\nd.embed color(0xRGB) | title | Description\nSoon to be improved even more.");
 const realEmbed = new DiscordTNT.EmbedBuilder()
    .setColor(parseInt(em[0]))
    .setTitle(em[1])
    .setDescription(em[2]);
    client.sendEmbed(m, realEmbed);
};
