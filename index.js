
require( 'dotenv' ).load( );

var // setting up hapi 
Hapi = require( 'hapi' ),
port = process.env.NODE_PORT || 3030,
hostname = process.env.NODE_HOSTNAME || 'localhost',
options = process.env,
server = new Hapi.Server()

server.connection({
    host: hostname,
    port: port
})

require( './src/routes/index' ).getRoutes( function( err, routes ) {
    server.route( routes )
    server.start( function ( ) {
        console.log( 'Server started @ %s:%s', hostname, port )
    } )
} )