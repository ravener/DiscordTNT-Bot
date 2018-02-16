exports.run = (client, message, args) => {
  let m = message.channel_id;
  client.sendMessage(m, args.join(" "));
};
