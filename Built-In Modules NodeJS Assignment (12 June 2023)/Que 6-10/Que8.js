const EventEmitter = require("events");

const event = new EventEmitter();

event.addListener("subscribe", (msg) => {
    console.log(`Thanks for subscribing to ${msg}`);
})

event.emit("subscribe", "College Wallah");