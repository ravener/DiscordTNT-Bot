exports.run = (client, message, args) => {
	client.sendMessage(m, `\`\`\`asciidoc\n == Help ==
• ping :: Pong! Checks websocket latency.
• say :: Bot repeats what you say.
• embed :: Send a simple RichEmbed.
• invite :: Invite me to your server.
• help :: Shows this message.
• exec :: Executes command line code (owner only)
• eval :: Evalutes arbitrary javascript (owner only)
\`\`\``);
};