const { EventEmitter } = require("events");

class MediumQueue extends EventEmitter {};

module.exports = MediumQueue