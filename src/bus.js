
var EventEmitter = require( 'eventemitter2' ).EventEmitter2

// simple msg bus
function Bus( ) {
    EventEmitter.call( this )
}

Bus.prototype = Object.create( EventEmitter.prototype )

module.exports = new Bus()
module.exports.Bus = Bus