
module.exports = [{
    method: 'GET',
    path: '/ping',
    config: { 
        cors: true 
    },
    handler: function ( req, reply ) {
        reply( 'PONG' )
    }
}]