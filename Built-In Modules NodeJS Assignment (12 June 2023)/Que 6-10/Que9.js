const EventEmitter = require("events");

const event = new EventEmitter();

const subscribeMessage = (channelNmae) => {
    console.log(`Thanks for subscribing to ${channelNmae}`);
}

event.addListener("subsscribe", subscribeMessage)

console.log("Calling event listner befor removing");

event.emit("subsscribe", "College Wallah");

console.log("Calling event listner after removing");

event.removeListener("subsscribe", subscribeMessage);

event.emit("subsscribe", "College Wallah");