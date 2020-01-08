const regEvent = (event) => require(`../events/${event}`)

module.exports = client => {
client.on("ready", function() {regEvent("ready")(client)});
}