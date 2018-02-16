exports.run = (client, message, args) => {
  const m = message.channel_id; // shortcut, tho next lib updates will make it easier to send msgs.
  if(!client.devs.includes(message.author.id)) {
   return client.sendMessage(m, "This command is for devs only!");
 } try {
  let evaled = eval(args.join(" "));
  client.sendMessage(m, `\`\`\`js\n${evaled}\`\`\``);
 } catch(e) {
  client.sendMessage(m, `\`\`\`${e}\`\`\``);
 }
};
  
