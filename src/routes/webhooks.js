var bus = require( '../bus' )

module.exports = [{
    method: 'POST',
    path: '/hook/tito-' + process.env.HASH, // this is so this is not a public api 
    config: { 
        cors: true 
    },
    handler: function ( req, reply ) {
        /*

        Sample post data

        {
          "name": "Paul Campbell",
          "first_name": "Paul",
          "last_name": "Campbell",
          "email": "funconf@gmail.com",
          "reference": "1i5nfwf2t",
          "price": "1.00",
          "slug": "1i5nfwf2t24",
          "state_name": "void",
          "gender": "male",
          "release_price": "1.00",
          "discount_code_used": "",
          "release": "AwesomeConf ticket",
          "custom": "Awesome!",
          "registration_id": "bdtyap3hguq",
          "answers": [

          ]
        }

        */
        reply( 'ok' )

        if ( typeof req.payload === 'object' ) {
            bus.emit( 'hook:tito', req.payload )
        }
    }
}]