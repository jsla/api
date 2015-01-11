
var boom = require( 'boom' ),
    bus = require( '../bus' )

module.exports = [{
    method: 'PUT',
    path: '/api/subscribe',
    config: { 
        cors: true 
    },
    handler: function ( req, reply ) {

        if ( typeof req.payload !== 'object' || typeof req.payload.email !== 'string' ) {
            return reply( boom.badRequest( 'Invalid request, include an email key in JSON body of request' ) );
        }

        bus.emit( 'api:subscribe', req.payload.email, function( err, resp ) {
            if ( err ) return reply( boom.wrap( err, 500 ) )
            reply( resp )
        })
    }
}]