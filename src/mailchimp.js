

var MailChimpAPI = require( 'mailchimp' ).MailChimpAPI,
    apiKey = process.env.MAILCHIMP_API_KEY,
    listId = process.env.MAILCHIMP_LIST_ID,
    bus = require( './bus' ),
    api

try { 
    api = new MailChimpAPI( apiKey, { 
        version : '2.0', 
        secure : true 
    } )
} catch (error) {
    console.log(error.message)
}

if ( !api ) return;

function subscribeQuestion( question ) {
    return /newsletter/gi.test( question.title )
} 

function subscribe( email, callback ) {
    api.lists_subscribe( {
        id: listId,
        email: {
            email: email
        },
        double_optin: false // should already be approved on tito page
    }, callback )    
}

/*
    needs a simple email validator
*/

bus.on( 'hook:tito', function( payload ) {

    var subscribe = payload.answers.filter( subscribeQuestion )[ 0 ]

    if ( subscribe && subscribe.response === true ) {
        subscribe( payload.email, function( ) {
            // should log
        } )
    }
} )

bus.on( 'api:subscribe', function( payload, reply ) {

    var email = payload.email;

    if ( email ) {
        subscribe( email, function( err, resp ) {
            // should log
            reply( err, resp )
        } )
    }
} )
