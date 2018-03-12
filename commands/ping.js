exports.run = (client, message, args) => {
 client.sendMessage(message.channel_id, `Pong! Websocket Latency: ${client.ping || '`No heartbeat yet`'} ms`);
};